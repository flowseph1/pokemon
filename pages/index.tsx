import { Grid } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout title="Listado de Pokemons">
            <Grid.Container
                gap={2}
                justify={'flex-start'}
            >
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))}
            </Grid.Container>
        </Layout>
    );
};

export default HomePage;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ctx => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

    const data: PokemonListResponse = await response.json();

    const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
        }.svg`,
    }));

    return {
        props: {
            pokemons: pokemons,
        },
    };
};
