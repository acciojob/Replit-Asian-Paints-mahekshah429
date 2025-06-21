document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all grid items to transparent
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Apply color to the selected block
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  } else {
    alert("Invalid Block ID. Please enter a number from 1 to 9.");
  }
});

document.getElementById("Reset").addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Clear inputs
  document.getElementById("block_id").value = "";
  document.getElementById("colour_id").value = "";
});
