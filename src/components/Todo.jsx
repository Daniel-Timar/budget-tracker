import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
// import { SiTodoist } from "react-icons/si";
import { cardStyle } from "./ReusableStyles";
import { MdAddTask } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";

export default function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({
    value: "",
    placeholder: "Add your first priority ...",
  });

  const handleChange = (e) => {
    setTask((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  const AddTask = () => {
    if (task.value !== "") {
      const taskDetails = {
        id: uuidV4(),
        value: task.value,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
      setTask({
        value: "",
        placeholder: "Add a new priority ...",
      });
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  return (
    <Section>
      <div className="nav_todo">
        <div className="title">
          <h2>Priority</h2>
        </div>
        <div className="add_todo">
          {/* <SiTodoist /> */}
          <input
            type="text"
            name="text"
            id="text"
            value={task.value}
            onChange={(e) => handleChange(e)}
            placeholder={task.placeholder}
          />
          <MdAddTask className="add-btn" onClick={AddTask} />
        </div>
      </div>
      <div className="items_todo">
        {taskList !== [] ? (
          <>
            {taskList.slice(-3).map((t) => (
              <div className="item_todo">
                <div className="info">
                  <VscSymbolEvent />
                  <h4>{t.value}</h4>
                </div>
                <TiDelete
                  className="delete"
                  onClick={(e) => deleteTask(e, t.id)}
                />
              </div>
            ))}
          </>
        ) : null}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle};
  .nav_todo {
    display: flex;
    justify-content: space-between;
    color: #86c232;

    .title {
      h2 {
        margin-left: 0.5rem;
        letter-spacing: 0.2rem;
        font-family: "Spectral", serif;
      }
    }
    .add_todo {
      background-color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      /* width: 18vw; //come back!! */
      padding: 0.5rem;
      border-radius: 1rem;
      svg {
        color: #86c232;
      }
      input {
        background-color: transparent;
        border: none;
        color: #86c232;
        &::placeholder {
          color: #86c232;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  .items_todo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .item_todo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
        svg {
          color: #86c232;
        }
      }
      svg {
        font-size: 1.4rem;
        &:hover {
          color: #86c232;
        }
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
