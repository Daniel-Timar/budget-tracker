import React, { useRef } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useBudgets } from "../contexts/BudgetsContext";

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    handleClose();
  }

  return show ? (
    <Section className="modalBackground">
      <form className="modalContainer" onSubmit={handleSubmit}>
        <div className="titleCloseBtn">
          <AiFillCloseCircle onClick={handleClose} />
        </div>
        <div className="title">
          <h1>New Budget</h1>
        </div>
        <div className="body">
          <div className="name">
            <label for="name">Name</label>
            <input
              className="form-control"
              ref={nameRef}
              id="name"
              type="text"
              required
            />
          </div>
          <div className="max">
            <label for="max">Maximum Spending</label>
            <input
              className="form-control"
              ref={maxRef}
              id="max"
              type="number"
              required
              min={0}
              step={0.01}
            />
          </div>

          <div className="add-budget-btn">
            <button type="submit">Add</button>
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
  width: 50vw;
  height: 100vh;
  text-align: center;
  z-index: 10;
  .modalBackground {
    position: relative;
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
