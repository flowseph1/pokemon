import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
    try {
        const data: Pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)).json();

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        };
    } catch (error) {
        return null;
    }
};
