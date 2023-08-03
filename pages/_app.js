import "@/styles/globals.scss";
import Layout from "./context/Layout";
import { ApiDataProvider } from "./context/ApiData";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anime&Manga</title>
        <meta
          name="description"
          content="anime manga ANIME Anime MANGA Manga AnimeAndManga ANIMEANDMANGA animeandmanga Anime&Manga ANIME&MANGA anime&manga"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/A&M.ico" />
      </Head>
      <Layout>
        <ApiDataProvider>
          <Component {...pageProps} />
        </ApiDataProvider>
      </Layout>
    </>
  );
}
