import React from 'react';
import { Helmet } from 'react-helmet';
import fav from '../images/icon.png';
import og from '../images/og.png';

export const Head: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="shortcut icon" href={fav} />
            <link rel="shortcut icon" href={fav} />

            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
                rel="stylesheet"
            />

            <meta property="og:title" content={title} />
            <meta property="og:url" content="https://blobity.dev/" />
            <meta property="og:image" content={og} />
            <meta
                property="og:description"
                content="The cursor is the heart of any interaction with the web. Why not take it to the next level? 🚀"
            />

            <meta
                name="description"
                content="The cursor is the heart of any interaction with the web. Why not take it to the next level? 🚀"
            />

            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-91DWBNMP88"
            />
            <script>{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-91DWBNMP88');
                `}</script>
        </Helmet>
    );
};
