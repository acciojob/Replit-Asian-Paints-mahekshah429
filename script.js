document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // First reset all grid blocks to transparent
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Apply color to the selected block
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  } else {
    alert("Please enter a valid Block ID between 1 and 9.");
  }
});

// Reset Button Logic
document.getElementById("Reset").addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // Clear inputs
  document.getElementById("block_id").value = "";
  document.getElementById("colour_id").value = "";
});