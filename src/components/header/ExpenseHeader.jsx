import React, { useEffect, useState } from "react";
import styles from "./ExpenseHeader.module.css";
import BalanceCard from "./BalanceCard";
import BalanceModal from "./BalanceModal";
import ExpenseModal from "./ExpenseModal";
import { PieChart } from "@mui/x-charts/PieChart";

function ExpenseHeader({reload}) {
  const [balanceModal, setBalanceModal] = React.useState(false);
  const [expanseModal, setExpanseModal] = useState(false);
  const [data, setData] = useState({
    balance: 0,
    expenses: 0,
  });
  const [piData, setPiData] = useState([]);

  const loadPiData = () => {
    const list = JSON.parse(localStorage.getItem("expensesList"));
    const arrList = [];
    for (const [key, value] of Object.entries(list)) {
      arrList.push({ label: key, value: Number(value.totalExpense) });
    }
    setPiData(arrList);
  };

  useEffect(() => {
    if (!localStorage.getItem("expensesList")) {
      localStorage.setItem("expensesList", "{}");
      localStorage.setItem("expenses", "0");
    }
    if (!localStorage.getItem("balance")) {
      localStorage.setItem("balance", "5000");
    }
  }, []);

  useEffect(() => {
    setData((data) => ({
      ...data,
      balance: [localStorage.getItem("balance")],
    }));
  }, [balanceModal, expanseModal]);

  useEffect(() => {
    async function updateExpenses() {
      setData((data) => ({
        ...data,
        expenses: [localStorage.getItem("expenses")],
      }));
    }
    updateExpenses();
    loadPiData();
    reload(prv => prv + 1);
  }, [expanseModal]);


  return (
    <>
      <div className={styles.wrapper}>
        <BalanceCard
          title={`Wallet Balance: ₹${data.balance}`}
          button={`Add Income`}
          onClick={() => {
            setBalanceModal(true);
          }}
        />
        <BalanceCard
          title={`Expenses: ₹${data.expenses}`}
          button={`Add Expense`}
          onClick={() => {
            setExpanseModal(true);
          }}
        />
        <div>
          {piData.length ? (
            <PieChart
              width={450}
              height={200}
              series={[{ data: [...piData] }]}
            ></PieChart>
          ) : null}
        </div>
      </div>
      <BalanceModal
        open={balanceModal}
        onClose={() => {
          setBalanceModal(false);
        }}
      />
      <ExpenseModal
        open={expanseModal}
        onClose={() => {
          setExpanseModal(false);
        }}
      />
    </>
  );
}

export default ExpenseHeader;
