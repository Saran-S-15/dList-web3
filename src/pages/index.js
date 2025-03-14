import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [lightMode, setLightMode] = useState();

  return (
    <div className={`${lightMode ? "bg-white": "bg-black"} h-full overflow-y-hidden`}>
      <Head>
        <title>dList</title>
      </Head>

      <div className="flex flex-col justify-between h-full">
        <Navbar lightMode={lightMode} setLightMode={setLightMode}/>
        <Hero lightMode={lightMode} />
        <Footer lightMode={lightMode} />
      </div>

    </div>
  );
}
