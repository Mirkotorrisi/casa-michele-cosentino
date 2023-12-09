import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Hero from "components/Hero";
import WhoWeAre from "components/WhoWeAre";
import OurServices from "components/OurServices";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="relative w-screen m-0 flex flex-col">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <OurServices />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Casa Cosentino</title>;
