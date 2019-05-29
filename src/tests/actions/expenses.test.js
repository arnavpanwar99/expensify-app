import { addExpense, removeExpense, editExpense } from './../../actions/expenses';

test('must return a newly added expense', () => {
    const action = removeExpense( '1232' );
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1232'
    })
})