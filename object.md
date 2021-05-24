1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
// your code goes here

<code>var myPenguin = {
    {
    name : "Parker",
    origin : "Love Birds",
    author : "RObert J. Sherman"
},

var myPenguin = {
    name : "Sam Sawnoff",
    origin : "The Magic Pudding",
    author : "	Norman Lindsay"
},

var myPenguin = {
    name : "Misha",
    origin : "Penguin Lost",
    author : "Andrey Kurkov"
},
</code>
2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
// your code goes here

console.log("Hello, I'm a Penguin and my name is " +  myPenguin.name);


3. Write another line of code that adds a new property to your penguin called canFly and set it to false.
// your code goes here
4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
// your code goes here
5. ext, call your penguin's sayHello() method and make sure that it works!
// your code goes here
6. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
// your code goes here
7. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
// your code goes here
// your code goes here
8. Change the canFly property to true -- again, without modifying any of your previous code!
// your code goes here
9. Now call your penguin's fly() method again and make sure it works as expected!
// your code goes here
10. Write a for ... in loop to print each key to the console.
// your code goes here
11. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
// your code goes here
Exercise 2
12. Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
// your code goes here
13. Keep track of which books you read and which books you want to read!
Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// your code goes here