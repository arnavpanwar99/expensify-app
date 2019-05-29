import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component{
    state={
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calenderFocused: false,
        error: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note=e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    checkDefaults = () => {
        if(this.props.defaultValues){
            const { description, amount, createdAt, note } = this.props.defaultValues;
            this.setState(() => ({
                description,
                amount,
                createdAt: moment(createdAt),
                note
            })
            )
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            const error = 'Please provide a valid value for description and amount.'
            this.setState(() => ({ error }))
        }else{
            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    componentDidMount(){
        this.checkDefaults();
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type='text' 
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}>
                    </input>
                    <input 
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}>
                    </input>
                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}/>
                    <textarea 
                        placeholder='Add a note for your expense(optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>{this.props.defaultValues?'Edit Expense':'Add Expense'}</button>
                </form>
            </div>
        )
    }
}
