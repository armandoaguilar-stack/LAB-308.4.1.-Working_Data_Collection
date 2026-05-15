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
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Splitting the CSV data into rows using split. Provides brea/spacing.
const rows = csvData.split("\n");

const headers = rows[0].split(",");

// We need to convert each CSV row into an array and get headers
const dataArr = []; // [] searches and references data in the array

//Start at 1 [i] to skip the header section for rows to go through data in arrays 
for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(",");
    
//Clean data by creating an object for each row new with individual values
    const person = {
        ID: values[0],
        Name: values[1],
        Occupation: values[2],
        Age:values[3]
    };

    dataArr.push(person) // log data from person data. 
}

console.log(headers); // logs header information on its own row
console.table(dataArr); //Turns data into a table in an orderly manner acorss rows 


console.log('Part 2: Expanding Functionality')

const csvData2 = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

const rows2 = csvData2.split("\n");

// Declare a variable that stores the number of columns in each row of data within the CSV.
const numberOfColumns = rows2[0].split(",").length;

console.log('Number of Columns:' , numberOfColumns);

//Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data
