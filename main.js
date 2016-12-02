console.log("is this thing on?")


// get variables
var treeHeight = document.getElementById("treeHeight").value;

var treeChar = document.getElementById("treeChar").value;

var button = document.getElementById("grow");


// checking to see if those inputs returned values
console.log(treeHeight, treeChar);


// define the function that grows the tree
function growTree(x, y) {

}


// listen for.... the two parameters?
button.addEventListener('click', growTree(treeHeight, treeChar), false)
