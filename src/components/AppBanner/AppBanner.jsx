import React from "react";
import { motion } from "framer-motion";
import coffeeCover from "../../assets/coffee-cover.jpg";
import appStore from "../../assets/app_store.png";
import playStore from "../../assets/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${coffeeCover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const AppBanner = () => {
  return (
    <div className="container mx-auto my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[350px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness: 100,
              damping:10,
              delay:0.2
            }}
            className="text-2xl font-semibold text-center sm:text-4xl">
              Download The App
            </motion.h1>
            <motion.p 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness: 100,
              damping:10,
              delay:0.4
            }}
            className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              porro explicabo praesentium.
            </motion.p>
            {/* images link */}
            <div className="flex justify-center items-center">
              <motion.a
              initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness: 100,
              damping:10,
              delay:0.6
            }}
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={playStore} alt="playstore" />
              </motion.a>
              <motion.a
              initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness: 100,
              damping:10,
              delay:0.7
            }}
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={appStore} alt="appstore" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
