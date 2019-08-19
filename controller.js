class ExpenseController{
  constructor(view){
    this.DOM = view.getDOM();

    this.setUpEventHandlers();
  }

  setUpEventHandlers(){
    this.DOM.expenseForm.addEventListener('submit', this.addExpense);
  }

  addExpense(e){
    e.preventDefault();
    const form = e.currentTarget;
    const amount = form.amount.value;
    const date = form.date.value;
    const description = form.description.value;

    console.log (amount, date, description);
  }
}