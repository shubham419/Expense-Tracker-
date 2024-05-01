import React, { useEffect, useState } from 'react'
import styles from "./Transaction.module.css"

function Transaction() {

    const [data, setdata] = useState([]);

    const loadTransactionData = () => {
      const list = JSON.parse(localStorage.getItem("expensesList"));
      const arrList = [];
      for (const [key, value] of Object.entries(list)) {
        value.list.forEach(ele => arrList.push(ele));
      }
      console.log(arrList);
      setdata(arrList);
    };

    useEffect(() => {
        loadTransactionData();
    }, [])

  return (
    <>
    <div>Transaction</div>
    <div className={styles.table}></div>
    </>
  )
}

export default Transaction