import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react/cjs/react.development';


const NewExpense = (props) => {
const [isFormVisible, setIsFormVisible] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsFormVisible(false);
        // console.log(expenseData);
    }
    const showForm = () => {
        setIsFormVisible(true);
    }

    const hideForm = () => {
        setIsFormVisible(false);
    }
    return (
        <div className="new-expense">
            {!isFormVisible && <button onClick={showForm}> Add new Expense </button>}
            {isFormVisible && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={hideForm}/>}
        </div>
    );
}
export default NewExpense;