console.log("is this thing on?")


// get variables

function getTreeObj() {
   var treeObj = {};
   var treeHeight = document.getElementById("treeHeight").value;
   var treeChar = document.getElementById("treeChar").value;
   treeObj.
}


// define function
function growTree(treeObj) {
   for(var i = 0; i <= treeObj.treeHeight; i++) {
     newTree += " ".repeat(treeObj.treeHeight - i) + treeObj.treeChar.repeat(2*i + 1) + "\n";
   }
  console.log(newTree);
}


growTree(treeObj);

// listen for.... the two parameters?
// button.addEventListener('click', growTree(treeHeight, treeChar), false)
