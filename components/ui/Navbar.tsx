import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div className={styles.container} style={{ backgroundColor: theme?.colors.gray100.value }}>
            <Link href={'/'} style={{ display: 'flex', flexDirection: 'row' }}>
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                    alt="icono de la app"
                    width={70}
                    height={70}
                />

                <Text color="white" h2>
                    P
                </Text>
                <Text color="white">okemon</Text>
            </Link>

            <Spacer css={{ flex: 1 }} />

            <Link href={'/favoritos'}>
                <Text color="white">Favoritos</Text>
            </Link>
        </div>
    );
};
