import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import styles from './Layout.module.css';

type Props = {
    children: JSX.Element;
    title?: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Jose Acosta" />
                <meta name="description" content={`Informacion sobre el ${title}`} />
                <meta name="keywords" content="XXXX, pokemon, pokedex" />
                <meta property="og:title" content={`Informacion sobre el ${title}`} />
                <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
                <meta
                    property="og:image"
                    content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
                />
            </Head>

            <Navbar />

            <main className={styles.container}>{children}</main>
        </>
    );
};
