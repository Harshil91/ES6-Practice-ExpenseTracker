class ExpenseModel{
  constructor(db){
    this.expenses=db.all();
    this.subscribers =[];

    this.db = db;
  }

  all(){
    return [...this.expenses];
  }

  addExpense(expense){
    this.expenses.push(expense);
    this.subscribers.forEach((subscriber) => {
      subscriber.notify();
    });
  }

  subscribe(subscriber){
    this.subscribers.push(subscriber);
    subscriber.notify();

  }
}