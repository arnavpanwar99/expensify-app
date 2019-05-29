//CHANGE_FILTER_TEXT
const changeFilterText = ( {text=''} = {} ) => ({
    type: 'CHANGE_FILTER_TEXT',
    text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (startDate=undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

//SET_END_DATE
const setEndDate = (endDate=undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

export { changeFilterText, sortByAmount, sortByDate, setStartDate, setEndDate };