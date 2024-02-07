import { GetAllPokemonParams } from "@/types";
import { usePokemonData } from "./-hooks/usePokemonData";

export const usePokemonImpl = ({ params }: { params: GetAllPokemonParams }) => {
    const { data, isLoading } = usePokemonData({ params });

    return {
        data,
        isLoading
    };
};
