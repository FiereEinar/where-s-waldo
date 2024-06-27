/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { postScore } from '../api/score';
import { useNavigate } from 'react-router-dom';

export default function RecordTimeForm({ time, gameID }) {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);

	const onFormSubmit = async (e) => {
		try {
			e.preventDefault();
			setLoading(true);

			const data = {
				time: time,
				username: username,
				gameID: gameID,
			};

			const result = await postScore(data);

			if (!result.success) {
				console.log('Error posting comment', result);
				return;
			}

			console.log('Comment posted successfully');
			navigate('/');
		} catch (err) {
			console.error('Error posting score', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<form className='w-full' onSubmit={onFormSubmit}>
			<div className=''>
				<input
					value={username}
					required
					onChange={(e) => setUsername(e.target.value)}
					className='py-1 px-2 ml-1 rounded-md border shadow-md w-full'
					type='text'
					id='username'
				/>
			</div>
			<div className='mt-3 flex justify-center'>
				<button
					disabled={loading}
					className='border disabled:opacity-90 py-1 px-5 rounded-md bg-blue-950 text-white hover:opacity-90'
					type='submit'
				>
					Submit
				</button>
			</div>
		</form>
	);
}
