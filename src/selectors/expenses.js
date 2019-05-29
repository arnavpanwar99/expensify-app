//getVisibleExpenses
const getVisibleExpenses = (expenses, { text, startDate, endDate, sortBy} ) => {
    return (
        expenses.filter((expense) => {
            const textFilter=expense.description.toLowerCase().includes(text.toLowerCase());
            const startDateFilter=startDate===undefined?true:startDate<expense.createdAt;
            const endDateFilter=endDate===undefined?true:endDate>expense.createdAt;
            return textFilter && startDateFilter && endDateFilter;
        }).sort(( a, b ) => {
            if( (sortBy==='date' && a.createdAt>b.createdAt) || (sortBy==='amount' && a.amount>b.amount) ){
                return -1
            }else if( (sortBy==='date' && a.createdAt<b.createdAt) || (sortBy==='amount' && a.amount<b.amount) ){
                return 1
            }else {
                return 0
            }
        })
    )
}

export default getVisibleExpenses;