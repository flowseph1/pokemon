import { FC, useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritosPage: FC = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title={'Pokemon Favoritos'}>
            {favoritePokemons.length === 0 ? <NoFavorites /> : <FavoritePokemons favoritePokemons={favoritePokemons} />}
        </Layout>
    );
};

export default FavoritosPage;
