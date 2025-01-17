// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );
  
  // 2. Identify the Output of the Code
  const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
  console.log(materials.map((material) => material.length)); // Output: [8, 6, 7, 9]
  
  // 3. Write an Arrow Function Called square
  const square = (num) => num * num;
  console.log(square(4)); // Output: 16
  
  // 4. Create a New Array Containing the Squares of Numbers
  const numbers = [1, 2, 3];
  const squares = numbers.map((num) => num * num);
  console.log(squares); // Output: [1, 4, 9]
  
  // 5. Use an Arrow Function to Reverse a String
  const reverseString = (str) => str.split('').reverse().join('');
  console.log(reverseString("hello")); // Output: "olleh"
  
  // 6. Create a Chainable Object
  const chainable = (initialValue) => {
    let value = initialValue;
  
    const obj = {
      add: (num) => {
        value += num;
        return obj;
      },
      multiply: (num) => {
        value *= num;
        return obj;
      },
      getResult: () => value
    };
  
    return obj;
  };
  
  const result = chainable(5).add(3).multiply(2).getResult();
  console.log(result); // Output: 16
  