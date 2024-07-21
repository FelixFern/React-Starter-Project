import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const CardLoading = () => {
	return (
		<Card className='cursor-pointer aspect-square'>
			<CardHeader>
				<div className='flex items-center justify-center'>
					<Skeleton className='w-[128px] aspect-square  duration-10 opacity-100' />
				</div>
			</CardHeader>
			<CardContent>
				<div className='flex flex-col items-center justify-center gap-2'>
					<Skeleton className='w-40 h-4 opacity-100 duration-10' />
					<div className='flex justify-center gap-2'>
						<Skeleton className='w-16 h-4 opacity-100 duration-10' />
						<Skeleton className='w-16 h-4 opacity-100 duration-10' />
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default CardLoading;
