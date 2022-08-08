import styled from "styled-components";

export const QuoteContainer = styled.div`
  position: absolute;
  text-align: center;
  bottom: 10%;
  width: 600px;
  left: 50%;
  margin-left: -300px;
  @media screen and (max-width: 600px) {
    width: 350px;
    margin-left: -175px;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: whitesmoke;
  font-weight: 400;
  z-index: 2;
  text-shadow: -4px 8px 6px rgba(0, 0, 0, 0.58);
`;
