/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { postScore } from '../api/score';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

export default function RecordTimeForm({ time, gameID }) {
	const { toast } = useToast();
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);

	const onFormSubmit = async (e) => {
		try {
			e.preventDefault();
			setLoading(true);

			const data = {
				time: time,
				username: username.toLowerCase(),
				gameID: gameID,
			};

			const result = await postScore(data);

			if (!result.success) {
				toast({ variant: 'destructive', title: 'Error posting score' });
				console.log('Error posting score', result);
				return;
			}

			console.log('Score posted successfully');
			toast({ title: 'Score posted successfully' });
			navigate('/');
		} catch (err) {
			toast({ variant: 'destructive', title: 'Error posting score' });
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
				<Button disabled={loading} className='' type='submit'>
					Submit
				</Button>
			</div>
		</form>
	);
}
