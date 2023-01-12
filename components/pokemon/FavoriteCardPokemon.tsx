import { Card, Grid } from '@nextui-org/react';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
    return (
        <Grid xs={6} sm={2} md={2} xl={1}>
            <Card isHoverable={true} isPressable={true} css={{ padding: 10 }}>
                <Link href={`/pokemon/${pokemonId}`}>
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                        width={'100%'}
                        height={140}
                    />
                </Link>
            </Card>
        </Grid>
    );
};
