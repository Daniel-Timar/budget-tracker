import React, { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";

import styled from "styled-components";
import BudgetCard from "./BudgetCard";
import AddBudgetModal from "./AddBudgetModal";
import { useBudgets } from "../contexts/BudgetsContext";
import TotalBudgetCard from "./TotalBudgetCard";

export default function Bugets() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgets();

  function closeBudgetModal() {
    setShowAddBudgetModal(!showAddBudgetModal);
  }

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .navbar,
        .total-card,
        .cards
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <Section>
      <div className="navbar">
        <div className="title">
          <h1>Budgets</h1>
        </div>
        <div className="btn-add">
          <button onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </button>
        </div>
      </div>

      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={closeBudgetModal}
      />
      <div className="total-card">
        <TotalBudgetCard />
      </div>
      <div className="cards">
        {budgets.map((budget) => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0
          );
          return (
            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
              budgetId={budget.id}
            />
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .navbar {
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
    button {
      appearance: none;
      backface-visibility: hidden;
      background-color: #86c232;
      border-radius: 8px;
      border-style: none;
      box-shadow: rgb(134, 194, 50) 0 4px 9px;
      box-sizing: border-box;
      color: black;
      cursor: pointer;
      display: inline-block;
      font-family: "Spectral", serif;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: normal;
      line-height: 1.5;
      outline: none;
      overflow: hidden;
      padding: 13px 20px;
      position: relative;
      text-align: center;
      text-decoration: none;
      transform: translate3d(0, 0, 0);
      transition: all 0.3s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: top;
      white-space: nowrap;
      &:hover {
        background-color: #222629;
        color: #86c232;
        opacity: 1;
        transform: translateY(0);
        transition-duration: 0.35s;
        cursor: pointer;
      }
      &:active {
        transform: translateY(2px);
        transition-duration: 0.35s;
      }
    }
  }
  .total-card {
    background-color: #222629;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 1.5rem;
    margin-bottom: 1rem;
  }
  .cards {
    background-color: #222629;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 1.5rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0px;
    padding: 2rem;
    height: 100%;
    .navbar {
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
      button {
        appearance: none;
        backface-visibility: hidden;
        background-color: #86c232;
        border-radius: 8px;
        border-style: none;
        box-shadow: rgb(134, 194, 50) 0 4px 9px;
        box-sizing: border-box;
        color: black;
        cursor: pointer;
        display: inline-block;
        font-family: "Spectral", serif;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        line-height: 1.5;
        outline: none;
        overflow: hidden;
        padding: 13px 20px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transform: translate3d(0, 0, 0);
        transition: all 0.3s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: top;
        white-space: nowrap;
        &:hover {
          background-color: #222629;
          color: #86c232;
          opacity: 1;
          transform: translateY(0);
          transition-duration: 0.35s;
        }
        &:active {
          transform: translateY(2px);
          transition-duration: 0.35s;
        }
      }
    }
  }
`;
