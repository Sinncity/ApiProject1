import React from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="overlay"></div>
      <div className="sectionContact1"></div>
      <div className="sectionContact2 ">
        <h1>Home</h1>
        <Card1 />
        <br></br>
      </div>
      <div className="sectionContact3">
        <h1>Home</h1>
        <Card1 />
      </div>
      <div className="sectionContact4">
        <h1>Home</h1>
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
}
