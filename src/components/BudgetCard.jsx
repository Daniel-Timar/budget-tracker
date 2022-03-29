import React, { useState } from "react";
import styled from "styled-components";
import { GrOverview } from "react-icons/gr";
import { currencyFormatter } from "./Utils";
import ViewExpensesModal from "./ViewExpensesModal";

export default function BudgetCard({ name, amount, max, budgetId }) {
  const [showViewExpensesModal, setShowViewExpensesModal] = useState(false);

  function closeExpensesModal() {
    setShowViewExpensesModal(!showViewExpensesModal);
  }

  function getProgressBarVariant(amount, max) {
    const ratio = amount / max;
    if (ratio < 0.5) return "primary";
    if (ratio < 0.75) return "warning";
    return "danger";
  }

  return (
    <Section>
      <ViewExpensesModal
        show={showViewExpensesModal}
        handleClose={closeExpensesModal}
        budgetName={name}
        budgetId={budgetId}
      />
      <div className="card-title">
        <div className="title">{name}</div>
        <div className="budget">
          {currencyFormatter.format(amount)}
          {max && (
            <span className="total-budget">
              / {currencyFormatter.format(max)}
            </span>
          )}
        </div>
      </div>

      <div className="card-progress progress">
        <div
          role="progressbar"
          className={"progress-bar " + getProgressBarVariant(amount, max)}
          aria-valuenow={amount}
          aria-valuemin={0}
          aria-valuemax={max}
          style={{
            width: (amount / max) * 100 + "%",
          }}
        ></div>
      </div>
      <div className="card-btn">
        <GrOverview onClick={() => setShowViewExpensesModal(true)} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  border: 1px solid #343434;
  border-radius: 1.5rem;
  padding: 1rem;
  line-height: 1.5rem;
  transition: 0.5s ease-in-out;

  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.2rem;
    .title {
      margin-right: 0.5rem;
    }
    .budget {
      display: flex;
      align-items: baseline;
      .total-budget {
        font-size: 1rem;
        color: #aaa;
        margin-left: 0.25rem;
      }
    }
  }
  .card-progress {
    border-radius: 50rem;
  }
  .progress {
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: white;
    .progress-bar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: #fff;
      white-space: nowrap;
      transition: width 0.6s ease;
    }
    .primary {
      background-color: #00dfef !important;
    }
    .warning {
      background-color: #ebdb00 !important;
    }
    .danger {
      background-color: #ee0000 !important;
    }
  }
  .card-btn {
    display: flex;
    margin-top: 1.5rem;
    flex-direction: row;
    align-items: center;
    align-self: stretch;
    transition: width 0.6s ease;
    svg {
      font-size: 1.4rem;
      margin-left: auto;
      line-height: 1.5rem;
      background-color: #86c232;
      height: 1.25rem;
      padding: 0.254rem;
      border-radius: 50%;
      &:hover {
        border: 1px solid black;
      }
      &:active {
        background-color: black;
      }
    }
  }
  &:hover {
    background-color: #86c232;
    color: black;
    cursor: pointer;
    svg {
      border: 1px solid black;
    }
  }
`;
