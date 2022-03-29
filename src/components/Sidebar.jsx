import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdAccountBalanceWallet } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";

export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5)
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <MdAccountBalanceWallet />
            <span>LEMONT</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                onClick={() => setCurrentLink(1)}
                className={currentLink === 1 ? "active" : ""}
              >
                <Link to="/dashboard">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(2)}
                className={currentLink === 2 ? "active" : ""}
              >
                <Link to="/bugets">
                  <GiTakeMyMoney />
                  <span>Bugets</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(3)}
                className={currentLink === 3 ? "active" : ""}
              >
                <Link to="/income">
                  <GiReceiveMoney />
                  <span>Income</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(4)}
                className={currentLink === 4 ? "active" : ""}
              >
                <Link to="/costs">
                  <GiPayMoney />
                  <span>Costs</span>
                </Link>
              </li>
              <li
                onClick={() => setCurrentLink(5)}
                className={currentLink === 5 ? "active" : ""}
              >
                <Link to="/stats">
                  <SiGoogleanalytics />
                  <span>Stats</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              onClick={() => setCurrentLink(1)}
              className={currentLink === 1 ? "active" : ""}
            >
              <Link to="/dashboard">
                <MdSpaceDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              onClick={() => setCurrentLink(2)}
              className={currentLink === 2 ? "active" : ""}
            >
              <Link to="/bugets">
                <GiTakeMyMoney />
                <span>Bugets</span>
              </Link>
            </li>
            <li
              onClick={() => setCurrentLink(3)}
              className={currentLink === 3 ? "active" : ""}
            >
              <Link to="/income">
                <GiReceiveMoney />
                <span>Income</span>
              </Link>
            </li>
            <li
              onClick={() => setCurrentLink(4)}
              className={currentLink === 4 ? "active" : ""}
            >
              <Link to="/costs">
                <GiPayMoney />
                <span>Costs</span>
              </Link>
            </li>
            <li
              onClick={() => setCurrentLink(5)}
              className={currentLink === 5 ? "active" : ""}
            >
              <Link to="/stats">
                <SiGoogleanalytics />
                <span>Stats</span>
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}

const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #222629;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #86c232;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #86c232;
        font-family: "Spectral", serif;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #86c232;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #86c232;
          a {
            color: black;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 1;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #86c232;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #86c232;
        a {
          color: black;
        }
      }
    }
  }
`;
