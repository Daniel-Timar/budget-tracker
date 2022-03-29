import React from "react";
import styled from "styled-components";
import image from "../images/avatar.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { cardStyle } from "./ReusableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Daniel Timar</h2>
        <h5>
          <HiOutlineLocationMarker /> Bucharest, ROM
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <a
            href="https://www.linkedin.com/in/daniel-george-timar/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="container">
          <a href="https://web.facebook.com/timar.daniel.37" target="_blank">
            <FaFacebookSquare />
          </a>
        </div>
        <div className="container">
          <a href="https://github.com/Daniel-Timar" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #86c232;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    .container {
      display: flex;
      flex-direction: column;
      text-align: center;
      svg {
        cursor: pointer;
      }
      a {
        &:visited {
          color: #86c232;
        }
      }
    }
  }
`;
