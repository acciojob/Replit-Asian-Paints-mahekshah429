const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all grid items
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => item.style.backgroundColor = "transparent");

  // Check if ID is valid (1–9)
  if (blockId >= 1 && blockId <= 9) {
    const targetBlock = document.getElementById(blockId);
    if (targetBlock) {
      targetBlock.style.backgroundColor = color;
    }
  } else {
    alert("Please enter a valid block ID between 1 and 9.");
  }
});

resetButton.addEventListener("click", () => {
  // Clear colors
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => item.style.backgroundColor = "transparent");
});
