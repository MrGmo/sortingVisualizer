const container = document.querySelector(".data-container");

document.getElementById('newArray').addEventListener('click', generateBlocks)


function generateBlocks() {
  for (let i = 0; i <= 62; i++) {
    const value = Math.floor(Math.random() * 100);

    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${value * 6}px`;
    block.style.transform = `translateX(${i * 22}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("blockId");
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    container.appendChild(block);
  }
}
generateBlocks();







