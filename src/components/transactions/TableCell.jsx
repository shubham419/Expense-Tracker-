import React from "react";
import styles from "./Transaction.module.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';
import { enqueueSnackbar } from "notistack";

function TableCell({ data }) {

    function underDevelopment(){
        enqueueSnackbar("App is under development :)", {variant:"warning"})
    }

  return (
    <>
    <div className={styles.tableCell}>
      <div>
        <p>{data.title}</p>
        <p>{data.date}</p>
      </div>
      <p>₹{data.price}</p>
      <IconButton onClick={underDevelopment}>
        <FaEdit size={30} />
      </IconButton>
      <IconButton onClick={underDevelopment}>
        <MdDeleteForever size={30} />
      </IconButton>
    </div>
    <div className={styles.divider}/>
    </>
  );
}

export default TableCell;
