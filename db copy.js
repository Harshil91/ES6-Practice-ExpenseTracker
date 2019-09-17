class DB {
  all(){
    const expenses = [];

    for (let key in localStorage){
      const expense = JSON.parse(localStorage.getItem(key));

      expenses.push(expense);
    }

    return expenses;

  }
  
  edit(expense){
    this.add(expense);
  }

  add(expense){
    localStorage.setItem(expense.id, JSON.stringify(expense));
  }

  remove(expenseId){
    localStorage.removeItem(expenseId);
  }
}