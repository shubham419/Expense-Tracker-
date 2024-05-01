import React from 'react'
import styles from './ExpenseHeader.module.css'
import Button from '@mui/material/Button';
import { IoIosAddCircle } from "react-icons/io";

function BalanceCard({title, button, onClick}) {
  return (
    <div className={`${styles.balanceCard} ${styles.wrapper}`}>
        <h2>{title}</h2>
        <Button variant="contained" startIcon={<IoIosAddCircle/>} onClick={onClick}>{button}</Button>
    </div>
  )
}

export default BalanceCard