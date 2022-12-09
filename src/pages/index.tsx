import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Headers";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
