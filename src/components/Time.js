import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Welcome, TimeStamp, Greeting } from "./TimeStyles";
import { motion } from "framer-motion";

const Time = () => {
  let today = new Date();

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() < 11) {
      return "Good Morning, TParker🤗☀️🌘.";
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return "Good Afternoon, TParker🏯🗼⛲.";
    } else if (today.getHours() >= 17 && today.getHours() < 24) {
      return "Good Night, TParker🌚😴.";
    } else {
      return "What are you doing up at this hour?😑😵‍💫";
    }
  };

  return (
    <motion.div
      animate={{ y: 450 }}
      transition={{ ease: "easeOut", duration: 2.5 }}
    >
      <Welcome>
        <TimeStamp>
          <Moment format="LT"></Moment>
        </TimeStamp>
        <Greeting>{greeting()}</Greeting>
      </Welcome>
    </motion.div>
  );
};

export default Time;
