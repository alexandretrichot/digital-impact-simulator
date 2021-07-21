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
	name: Yup.string().min(4, 'Nom trop court').required('Le nom est requis'),
});

const CreateGroupView: React.FC = () => {
	const history = useHistory();

	return (
		<div className="wrapper">
			<Formik initialValues={{ name: '' }} validationSchema={createGroupValidationSchema} onSubmit={(values, helpers) => {
				fetcher<Group>('/api/groups', 'POST', {
					slug: createSlugFromGroupName(values.name),
					name: values.name,
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
					}) => {
						const slug = createSlugFromGroupName(values.name);

						return (
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
										autoComplete={'off'}
									/>
									<div className="field-error">{errors.name && touched.name && errors.name}</div>
								</div>
								<p style={{ backgroundColor: '#eee', borderRadius: '.2rem', padding: '.1rem .2rem', overflowX: 'scroll' }}>numerique.meusenature.fr/group/{slug ? <span>{slug}</span> : <span style={{ opacity: 0.3 }}>{'<nom>'}</span>}</p>
								<button type="submit" className="btn large" disabled={isSubmitting}>Créer le groupe</button>
							</form>
						)
					}
				}
			</Formik>
		</div>
	);
}

const createSlugFromGroupName = (groupName: string): string => {
	return groupName.toLowerCase().replace(/[^a-z0-9+]/g, "");
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
