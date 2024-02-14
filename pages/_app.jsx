import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { NextSeo } from 'next-seo';
import '../styles/globals.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextSeo
        title='Anilog'
        description="Track. Browse. Discover. Track what you watch. Browse the season's hottest anime. Discover new anime"
        canonical='https://anilog.vercel.app/'
        openGraph={{
          type: 'website',
          url: 'https://anilog.vercel.app/',
          title: 'Anilog',
          description:
            "Track. Browse. Discover. Track what you watch. Browse the season's hottest anime. Discover new anime",
          images: [
            {
              url: 'https://res.cloudinary.com/dloisor1x/image/upload/v1707934025/portfolio/anilog/og-anilog_qiwrms.png',
              width: 1200,
              height: 630,
              alt: 'Anilog Home Page',
              type: 'image/png',
            },
          ],
        }}
      />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
