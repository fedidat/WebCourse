////////////////////////////////////////// JAVASCRIPT ///////////////////////////////////////////////////


// VARIABLES

var a = 1;
var a = "a";
var a = "This is a string";
var a = [1, 2, 3];

// FUNCTIONS

function helloWorld() {  
    document.write("Hello World!");  
} 

function alertMessage(message) {
    alert(message);
}

alertMessage('הודעה');

function jump() {
    for (let i = 0; i < 7; ++i) {
        setTimeout(function () {
            console.log(i);
            // => 0
            // => 1
            // => 2
            // => 3
            // => 4
            // => 5
            // => 6
            // => 7
        }, 1000);
  }
}

// JSON OBJECTS
var a = { "name":"John", "age":30, "car":null };
console.log(a.name);
console.log(a['name']);

// var vs let(ES6)

var a = 42;
if (true) {
  var b = 7;
  let c = 123;
}
console.log(a);
console.log(b);
console.log(c);

// ARRAYS

 let fruits = ["Apple"]

// Add to the end of the array
fruits.push("Pear")
2 // < The new length of the array

 [ 'Apple', 'Pear' ]
 //         ^ This was just added

// Add to the start of the array
 fruits.unshift("Orange")
3 // < The new length of the array

 [ 'Orange', 'Apple', 'Pear' ]
 // ^ This was just added

// Access the element at index 1 (the second element)
 fruits[1]
'Apple'

// How many items do we have?
 fruits.length
3

// Turn the Apple into Lemon
 fruits[1] = "Lemon"
'Lemon'

 [ 'Orange', 'Lemon', 'Pear' ]
 //          ^ This was before an Apple

// Insert at index 1 a new element
 fruits.splice(1, 0, "Grapes")
[] // < Splice is supposed to delete things (see below)
   //   In this case we're deleting 0 elements and
   //   inserting one.

 [ 'Orange', 'Grapes', 'Lemon', 'Pear' ]
 //          ^ This was added.

// Get the Lemon's index
 fruits.indexOf("Lemon")
2

// Delete the Lemon
 fruits.splice(2, 1)
[ 'Lemon' ]

 [ 'Orange', 'Grapes', 'Pear' ]
 //                   ^ Lemon is gone

// Remove the last element
 fruits.pop()
'Pear'

 [ 'Orange', 'Grapes' ]
 //                  ^ Pear is gone

// Remove the first element
 fruits.shift()
'Orange'

   [ 'Grapes' ]
 // ^ Orange is gone


 // EQUALS

 var x = 5;
 var y = '5';

 x == y //?

 x === y //?


