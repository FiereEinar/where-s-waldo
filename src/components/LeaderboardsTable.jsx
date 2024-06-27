/* eslint-disable react/prop-types */
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { formatTime } from '@/utils/utils';
import { format } from 'date-fns';
import _ from 'lodash';

export default function LeaderboardsTable({ gameTitle, scores }) {
	return (
		<Table>
			<TableCaption>{gameTitle}</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>Username</TableHead>
					<TableHead>Time</TableHead>
					<TableHead className='text-right'>Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{scores.length === 0 && (
					<TableRow>
						<TableCell></TableCell>
						<TableCell className='text-center text-muted-foreground'>
							No scores yet. Be the first!
						</TableCell>
					</TableRow>
				)}
				{scores.map((score) => (
					<TableRow key={score._id}>
						<TableCell className='font-medium'>
							{_.startCase(score.username)}
						</TableCell>
						<TableCell>{formatTime(score.time)}</TableCell>
						<TableCell className='text-right'>
							{format(score.Date, 'MMMM dd, yyyy')}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
