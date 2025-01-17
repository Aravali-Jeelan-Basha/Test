
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  

  const resizeHandler = debounce(() => {
    console.log('Resize event triggered!');
  }, 300);
  
  //window.addEventListener('resize', resizeHandler);
  

  function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;
  
    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
  

  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
  console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
  console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
  

  function groupAnagrams(strs) {
    const map = new Map();
  
    for (let str of strs) {
      const sorted = str.split('').sort().join('');
      if (!map.has(sorted)) {
        map.set(sorted, []);
      }
      map.get(sorted).push(str);
    }
  
    return Array.from(map.values());
  }
  

  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
  console.log("****  THE END  ****");


  // 1. Replace Function Expressions with Arrow Functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

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
