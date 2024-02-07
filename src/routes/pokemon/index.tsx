import { GetAllPokemonParams } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import PokemonCard from "./-components/PokemonCard";
import { usePokemonData } from "./-hooks/usePokemonData";

export const Route = createFileRoute("/pokemon/")({
    component: Pokemon,
    validateSearch: (search: Record<string, unknown>): GetAllPokemonParams => {
        return {
            limit: (search.limit as number) ?? 20,
            offset: (search.offset as number) ?? 0
        };
    }
});

function Pokemon() {
    const params = Route.useSearch();
    const { data, isLoading } = usePokemonData({ params });

    if (isLoading) {
        return <>Loading Data...</>;
    }
    return (
        <>
            <h1 className='text-xl font-bold'>Pokemon List</h1>
            <div className='flex flex-col gap-4 mt-4'>
                {data?.results.map((pokemon) => <PokemonCard {...pokemon} />)}
            </div>
        </>
    );
}
