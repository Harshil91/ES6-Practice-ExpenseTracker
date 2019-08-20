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
    expense.id = this.generateId();
    this.expenses.push(expense);
    this.db.add(expense);
    this.subscribers.forEach((subscriber) => {
      subscriber.notify();
    });
  }

  subscribe(subscriber){
    this.subscribers.push(subscriber);
    subscriber.notify();

  }

  generateId(){
    const timestamp = new Date().getTime();

    return JSON.stringify(timestamp);
  }
}