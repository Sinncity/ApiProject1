import React from "react";
import "./Gallery.css";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <>
      <div className="overlay"></div>
      <div className="sectionGallery1"></div>

      {/* ////////////////////// */}

      <div className="sectionGallery2">
        <motion.div
          className="box1"
          animate={{
            rotateY: [0, 100, 100, 0],
            x: [0, 600, 500, 300, 0],
            scale: [0.5, 0.5, 0.7, 0.7],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
          }}
        />{" "}
        <motion.div
          className="box3"
          animate={{
            y: [0, 600, 300, 40],
            scale: [0.5, 0.5, 0.7, 0.7],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
          }}
        />{" "}
      </div>
      {/* //////////////////////// */}
      <div className="sectionGallery3">
        <motion.div
          className="box2"
          animate={{
            x: [0, 800, 550, 300, 0],
            scale: [0.5, 0.5, 0.7, 0.7],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="box1"
          animate={{
            x: [0, 800, 550, 300, 0],
            scale: [0.5, 0.5, 0.7, 0.7],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
          }}
        />{" "}
      </div>
      {/* ////////////////////////// */}
      <div className="sectionGallery4">
        <motion.div
          className="box3"
          animate={{
            y: [0, 900, 550, 300, -200],
            scale: [0.5, 0.5, 0.7, 0.7],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
          }}
        />
      </div>
    </>
  );
}
