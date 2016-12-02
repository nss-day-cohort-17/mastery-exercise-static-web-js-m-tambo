console.log("is this thing on?")


// get variables

function getTreeObj() {
   var treeHeight = document.getElementById("treeHeight").value;
   var treeChar = document.getElementById("treeChar").value;
   var treeObj = {tHeight: treeHeight, tChar: treeChar}
}



// define function
function growTree(treeObj) {
   for(var i = 0; i <= treeObj.tHeight; i++) {
     newTree += " ".repeat(treeObj.tHeight - i) + treeObj.tChar.repeat(2*i + 1) + "\n";
   }
  console.log(newTree);
}


growTree(treeObj);

// listen for.... the two parameters?
// button.addEventListener('click', growTree(treeHeight, treeChar), false)
