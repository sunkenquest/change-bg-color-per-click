// let greetings = "Hello";

// //console.log(greetings);

// let Persons ={
//     firstName : "Mikco",
//     lastName : "Jasareno",
//     age : 23,
// }

// //console.log(Persons)

// // let hey = true;

// // let count = 0;
// // while (hey == true){
// //     count ++
// //     if (count == 5){
// //         hey = false;
// //         console.log(hey)
// //     }
// // }

// function add (a, b){
//     return a + b

// }

// console.log(add(4, 5))


// let fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// for (let fruit in fruits){
//     console.log(fruit)
// }

class BankAccount {
  constructor(ownerName, balance = 0) {
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${amount} deposited. New balance: ${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn. New balance: ${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  getBalance() {
    console.log(`Current balance: ${this.balance}`);
  }
}

// Create instances of BankAccount
const account1 = new BankAccount("Alice", 1000);
const account2 = new BankAccount("Bob");

account1.deposit(500);
account1.withdraw(200);
account1.getBalance();

account2.deposit(1000);
account2.withdraw(300);
account2.getBalance();