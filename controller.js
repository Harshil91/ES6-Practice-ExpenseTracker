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

    [...this.DOM.editButtons].forEach((editButton) => {
      editButton.addEventListener('click', this.setExpenseEditable);
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

  removeExpense(e){
    const button = e.currentTarget;
    const expenseId = button.attributes["data-id"].value;

    this.model.removeExpense(expenseId);
  }

  setExpenseEditable(e){
    const button = e.currentTarget;
    const expenseId = button.attributes["data-id"].value;

  }
}

