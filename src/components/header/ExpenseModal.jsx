import { Modal, TextField, Button } from "@mui/material";
import { useState } from "react";
import styles from "./ExpenseHeader.module.css";
import { enqueueSnackbar } from "notistack";

function ExpenseModal({ open, onClose }) {
  const [data, setData] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  const handler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const addExpenses = () => {
    if (data.title && data.category && data.date && data.price) {
      const list = JSON.parse(localStorage.getItem("expensesList"));
      if (data.category in list) {
        list[data.category].totalExpense =
          Number(list[data.category].totalExpense) + Number(data.price);
        list[data.category].list.push(data);
      } else {
        list[data.category] = { list: [{ ...data }], totalExpense: data.price };
      }
      localStorage.setItem("expensesList", JSON.stringify(list));
      const expenses = Number(localStorage.getItem("expenses")) + Number(data.price);
      const balance = Number(localStorage.getItem("balance")) - Number(data.price);
      localStorage.setItem("expenses", expenses);
      localStorage.setItem("balance", balance);
      setData({});
      onClose();
    } else {
      enqueueSnackbar("please Fill all the details.", {variant: "warning"})
    }
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div className={styles.balanceModal}>
          <h3>Add Expenses</h3>
          <input
            label="Title"
            name="title"
            placeholder="Title"
            onChange={handler}
            value={data.title}
          />
          <input
            label="Price"
            name="price"
            placeholder="Price"
            type="number"
            onChange={handler}
            value={data.price}
          />
          <select name="category" onChange={handler}>
            <option hidden>Choose Category</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
          <input
            type="date"
            label="Date"
            name="date"
            onChange={handler}
            value={data.date}
          />
          <Button variant="contained" onClick={addExpenses}>
            Add Expense
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default ExpenseModal;
