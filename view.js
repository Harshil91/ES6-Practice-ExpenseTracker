class ExpenseView{
  constructor(model) {
    this.DOM = this.selectDOMElements();
    this.model = model;
    this.editableExpenses = new Set();

    this.model.subscribe(this);
  }
  selectDOMElements() {
    return {
      deleteButtons: document.getElementsByClassName("delete"),
      editButtons: document.getElementsByClassName("edit"),
      expenseForm: document.getElementById('new-expense-form'),
      expenses: document.getElementById('expenses'),
    };
  }

  getDOM(){
    return Object.assign({},this.DOM);
  }

  setExpenseEditable(expenseId){
    this.editableExpenses.add(expenseId);
    this.notify();
  }

  notify(){
    this.DOM.expenses.innerHTML = '';
    this.model.all().forEach((expense) => {

      
      this.DOM.expenses.innerHTML += (this.editableExpenses.has(expense.id))
                                   ? this.makeExpenseEditRow(expense)
                                   : this.makeExpenseDisplayRow(expense);
    });
  }


  makeExpenseField(value){
    return `
      <div class="field">
        <h2>${value}</h2>
      </div>
    `;
  }

  makeExpenseEditRow(expense){
    return `
      <div class="expense">
        This is being edited.
      </div>
    
    
    `;

  }

  makeExpenseDisplayRow(expense){
    const description = this.makeExpenseField(expense.description);
    const date = this.makeExpenseField(expense.date);
    const amount = this.makeExpenseField("$" + expense.amount);
    return `
        <div class="expense">
          ${description}
          ${date}
          ${amount}
        </div>
        <div class="actions">
          <button class="edit" data-id="${expense.id}">
            Edit
          </button><button class="delete" data-id="${expense.id}">
            Delete
          </button>
        </div>
      `;
  }
}