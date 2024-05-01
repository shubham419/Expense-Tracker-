import React, { useEffect, useState, useRef } from "react";
import styles from "./Transaction.module.css";
import TableCell from "./TableCell";
import IconButton from "@mui/material/IconButton";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

function Transaction({reload}) {
  const [data, setdata] = useState([]);
  const [filtertedData, setFilteredData] = useState([]);
  const index = useRef(0);

  const nextDataSet = () => {
    if (index.current < data.length) {
      const end = index.current + 3;
      const arr = [];
      for (let i = index.current; i < end; i++) {
        if (data[i]) arr.push(data[i]);
      }
      index.current = index.current + 3;
      console.log("nextDataSet ~ current:-", index.current);
      console.log("nextDataSet ~ arr:-", arr);

      setFilteredData(arr);
    }
  };

  const prvDataSet = () => {
    const start = index.current - 6;
    console.log("prvDataSet ~ start:-", start)
    
    if (start >= 0) {
      const end = index.current - 3;
      const arr = [];
      for (let i = start; i < end; i++) {
        if (data[i]) arr.push(data[i]);
      }
      index.current = index.current - 3;
      console.log("nextDataSet ~ current:-", index.current);
      console.log("nextDataSet ~ arr:-", arr);
      setFilteredData(arr);
    }
  };

  const loadTransactionData = () => {
    const list = JSON.parse(localStorage.getItem("expensesList"));
    const arrList = [];
    for (const [key, value] of Object.entries(list)) {
      value.list.forEach((ele) => arrList.push(ele));
    }
    console.log(arrList);
    setdata(arrList);
  };

  useEffect(() => {
    loadTransactionData();
  }, [reload]);

  useEffect(() => {
    nextDataSet();
  }, [data])

  return (
    <>
      <h1>Transaction</h1>
      <div className={styles.table}>
        <div>
          {filtertedData.length ? 
          filtertedData.map((ele) => (
            <TableCell data={ele} />
          )) : <h2>No Transaction data found</h2>
          }
        </div>
        <div>
          <IconButton onClick={prvDataSet}>
            <GrCaretPrevious />
          </IconButton>

          <IconButton onClick={nextDataSet}>
            <GrCaretNext />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Transaction;
