import React from "react";
import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee1.png";
import coffee2 from "../../assets/coffee2.png";
import coffee3 from "../../assets/coffee3.png";
import coffee4 from "../../assets/coffee4.png";
import coffee5 from "../../assets/coffee5.png";
import coffee6 from "../../assets/coffee6.png";
import coffee7 from "../../assets/coffee7.png";
import flipLogo from "../../assets/flipLogo.png";
import "../../index.css";

const serviceData = [
  {
    id: 1,
    image: coffee1,
    title: "Espresso",
    subtitle:
      "Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. ",
  },
  {
    id: 2,
    image: coffee7,
    title: "Latte/Iced Latte",
    subtitle:
      "A latte is an espresso with steamed milk and a dollop of milk foam on top. ",
  },
  {
    id: 3,
    image: coffee3,
    title: "Black Coffee",
    subtitle:
      "Black coffee is arguably the most common type of coffee drink out there. ",
  },
  {
    id: 4,
    image: coffee4,
    title: "Mocha",
    subtitle: "Coffee and chocolate are two of the best things in the world. ",
  },
  {
    id: 5,
    image: coffee5,
    title: "Americano",
    subtitle:
      "The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. ",
  },
  {
    id: 6,
    image: coffee6,
    title: "Cappuccino",
    subtitle:
      "Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts.",
  },
];

const Service = () => {
  return (
    <div className="container mx-auto my-16 space-y-6">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-gray-700"
        >
          Indian
          <span className="text-amber-500"> Specialty Coffee!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-gray-700 text-opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptas commodi, provident, dicta nemo officia voluptate cupiditate
          sequi nam recusandae sint!
        </motion.p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 overflow-hidden">
        {serviceData.map((data, index) => {
          return (
            <motion.div
              key={data.id}
              className="relative w-full h-64 group preserve-3d perspective"
              initial={{ rotateY: 0 }}
              whileInView={{ rotateY: 180 }}
              transition={{
                delay: index * 0.2, // Flip one-by-one
                duration: 1,
                ease: "easeInOut",
              }}
            >
              {/* Front Face */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-md flex items-center justify-center backface-hidden">
                <img src={flipLogo} alt="logo" className="text-2xl" />
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 bg-amber-100 rounded-lg shadow-lg transform rotate-y-180 flex flex-col items-center justify-center p-2 backface-hidden">
                <button
                  className="absolute top-2 right-2 text-black w-9 h-9 flex items-center justify-center text-2xl hover:scale-150 transition"
                  title="Add to Cart"
                >
                  +
                </button>
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-36 w-auto object-contain mb-2 transition-transform duration-300 ease-in-out hover:scale-125 img-shadow2 cursor-pointer"
                />
                <h1 className="text-lg font-bold text-amber-700">
                  {data.title}
                </h1>
                <p className="text-gray-600 text-xs mt-1 text-center">
                  {data.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
