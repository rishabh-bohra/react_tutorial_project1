import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const titleChangeHandler = (event) => {

        //// Method3 -> This method is correct as we know that react schedules the state update instead of doing it instantly so this mehtod
        // Garunty that you will update the correct prev state

        // So If our state update depend on prev state we must use this method
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });

        //// Method2
        // setUserInput({
        //     ...userInput, 
        //     enteredTitle: event.target.value,
        // });

        //// Method1
        // setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });


        // setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });


        // setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = userInput;

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        setUserInput(
            {
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: '',
            });
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={userInput.enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={userInput.enteredDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;