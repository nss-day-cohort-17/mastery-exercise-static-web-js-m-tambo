console.log("is this thing on?")


// get variables and add them to object
function getTreeSpecs() {
   var treeHeight = document.getElementById("treeHeight").value;
   var treeChar = document.getElementById("treeChar").value;
   var treeSpecs = {tHeight: treeHeight, tChar: treeChar};
   return treeSpecs;
}

// define tree function
function growTree(Obj) {
   var newTree ="";
   getTreeSpecs();
   for(var i = 0; i <= Obj.tHeight; i++) {
     newTree += " ".repeat(Obj.tHeight - i) + Obj.tChar.repeat(2*i + 1) + "\n";
   }
  console.log(newTree)
}

// event listener for button
document.getElementById("grow").addEventListener('click', function() {
   var treeSpecs = getTreeSpecs();
   if (treeSpecs.tHeight === "" || treeSpecs.tChar === "") {
      alert("Enter a valid character in each box!");
   }
   else {
      growTree(treeSpecs);
   }
})

// event listener for enter key in the FIRST input
document.getElementById("treeHeight").addEventListener('keypress', function(x) {
   if (x.key === "Enter") {
      var treeSpecs = getTreeSpecs();
      if (treeSpecs.tHeight === "" || treeSpecs.tChar === "") {
         alert("Enter a valid character in each box!");
      }
      else {
         growTree(treeSpecs);
      }
   }
})

// event listener for enter key in the SECOND input
document.getElementById("treeChar").addEventListener('keypress', function(x) {
   if (x.key === "Enter") {
      var treeSpecs = getTreeSpecs();
      if (treeSpecs.tHeight === "" || treeSpecs.tChar === "") {
         alert("Enter a valid character in each box!");
      }
      else {
         growTree(treeSpecs);
      }
   }
})
