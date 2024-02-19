document.getElementById('expense-form').addEventListener('submit', addExpense);

function addExpense(e) {
    e.preventDefault();

    const expense = document.getElementById('expense').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    if (expense === '' || amount === '' || category === '') {
        alert('Please fill in all fields');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${expense}</strong>: $${amount} (${category})
        <button class="delete">Delete</button>
    `;
    
    document.getElementById('expense-list').appendChild(listItem);

    // Clear fields
    document.getElementById('expense').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';

    // Attach event listener for delete button
    listItem.querySelector('.delete').addEventListener('click', deleteExpense);
}

function deleteExpense() {
    const listItem = this.parentNode;
    document.getElementById('expense-list').removeChild(listItem);
}
