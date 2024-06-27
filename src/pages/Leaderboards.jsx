import { getScores } from '@/api/score';
import LeaderboardsTable from '@/components/LeaderboardsTable';
import { gameLevels } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Leaderboards() {
	const {
		data: allScores,
		error,
		isLoading,
	} = useQuery({
		queryKey: ['leaderboards'],
		queryFn: getScores,
	});

	if (error) {
		return <p>Error loading leaderboards</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<main className='min-h-screen flex flex-col items-center'>
			<h1 className='text-3xl font-bold p-10'>Leaderboards</h1>
			<section className='min-w-[40rem] flex flex-col gap-10'>
				<Tabs
					className='flex flex-col justify-center'
					defaultValue={gameLevels[0].name}
				>
					<TabsList className=''>
						{gameLevels.map((level) => (
							<TabsTrigger key={level.gameID} value={level.name}>
								{level.name}
							</TabsTrigger>
						))}
					</TabsList>
					{gameLevels.map((level) => (
						<TabsContent value={level.name} key={level.gameID}>
							<h1 className='text-center text-xl font-semibold mt-5'>
								{level.name}
							</h1>
							<LeaderboardsTable
								scores={allScores.filter((x) => x.gameID === level.gameID)}
							/>
						</TabsContent>
					))}
				</Tabs>
			</section>
		</main>
	);
}
