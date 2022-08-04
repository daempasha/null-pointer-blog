import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AuthorDate } from "../components/AuthorDate/authordate.component";
import { FeaturedPost } from "../components/FeaturedPost/featuredpost.component";
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
      <main>
        <div className="p-5 bg-primary bg-opacity-5">
          <div className="mx-auto max-w-7xl">
            <div className="uppercase text-gray-700 text-sm mb-5 tracking-wider ">
              Featured Post
            </div>
            <FeaturedPost
              title={"Useful tips and tricks in Python"}
              image="/python.jpg"
              author="Daem Pasha"
              date={1659641781}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
