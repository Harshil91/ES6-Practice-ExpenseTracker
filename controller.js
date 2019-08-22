class ExpenseController{
  constructor(view, model){
    this.DOM = view.getDOM();
    this.model = model;
    this.view = view;


    this.addExpense = this.addExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.hideErrorMessage = this.hideErrorMessage.bind(this);
    this.setExpenseEditable = this.setExpenseEditable.bind(this);
    this.unsetExpenseEditable = this.unsetExpenseEditable.bind(this);
    

    this.model.subscribe(this);


  }

  setUpEventHandlers(){
    this.DOM.expenseForm.addEventListener('submit', this.addExpense);
    this.DOM.expenseForm.addEventListener('reset', this.hideErrorMessage);

    [...this.DOM.deleteButtons].forEach((deleteButton) => {
      deleteButton.addEventListener('click', this.removeExpense);
    });

    [...this.DOM.editButtons].forEach((editButton) => {
      editButton.addEventListener('click', this.setExpenseEditable);
    });
    [...this.DOM.editForms].forEach((editForms) => {
      editForms.addEventListener('reset', this.unsetExpenseEditable);
    });
    [...this.DOM.editForms].forEach((editForms) => {
      editForms.addEventListener('submit', this.editExpense);
    });
  }



  addExpense(e){
    e.preventDefault();
    const form = e.currentTarget;
    const amount = form.amount.value;
    const date = form.date.value;
    const description = form.description.value;

    try {
      this.model.addExpense({
        amount,
        date,
        description
      });
      this.view.hideErrorMessage();
    } catch (error) {
      this.view.displayAmountErrorMessage();
    }
  }


  editExpense(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const id = form.attributes['data-id'].value;

    const amount = form.amount.value;
    const date = form.date.value;
    const description = form.description.value;

    try {
      this.model.editExpense({
        amount,
        date,
        description,
        id
      });

      this.view.hideErrorMessage();
      this.view.unsetExpenseEditable(id);
      this.setUpEventHandlers();
    } catch (error){
      this.view.displayAmountErrorMessage();
    }
  }

  removeExpense(e){
    const button = e.currentTarget;
    const expenseId = button.attributes["data-id"].value;

    this.model.removeExpense(expenseId);
  }

  setExpenseEditable(e){
    const button = e.currentTarget;
    const expenseId = button.attributes["data-id"].value;

    this.view.setExpenseEditable(expenseId);
    this.setUpEventHandlers();

  }

  unsetExpenseEditable(e){
    const form = e.currentTarget;
    const expenseId = form.attributes['data-id'].value;

    this.view.hideErrorMessage();
    this.view.unsetExpenseEditable(expenseId);
    this.setUpEventHandlers();
  }

  hideErrorMessage(){
    this.view.hideErrorMessage();
  }

  notify(){
    this.setUpEventHandlers();
  }
}

