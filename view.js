class ExpenseView{
  constructor(model) {
    this.DOM = this.selectDOMElements();
    this.model = model;

    this.model.subscribe(this);
  }
  selectDOMElements() {
    return {
      expenseForm: document.getElementById('new-expense-form'),
      expenses: document.getElementById('expenses'),
    };
  }

  getDOM(){
    return Object.assign({},this.DOM);
  }

  notify(){
    this.DOM.expenses.innerHTML = '';
    this.model.all().forEach((expense) => {
      const.expenseRow = `
        <div class="expense">
          <div class="field">
            <h2>${expense.description}</h2>
          </div>
        </div>
      `;

      this.DOM.expenses.innerHTML += expenseRow;
    });
  }

}