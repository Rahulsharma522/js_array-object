
// Using the different way of accessing and assigning a value to the object using `.` or `[]`

var person = {
    firstName: "John",
    lastName: "Doe"
  };
person.living = "dharamshala";
person["permanent addresh"] = "delhi";

// 1. Define a variable named `user` and assign a blank object to it.

var user = {}

// 2. Add a key of `user name` and a value of `Black Panther` to that object.

user["user name"] = "Black Panther";

// 3. Using `console.log` log the value of `user name` key from the user object.

// 4. Add a key of the value of variable `batch` in the object with the value of 10.
var batch = "myBatch";

// 5. Using the alert function alert the value of the key added above.

function showAlert() {
    alert ("Hello world!");
  }

// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.
 
var person = {
    animal: 'The answer to the meaning of life'
    
  };

// 7. Using the function console.log log the value of the key `42`.

        console.log(typeof 42); 

// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.
var city = prompt("Enter the city name you visited las time.");

// 9. Uisng console.log log the value of the key defined above.

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// 10. Can you define a key of `let or var` in any object? Reason.
function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
  }
  