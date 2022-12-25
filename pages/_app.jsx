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
              url: 'https://raw.githubusercontent.com/antonio-lopez/anilog/main/public/images/anilog-seo-cover.jpg',
              width: 800,
              height: 600,
              alt: 'Anilog Home Page',
              type: 'image/jpg',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
