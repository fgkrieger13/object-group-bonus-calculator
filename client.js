const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
function nameEnter(employee){

  for (var i = 0; i < employees.length; i++) {
    if (employees[i].name == employee){
      return employees[i];
    }
  }
}

function employeeRating(name, employeeNumber, annualSalary, reviewRating){

  for (var i = 0; i < employees.length; i++){
    if (employees[i].reviewRating === 5){
      let el1 = 1.10;
      let el2 = Number(employees[i].annualSalary * el1);
      let el3 = Number(el2 - employees[i].annualSalary);
      let review = {
        name: (name),
        bonusPercentage: (el1),
        totalCompensation: (el2),
        totalBonus: (el3),
    };
    return review;
  }

  else if (employees[i].reviewRating === 4){
    let el1 = 1.06;
    let el2 = Number(employees[i].annualSalary * el1);
    let el3 = Number(el2 - employees[i].annualSalary);
    let review = {
      name: (name),
      bonusPercentage: (el1),
      totalCompensation: (el2),
      totalBonus: (el3),
    };

  }

  else if (employees[i].reviewRating === 3){
    let el1 = 1.04;
    let el2 = Number(employees[i].annualSalary * el1);
    let el3 = Number(el2 - employees[i].annualSalary);
    let review = {
      name: (name),
      bonusPercentage: (el1),
      totalCompensation: (el2),
      totalBonus: (el3),
    };

  }

  else if (employees[i].reviewRating <= 2){
    let el1 = 1.0;
    let el2 = Number(employees[i].annualSalary * el1);
    let el3 = Number(el2 - employees[i].annualSalary);
    let review = {
      name: (name),
      bonusPercentage: (el1),
      totalCompensation: (el2),
      totalBonus: (el3),
    };
    return review;
  }

}
}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
