import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import scrollreveal from "scrollreveal";
import styled from "styled-components";

export const data = [
  ["Description", "Amount"],
  ["Food", 11],
  ["Travel", 2],
  ["Medical", 2],
  ["Entertainment", 2],
  ["Other", 7],
];

//hard code - for see the template - under construction
export const options1 = {
  title: "Monthly Incomes",
  is3D: true,
  backgroundColor: "#6a6b68",
};
export const options2 = {
  title: "Monthly Expenses",
  is3D: true,
  backgroundColor: "#6a6b68",
};
export const options3 = {
  title: "Budgets",
  is3D: true,
  backgroundColor: "#6a6b68",
};

export default function Stats() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .title,
        .body
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <Section>
      <div className="title">
        <h1>Stats</h1>
      </div>
      <div className="body">
        <Chart
          className="piechart"
          chartType="PieChart"
          data={data}
          options={options1}
          width={"100%"}
          height={"400px"}
        />
        <Chart
          className="piechart"
          chartType="PieChart"
          data={data}
          options={options2}
          width={"100%"}
          height={"400px"}
        />
        <Chart
          className="piechart"
          chartType="PieChart"
          data={data}
          options={options3}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      color: #86c232;
    }
  }
  .body {
    background-color: #222629;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 1.5rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0px;
    padding: 2rem;
    height: 100%;
  }
`;
