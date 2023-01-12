import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
    const router = useRouter();

    const handleOnPress = () => {
        router.push(`/name/${name}`);
    };

    return (
        <Grid key={id} xs={6} md={2} xl={1}>
            <Card isHoverable={true} isPressable={true} onClick={handleOnPress}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify={'space-between'}>
                        <Text transform={'capitalize'}>{name}</Text>
                        <Text># {id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
