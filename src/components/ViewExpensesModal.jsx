import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useBudgets } from "../contexts/BudgetsContext";

export default function ViewExpensesModal({
  show,
  budgetName,
  budgetId,
  handleClose,
}) {
  const { expenses } = useBudgets();

  return show ? (
    <Section className="modalBackground">
      <form className="modalContainer">
        <div className="titleCloseBtn">
          <AiFillCloseCircle onClick={handleClose} />
        </div>
        <div className="title">
          <h1>{budgetName}</h1>
        </div>
        <div className="body">
          <div className="table-section">
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="tbl-content">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  {expenses
                    .filter((x) => x.budgetId === budgetId)
                    .map((expense) => (
                      <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </Section>
  ) : null;
}

const Section = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -10rem;
  width: 50vw;
  height: 100vh;
  text-align: center;
  .modalBackground {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalContainer {
    position: relative;
    width: 100%;
    border-radius: 0.3rem;
    background-color: #222629;
    color: white;
    box-shadow: rgba(81, 235, 10, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    .titleCloseBtn {
      display: flex;
      justify-content: flex-end;
      svg {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        &:hover {
        }
      }
    }
    .title {
      display: inline-block;
      text-align: center;
      font-size: 1.5rem;
    }
    .body {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      text-align: left;
      padding: 1rem;
      border-top: 1px solid grey;
      .table-section {
        font-family: "Roboto", sans-serif;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        align-content: center;
        justify-content: flex-end;
        align-items: baseline;
        border-radius: 40px;
        table {
          width: 100%;
          table-layout: fixed;
        }
        .tbl-header {
          background-color: #86c232;
          font-size: 1.2rem;
          flex: 1;
          border-radius: 1rem 1rem 0 0;
          th {
            padding: 20px 15px;
            text-align: left;
            font-weight: 500;
            font-size: 12px;
            color: black;
            text-transform: uppercase;
          }
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
          td {
            padding: 15px;
            text-align: left;
            vertical-align: middle;
            font-weight: 300;
            font-size: 12px;
            color: #fff;
            border-bottom: solid 1px #badb8c;
          }
        }
      }

      .name {
        display: flex;
        flex-direction: column;
      }
      .max {
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
    }
  }
  .add-budget-btn {
    button {
      width: 10rem;
      height: 3rem;
      margin: 0.8rem;
      border: none;
      color: white;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;
      background-color: crimson;
    }
  }
`;
