const checklistItems = document.querySelectorAll('#checklist li');

checklistItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const deleteButton = item.querySelector('.delete-btn');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
        item.classList.add('completato');
        checkbox.nextElementSibling.textContent += " (completato)";
        } else {
            item.classList.remove('completato');

    checkbox.nextElementSibling.textContent = 
    checkbox.nextElementSibling.textContent.replace(" (completato)", "");
        }
    });

    deleteButton.addEventListener('click', () => item.remove());
});

