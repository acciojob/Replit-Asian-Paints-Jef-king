// script.js
const gridContainer = document.getElementById('grid-container');

// Create grid items (cells) and assign IDs
for (let i = 1; i <= 9; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.id = `${i}`;
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem);
}

// Handle color change on button click
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');

changeButton.addEventListener('click', () => {
    const blockId = blockIdInput.value;
    const color = colorInput.value;
    const targetGridItem = document.getElementById(`grid-item-${blockId}`);
    targetGridItem.style.backgroundColor = color;
    resetOtherGridItems(targetGridItem);
});

// Reset other grid items to transparent
function resetOtherGridItems(selectedItem) {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        if (item !== selectedItem) {
            item.style.backgroundColor = 'transparent';
        }
    });
}
