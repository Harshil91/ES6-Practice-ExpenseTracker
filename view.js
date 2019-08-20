class ExpenseView{
  constructor(model) {
    this.DOM = this.selectDOMElements();
    this.model = model;

    this.model.subscribe(this);
  }
  selectDOMElements() {
    return {
      expenseForm: document.getElementById('new-expense-form'),
    };
  }

  getDOM(){
    return Object.assign({},this.DOM);
  }

  notify(){
    
  }

}