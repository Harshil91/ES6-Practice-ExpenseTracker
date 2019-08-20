class ExpenseController{
  constructor(view, model){
    this.DOM = view.getDOM();
    this.model = model;

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

    this.model.addExpense({
      amount,
      date,
      description
    });
  }
}