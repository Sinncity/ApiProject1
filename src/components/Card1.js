import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { motion } from "framer-motion";

export default function Card1(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      animate={{ x: [0, 200, 300] }}
      transition={{ delay: 0.3 }}
    >
      <Card
        className="Card1"
        color="secondary"
        style={{
          width: "18rem",
          margin: "auto",
        }}
      >
        <img alt="Sample" src="https://source.unsplash.com/random" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle> */}
          <CardText>
            Some quick example text to build on the card title a
          </CardText>
          <Button color="secondary">Button</Button>
        </CardBody>
      </Card>
      <br></br>
    </motion.div>
  );
}
