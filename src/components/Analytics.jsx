import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import AnalitycItem from "./AnalitycItem";

export default function Analytics() {
  const analyticItems = {
    items: [
      {
        title: "Monthly budgets",
        amount: "$5000",
        logo: <BsFillCalendar2WeekFill />,
      },
      {
        title: "Earnings",
        amount: "$600",
        logo: <IoStatsChart />,
      },
      {
        title: "Spending",
        amount: "$2800",
        logo: <GiPayMoney />,
      },
      {
        title: "Profit",
        amount: "-$2200",
        logo: <FaMoneyBillWave />,
      },
    ],
  };

  return (
    <Section>
      {analyticItems.items.map((item, index) => (
        <AnalitycItem
          title={item.title}
          amount={item.amount}
          logo={item.logo}
        />
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #86c232;
      color: black;
      cursor: pointer;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
