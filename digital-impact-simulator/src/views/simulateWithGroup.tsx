import React, { useEffect, useState } from 'react';
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

const SimulateWithGroupPage: React.FC = () => {
	const { groupSlug } = useParams<{ groupSlug?: string }>();

	return (
		<div>
			{groupSlug ? (
				<SimulateWithGroupView groupSlug={groupSlug} />
			) : (
				<CreateGroupView />
			)}
		</div>
	);
};

export default SimulateWithGroupPage;

const createGroupValidationSchema = Yup.object({
	slug: Yup.string().min(4, 'Trop court').required('Le slug est requis'),
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
					.then(r => history.push(`/group/${r.slug}`))
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
						<form onSubmit={handleSubmit}>
							<h2>Create a new group</h2>
							<input
								type="text"
								name="slug"
								placeholder="slug"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.slug}
							/>
							{errors.slug && touched.slug && errors.slug}
							<input
								type="text"
								name="name"
								placeholder="Group name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
							{errors.name && touched.name && errors.name}
							<button type="submit" disabled={isSubmitting}>ok</button>
						</form>
					)
				}
			</Formik>
		</div>
	);
}

const SimulateWithGroupView: React.FC<{ groupSlug: string }> = ({ groupSlug }) => {
	const [group, setGroup] = useState<Group | undefined>();
	const [error, setError] = useState<Error | undefined>();

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
	}, [group, member]);

	useEffect(() => {
		if (debouncedMember) {
			fetcher<Member, Partial<Member>>(`/api/groups/${groupSlug}/${debouncedMember.id}`, 'PUT', {
				name: debouncedMember.name,
				stats: debouncedMember.stats,
			})
				.catch(err => {
					console.error(err);
				});
		}
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
								<div className="wrapper">Make possible to change the username</div>
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
