import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    //a let title = props.title;

    const clickHandler = () => {
        //a title = 'Updated Title';
        //a Here the value of title is getting changed but react is not loading this component again with the new value thats why we still see old value of title on UI
        //a So to update value in UI we need to use "State" to update it 
        
        setTitle(`updated!!`);
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;