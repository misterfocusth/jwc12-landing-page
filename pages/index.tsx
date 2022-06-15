import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Components
import Navbar from "../components/Navbar/Navbar";
import Testimonial from "../components/Testimonial/Testimonial";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#8E44AD] scroll-smooth">
      <Head>
        <title>หมอหมึก | หมอดูชื่อดังประจำค่าย JWC12</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-8 text-center lg:px-40">
        <div className="mt-28 lg:mt-36">
          <div id="hero" className="scroll-mt-24">
            <Hero />
          </div>

          <div id="about" className="scroll-mt-24">
            <About />
          </div>

          <div id="testimonial" className="scroll-mt-24">
            <Testimonial />
          </div>

          <div id="contact" className="scroll-mt-24">
            <Contact />
          </div>
        </div>
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
