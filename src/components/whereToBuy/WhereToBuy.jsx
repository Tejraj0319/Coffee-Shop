import React from "react";
import worldMap from "../../assets/worldMap.png";
import "../../index.css";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container mx-auto my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* form section */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-4xl font-bold text-gray-700 font-serif"
          >
            Buy Our Products From Anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 duration-200 cursor-pointer w-full"
          >
            Order Now
          </motion.button>
        </div>
        {/* world-map section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="sm:col-span-2 flex justify-center"
        >
          <img src={worldMap} alt="worldmap" className="w-full sm:w-[500px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhereToBuy;
