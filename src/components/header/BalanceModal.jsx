import { Modal, TextField, Button } from "@mui/material";
import  { useEffect, useState } from "react";
import styles from "./ExpenseHeader.module.css";

function BalanceModal({ open, onClose }) {
  const [balance, setBalance] = useState(0);
  const addBalance = () => {
    setBalance(0);
    const currBalance = localStorage.getItem("balance");
    const totalBalance = Number(currBalance) + Number(balance);
    localStorage.setItem("balance", totalBalance);
    onClose();
  }

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div className={styles.balanceModal}>
          <h3>Add Balance</h3>
          <TextField
            label="Balance"
            type="number"
            onChange={(e) => setBalance(e.target.value)}
            value={balance}
            variant="standard"
          />
          <Button
            variant="contained"
            onClick={addBalance}
          >
            Add Balance
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default BalanceModal;
