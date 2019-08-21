class ExpenseController{
  constructor(view, model){
    this.DOM = view.getDOM();
    this.model = model;
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.setUpEventHandlers();
  }

  setUpEventHandlers(){
    this.DOM.expenseForm.addEventListener('submit', this.addExpense);

    [...this.DOM.deleteButtons].forEach((deleteButton) => {
      deleteButton.addEventListener('click', this.removeExpense);
    });
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

  removeExpense(){
    console.log("Delete An Expense");
  }
}

