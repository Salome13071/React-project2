import React, { useEffect, useState } from "react";
import styles from "./about.module.css";

const About = ({ label, arr = [] }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.aboutMainContainer}>
      <div className={styles.aboutMainHeader}>All about cats</div>
      <div>
        {todos.map((todo) => (
          <h2 className={styles.aboutHeaders} key={todo.id}>
            {todo.title}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default About;
