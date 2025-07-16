import React, { useState } from "react";
import bgImageUrl from "../../assets/bg-slate.png";
import bg from "../../assets/bg.png";
import coffee2 from "../../assets/coffee2.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${bgImageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[700px] w-full">
        <div className="container md:pl-14 px-4">
          {/* navsection */}
          
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* herosection */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[700px]">
            {/* text content section */}
            <div className="text-orange-100 mt-[100px] md:mt-0 p-4 space-y-20">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="text-5xl md:text-7xl font-bold leading-tight ml-4 md:ml-14"
              >
                Café au Lait
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-2">
                  <h1 className="text-xl md:text-2xl">
                    Coffee lifestyle lovers,
                  </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consctetur adipisicing elit. Ut
                    sunt harum soluta temporibus quibusdam esse quod possimus
                    suscipit molestias nisi.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-6 md:-left-10 w-[200px] md:w-[250px] h-[160px] md:h-[180px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Hero image section with ring */}
            <div className="relative w-fit mx-auto mt-10 md:mt-0">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
                }}
                src={bg}
                alt="bgImage"
                className="absolute top-10 left-10 md:top-5 md:left-20 lg:left-30 h-auto w-[280px] z-10"
              />

              {/* Hero Image */}
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={coffee2}
                alt="heroImage"
                className="relative z-40 h-[300px] md:h-[600px] w-auto"
              />
            </div>

            {/* Big background text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="absolute top-5 left-[50%] md:left-[700px] z-[1] -translate-x-1/2 md:translate-x-0 hidden sm:block"
            >
              <h1 className="text-[60px] md:text-[120px] font-bold text-gray-100/20 leading-none">
                Black
              </h1>
              <h1 className="text-[60px] md:text-[120px] font-bold text-gray-100/20 leading-none">
                Thumblar
              </h1>
            </motion.div>

            {/* third invisible column for layout balance on desktop */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="text-orange-100 mt-[100px] md:mt-0 p-4 space-y-40 hidden lg:block"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Thumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-2">
                  <h1 className="text-2xl">Long Black,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consctetur adipisicing elit. Ut
                    sunt harum soluta temporibus quibusdam esse quod possimus
                  </h1>
                </div>
                <div className="absolute -top-6 -right-5 w-[250px] h-[180px] bg-gray-600/40 z-[1]"></div>
              </div>
            </motion.div>

            <div></div>
          </div>
        </div>

        {/* sidebar menu section */}
        {sidebar && (
          <motion.div 
          initial={{x:"100%"}}
          whileInView={{x:0}}
          className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-orange-400 to-orange-600  backdrop-blur-sm z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-amber-50"></div>
                {/* social icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebook className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
