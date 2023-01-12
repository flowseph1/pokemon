export interface PokemonListResponse {
    count: string;
    next: string;
    previous?: string;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url: string;
    id: number;
    img: string;
}
