import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useState } from 'react';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const [isFavorite, setIsFavorite] = useState(localFavorites.existPokemonOnFavorites(pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id);
        setIsFavorite(!isFavorite);
    };

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable={true} css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1>{pokemon.name}</Text>
                            <Button color="gradient" ghost={!isFavorite} onClick={onToggleFavorite}>
                                {isFavorite ? 'En favoritos' : 'Guardar en favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex">
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemonPaths = [...Array(151)].map((_, index) => `${index + 1}`);

    return {
        paths: pokemonPaths.map((id) => ({ params: { id } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };

    return {
        props: {
            pokemon: await getPokemonInfo(id),
        },
    };
};
