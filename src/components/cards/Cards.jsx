// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Cards = () => {
//   const cards = [0, 1, 2, 3, 4];
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       {/* Wider container to hold expanded cards */}
//       <div
//         className="relative w-[600px] h-48"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             initial={{ x: index * 15 }} // small initial overlap (peek)
//             animate={{
//               x: isHovered ? index * 120 : index * 15, // full spread on hover
//             }}
//             transition={{
//               type: "tween",
//               duration: 0.3,
//               ease: "easeOut",
//             }}
//             className={`
//               absolute top-0 w-24 h-36 rounded-xl overflow-hidden
//               bg-white/10 border border-white/20 backdrop-blur-md
//               shadow-md
//             `}
//             style={{
//               zIndex: cards.length - index,
//             }}
//           >
//             <img
//               src={`https://picsum.photos/200/300?random=${index + 1}`}
//               alt={`Card ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cards;
