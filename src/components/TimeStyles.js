import styled from "styled-components";

export const Welcome = styled.div`
  position: absolute;
  text-align: center;
  padding: 0.3rem;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, -50%);
  text-shadow: -4px 8px 6px rgba(0, 0, 0, 0.58);
`;

export const TimeStamp = styled.p`
  color: whitesmoke;
  font-size: 5rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 600px) {
    font-size: 5rem;
    text-shadow: -4px 8px 6px rgba(0, 0, 0, 0.58);
  }
`;

export const Greeting = styled.p`
  color: whitesmoke;
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-shadow: -4px 8px 6px rgba(0, 0, 0, 0.58);
  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;
