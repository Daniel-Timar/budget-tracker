import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import image from "../images/construction.png";

export default function Income() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .image
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <Section>
      <div className="image">
        <img src={image} alt="under construction" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  .image {
    display: flex;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    color: white;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .image {
      display: flex;
      justify-content: column;
    }
  }
`;
