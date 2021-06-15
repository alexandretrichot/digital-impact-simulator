import React, { useEffect, useState } from 'react';
import './group.scss';

import { useHistory, useParams } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { fetcher } from '../helpers/fetch';
import { Group, Member } from '../types';
import Loader from '../components/loader';
import Error from '../components/error';
import { useDebounce, useLocalStorage } from '../helpers/hooks';
import Simulator from '../components/simulation/simulator';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const GroupPage: React.FC = () => {
	const { groupSlug } = useParams<{ groupSlug?: string }>();

	return (
		<div id="group" className="page">
			{groupSlug ? (
				<SimulateWithGroupView groupSlug={groupSlug} />
			) : (
				<CreateGroupView />
			)}
		</div>
	);
};

export default GroupPage;

const createGroupValidationSchema = Yup.object({
	slug: Yup.string().min(4, 'Slug trop court').required('Le slug est requis'),
	name: Yup.string(),
});

const CreateGroupView: React.FC = () => {
	const history = useHistory();

	return (
		<div className="wrapper">
			<Formik initialValues={{ slug: '', name: '' }} validationSchema={createGroupValidationSchema} onSubmit={(values, helpers) => {
				fetcher<Group>('/api/groups', 'POST', {
					slug: values.slug,
					name: values.name ? values.name : undefined
				})
					.then(r => history.push(`/group/${r.slug}/dashboard`))
					.catch(err => alert(err.message))
					.finally(() => helpers.setSubmitting(false));
			}}
			>
				{
					({
						values,
						errors,
						touched,
						handleSubmit,
						handleBlur,
						handleChange,
						isSubmitting
					}) => (
						<form onSubmit={handleSubmit} style={{ maxWidth: '20rem', margin: '2rem auto' }}>
							<div style={{}}></div>

							<h2>Create a new group</h2>
							<div className="field">
								<input
									type="text"
									name="name"
									placeholder="Nom du groupe"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								<div className="field-error">{errors.name && touched.name && errors.name}</div>
							</div>
							<div className="field">
								<input
									type="text"
									name="slug"
									placeholder="slug"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.slug}
								/>
								<p style={{ backgroundColor: '#ccc', borderRadius: '.2rem', padding: '.1rem .2rem', overflowX: 'scroll' }}>numerique.meusenature.fr/group/{values.slug || 'slug'}</p>
								<div className="field-error">{errors.slug && touched.slug && errors.slug}</div>
							</div>
							<button type="submit" className="btn large" disabled={isSubmitting}>Créer le groupe</button>
						</form>
					)
				}
			</Formik>
		</div>
	);
}

const SimulateWithGroupView: React.FC<{ groupSlug: string }> = ({ groupSlug }) => {
	const [group, setGroup] = useState<Group>();
	const [error, setError] = useState<Error>();

	const [member, setMember] = useLocalStorage<Member | undefined>(`group-${groupSlug}`, undefined);
	const debouncedMember = useDebounce(member, 1000);

	// fetch the group
	useEffect(() => {
		fetcher<Group>(`/api/groups/${groupSlug}`)
			.then(r => setGroup(r))
			.catch(err => {
				console.error(err);
				setError(err);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [groupSlug]);

	useEffect(() => {
		if (group && !member) {
			fetcher<Member>(`/api/groups/${groupSlug}`, 'POST')
				.then(setMember)
				.catch(err => {
					console.error(err);
				});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [group, member]);

	useEffect(() => {
		if (debouncedMember) {
			console.log(debouncedMember.name);
			fetcher<Member, Partial<Member>>(`/api/groups/${groupSlug}/${debouncedMember.id}`, 'PUT', {
				name: debouncedMember.name || undefined,
				stats: debouncedMember.stats,
			})
				.catch(err => {
					console.error(err);
				});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedMember]);

	return (
		<div>
			{
				!group && !error ? (
					<div className="wrapper">
						<Loader>Chargement du groupe</Loader>
					</div>
				) : (
					error ? (
						<div className="wrapper">
							{
								error.name === 'NotFoundError' ? (
									<Error title="Groupe non trouvé" details="Il semble que ce group n'existe pas..." anim="404">
										<Link to="/group" className="btn">Retour à l'accueil</Link>
									</Error>
								) : (
									<Error title={error.message} />
								)
							}
						</div>
					) : (
						member ? (
							<>
								<Helmet>
									<title>{group?.name} | Simulateur d'impact</title>
								</Helmet>
								<div className="wrapper">
									<header>
										<h1>Groupe : {group?.name}</h1>
										<p>Vous êtes dans une simulation de groupe. Cela signifie que les résultats de votre simulation seront visibles en temps réel sur <a href={`/group/${group?.slug}/dashboard`} target="_blank" rel="noreferrer">cette page</a>.</p>

										<div className="user">
											<p>Votre nom dans ce groupe : <input value={member.name} placeholder="Sans nom (cliquez pour éditer)" onChange={ev => setMember({ ...member, name: ev.currentTarget.value })} /></p>
										</div>
									</header>
								</div>
								<Simulator stats={member.stats} onStatsChange={stats => setMember({ ...member, stats })} />
							</>
						) : (
							<div className="wrapper">
								<Loader />
							</div>
						)
					)
				)
			}
		</div>
	);
}
