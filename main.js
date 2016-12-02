console.log("is this thing on?")


// get variables

function getTreeSpecs() {
   var treeHeight = document.getElementById("treeHeight").value;
   var treeChar = document.getElementById("treeChar").value;
   var treeSpecs = {tHeight: treeHeight, tChar: treeChar};
   return treeSpecs;
}

// define function
function growTree(Obj) {
   var newTree ="";
   getTreeSpecs();
   for(var i = 0; i <= Obj.tHeight; i++) {
     newTree += " ".repeat(Obj.tHeight - i) + Obj.tChar.repeat(2*i + 1) + "\n";
   }
  console.log(newTree)
}

document.getElementById("grow").addEventListener('click', function() {
   var treeSpecs = getTreeSpecs();
   growTree(treeSpecs);
})

document.getElementById("grow").addEventListener('keypress', function() {
   growTree(treeSpecs)
})

// event listeners for button and enter key
// function() {

// }
// submit.addEventListener()
// submit.addEventListener()
