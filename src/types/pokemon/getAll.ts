export type GetAllPokemonData = {
    name: string;
    url: string;
};

export type GetAllPokemonParams = {
    limit: number;
    offset: number;
};

export type GetAllPokemonResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: GetAllPokemonData[];
};
