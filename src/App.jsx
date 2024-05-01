import { SnackbarProvider } from "notistack";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import { useState } from "react";

function App() {


  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={2000}
      >
        <ExpenseTracker />
      </SnackbarProvider>
    </>
  );
}

export default App;
