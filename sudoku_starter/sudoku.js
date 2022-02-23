//global variable
//accesible to all functions
var sol =
    [[0, 7, 0, 2, 3, 8, 0, 0, 0],
    [0, 0, 0, 7, 4, 0, 8, 0, 9],
    [0, 6, 8, 1, 0, 9, 0, 0, 2],
    [0, 3, 5, 4, 0, 0, 0, 0, 8],
    [6, 0, 7, 8, 0, 2, 5, 0, 1],
    [8, 0, 0, 0, 0, 5, 7, 6, 0],
    [2, 0, 0, 6, 0, 3, 1, 9, 0],
    [7, 0, 9, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 9, 7, 4, 0, 8, 0]];
//this function prints the board
var printBoard = function () {
    //print board
    //this is here to help you understand how the code works.
    //you should remove it when you write your own code.
    var r11 = document.getElementById('r11');
    r11.textContent = sol[0][0];
    var r12 = document.getElementById('r12');
    r12.textContent = sol[0][1];
    
};

//write the code to solve the puzzle here
//once solved you may need to call the printBoard function again
//to display the result
var solve = function() {

};
printBoard();