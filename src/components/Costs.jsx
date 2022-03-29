import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { useBudgets } from "../contexts/BudgetsContext";

export default function Costs({ defaultBudgetId }) {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();

  const { budgets, addExpense, expenses } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    });
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
        .title,
        .add-cost,
        .table-section
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
        <h1>Costs</h1>
      </div>
      <form onSubmit={handleSubmit} className="add-cost">
        <div className="name">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            ref={descriptionRef}
            type="text"
            id="description"
            required
          />
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount</label>
          <input
            className="form-control"
            id="amount"
            ref={amountRef}
            type="number"
            required
            min={0}
            step={0.01}
          />
        </div>
        <div className="category">
          <label htmlFor="category">Category</label>
          <select
            className="form-control"
            id="category"
            defaultValue={defaultBudgetId}
            ref={budgetIdRef}
          >
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>
      {/* table test */}
      <div className="table-section">
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{budgets.find((x) => x.id === expense.budgetId).name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  color: white;
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      color: #86c232;
    }
  }
  .add-cost {
    display: flex;
    margin-top: 2rem;
    padding: 1rem;
    gap: 2rem;
    justify-content: space-between;
    label {
      color: #86c232;
    }
    .name {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .amount {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .category {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .form-control {
      margin-top: 0.5rem;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #212529;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    }
    button {
      appearance: none;
      margin: 1rem;
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
  .table-section {
    font-family: "Roboto", sans-serif;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    align-content: center;
    justify-content: flex-end;
    align-items: baseline;
    border-radius: 40px;
  }
  table {
    width: 100%;
    table-layout: fixed;
  }
  .tbl-header {
    background-color: #86c232;
    font-size: 1.2rem;
    flex: 1;
    border-radius: 1rem 1rem 0 0;
  }
  .tbl-content {
    flex: 1;
    width: 100%;
    /* table-layout:fixed; */
    height: 100vh;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid #86c232;
    border-radius: 0 0 1rem 1rem;
  }
  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: black;
    text-transform: uppercase;
  }
  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px #badb8c;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0px;
    padding: 2rem;
    height: 100%;
  }
`;
