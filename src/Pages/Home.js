import React from "react";
import Tree from "../Assets/Tree111.mp4";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import "./Home.css";
import { Container } from "semantic-ui-react";

const Home = (props) => {
  return (
    <>
      <video src={Tree} autoPlay loop />
      <div>
        <div className="overlay"></div>
      </div>
      <div className="sectionHome2">
        <Container textAlign="justified">
          <br></br>
          <Card2 />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend a
          </p>
        </Container>
      </div>
      <div className="sectionHome3">
        <h1>Home</h1>
        <Card1 />
        <Card1 />
      </div>
      <div className="sectionHome4">
        <h1>Home</h1>
        <Card1 />
        <Card2 />
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend a
        </p>
      </div>
    </>
  );
};

export default Home;
