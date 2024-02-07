import { BASE_URL, getAllPokemon } from "@/clients";
import { GetAllPokemonParams } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const usePokemonData = ({ params }: { params: GetAllPokemonParams }) => {
    const result = useQuery({
        queryKey: [`${BASE_URL}/pokemon`],
        queryFn: () => getAllPokemon(params)
    });

    return { ...result };
};
