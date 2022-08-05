import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AuthorDate } from "../components/AuthorDate/authordate.component";
import { FeaturedPost } from "../components/FeaturedPost/featuredpost.component";
import { Footer } from "../components/Footer/footer.component";
import { Navbar } from "../components/Navbar/navbar.component";
import { PostCard } from "../components/PostCard/postcard.component";

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
        <div className="p-5 bg-primary bg-opacity-5 ">
          <div className="mx-auto max-w-7xl px-10">
            <div className="uppercase text-gray-700 text-sm mb-5 tracking-wider ">
              Featured Post
            </div>
            <FeaturedPost
              title={"Useful tips and tricks in Python"}
              description="Whether your new to Python or an experienced veteran, this article
              will contain some tips and tricks for everyone..."
              image="/python.jpg"
              author="Daem Pasha"
              date={1659641781}
            />
          </div>
        </div>

        <div className="flex mx-auto max-w-7xl flex-wrap gap-x-40">
          <PostCard
            title={"Useful tips and tricks in Python"}
            description="Whether your new to Python or an experienced veteran, this article
            will contain some tips and tricks for everyone..."
            image="/python.jpg"
            author="Daem Pasha"
            date={1659641781}
          />
          <PostCard
            title={"Useful tips and tricks in Python"}
            description="Whether your new to Python or an experienced veteran, this article
            will contain some tips and tricks for everyone..."
            image="/python.jpg"
            author="Daem Pasha"
            date={1659641781}
          />
          <PostCard
            title={"Useful tips and tricks in Python"}
            description="Whether your new to Python or an experienced veteran, this article
            will contain some tips and tricks for everyone..."
            image="/python.jpg"
            author="Daem Pasha"
            date={1659641781}
          />
          <PostCard
            title={"Useful tips and tricks in Python"}
            description="Whether your new to Python or an experienced veteran, this article
            will contain some tips and tricks for everyone..."
            image="/python.jpg"
            author="Daem Pasha"
            date={1659641781}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
