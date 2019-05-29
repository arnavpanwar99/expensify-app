import React from 'react';
import { connect } from 'react-redux';
import { sortByDate, sortByAmount, changeFilterText, setStartDate, setEndDate } from './../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component{
    state={
        calenderFocused: null
    }
    onDatesChange = ( { startDate, endDate } ) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({ calenderFocused: focusedInput }))
    }
    render(){
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(changeFilterText( {text: e.target.value } ))
                }}></input>
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    this.props.dispatch(e.target.value==='date'?sortByDate():sortByAmount());
                }}>
                    <option value='date' >Date</option>
                    <option value='amount' >Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId={JSON.stringify(this.props.filters.startDate.valueOf())}
                endDate={this.props.filters.endDate}
                endDateId={JSON.stringify(this.props.filters.endDate.valueOf())}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                 />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);