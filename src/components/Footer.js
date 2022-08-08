import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-right"></div>

        <div className="footer-left">
          <p className="footer-links">
            <Link className="link-1" to="/">
              Home
            </Link>

            <Link to="Gallery">Gallery</Link>

            <Link to="About">About</Link>

            <Link to="Fiber">Fiber</Link>

            <Link to="Contact">Contact</Link>
          </p>

          <p>
            <blockquote className="blockquote text-right">
              <p className="mb-0"></p>
              <footer className="blockquote-footer">
                {" "}
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>{" "}
            &copy; 2015
          </p>
        </div>
      </footer>
    </>
  );
}
