console.log("is this thing on?")


// get variables

function getTreeSpecs() {
   var treeHeight = document.getElementById("treeHeight").value;
   var treeChar = document.getElementById("treeChar").value;
   var treeSpecs = {tHeight: treeHeight, tChar: treeChar}
}

// define function
function growTree(Obj) {
   getTreeSpecs();
   for(var i = 0; i <= Obj.tHeight; i++) {
     newTree += " ".repeat(Obj.tHeight - i) + Obj.tChar.repeat(2*i + 1) + "\n";
   }
  console.log(newTree);
}

document.getElementById("grow").addEventListener('click', function() {
   growTree(treeSpecs)
})

document.getElementById("grow").addEventListener('keypress', function() {
   growTree(treeSpecs)
})

// event listeners for button and enter key
// function() {

// }
// submit.addEventListener()
// submit.addEventListener()





// testing
var treeHeight = document.getElementById("treeHeight").value;
console.log(treeHeight);




// listen for.... the two parameters?
// button.addEventListener('click', growTree(treeHeight, treeChar), false)
