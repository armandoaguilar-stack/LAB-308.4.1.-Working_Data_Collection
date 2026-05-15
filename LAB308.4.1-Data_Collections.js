console.log('Part 3 - Feeling Loopy')
// CSV data looks like this: ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26
// Once data process, it looks like this:
// ID Name   Occupation  Age
// 42 Bruce  Knight      41
// 57 Bob    Fry Cook    19
// 63 Blaine Quiz Master 58
// 98 Bill   Doctor      26

// Write a script that accomplishes:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

// Storing all the data inside long string. \n means a new line
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Breaks string apart everytime it sees a new line. Converts table into array. 
const table = csv.split("\n")

// logs the csv after dividing string into ordered list 
console.log(table)

// [] creates an empty array that can later store processed data. 
let arr2 = [];

// Loop goes through each item inside the table array one at a time. 
for (i of table){

//Splits the string whenever there is a comma
   arr2.push( i.split(","));
}
console.log(arr2);

//First iteration: ["ID, "Name', "Occupation", "Age"],
//2nd iteration: ["42", "Bruce", "Knight", "41"],
// 3rd / 4th / 5th iteration ++++ 

console.log('Part 1: Refactoring Old Code')

// Data CSV 
const csv = "ID,Name,Occupation,Age,42,Bruce,Knight,41,57,Bob,Fry Cook,19,63,Blaine,Quiz Master,58,98,Bill,Doctor’s Assistant,26";

// Splitting the CSV data into rows using split. Provides brea/spacing.
const rows = csv.split("\n");

