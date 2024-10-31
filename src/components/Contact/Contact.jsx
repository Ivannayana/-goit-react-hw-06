import React from "react";
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <RiContactsFill className={styles.icon} />
        {name}
      </p>
      <p className={styles.text}>
        <FaPhone className={styles.icon} />
        {number}
      </p>
      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
