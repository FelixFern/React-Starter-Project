import { BASE_URL, getPokemonByName } from '@/clients';
import { useQuery } from '@tanstack/react-query';

export const usePokemonDetailData = ({ name }: { name: string }) => {
	const result = useQuery({
		queryKey: [`${BASE_URL}/pokemon/${name}`],
		queryFn: () => getPokemonByName(name)
	});

	return { ...result };
};
