import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer/footer.component";
import { Navbar } from "../components/Navbar/navbar.component";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Null Pointer Blog</title>
        <meta name="description" content="Null Pointer Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main></main>
      <Footer />
    </div>
  );
};

export default Home;
