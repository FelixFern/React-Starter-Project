import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { GetAllPokemonParams } from "@/types";
import { Link, createFileRoute } from "@tanstack/react-router";
import PokemonCard from "./-components/PokemonCard";
import { usePokemonImpl } from "./-usePokemonImpl";

export const Route = createFileRoute("/pokemon/")({
    component: Pokemon,
    validateSearch: (search: Record<string, unknown>): GetAllPokemonParams => {
        return {
            limit: (search.limit as number) ?? 15,
            offset: (search.offset as number) ?? 0
        };
    }
});

function Pokemon() {
    const params = Route.useSearch();

    const { data, isLoading } = usePokemonImpl({ params });

    return (
        <>
            {isLoading ? (
                <div className='grid grid-cols-5 gap-4 mb-6'>
                    {Array(15)
                        .fill(0)
                        .map(() => (
                            <Skeleton className='w-full aspect-square' />
                        ))}
                </div>
            ) : (
                <div className='grid grid-cols-5 gap-4 mb-6'>
                    {data?.results.map((pokemon) => (
                        <PokemonCard {...pokemon} key={pokemon.name} />
                    ))}
                </div>
            )}

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <Link
                            href='#'
                            search={{
                                ...params,
                                offset: params.offset - params.limit
                            }}
                            disabled={params.offset === 0}
                        >
                            <PaginationPrevious />
                        </Link>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href='#' isActive>
                            {params.offset / params.limit + 1}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <Link
                            href='#'
                            disabled={params.offset === data?.count}
                            search={{
                                ...params,
                                offset: params.offset + params.limit
                            }}
                        >
                            <PaginationNext href='#' />
                        </Link>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}
