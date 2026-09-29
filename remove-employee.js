document.addEventListener("DOMContentLoaded", function() {
    displayEmployeesForRemoval();
});

function displayEmployeesForRemoval() {
    const employeeList = document.getElementById("employeeListForRemoval");
    employeeList.innerHTML = ""; // Clear existing list

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    if (employees.length === 0) {
        employeeList.innerHTML = "<p>No employees to display.</p>";
        return;
    }

    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee-item");
        employeeDiv.innerHTML = `
            <span>Name: ${employee.name} (ID: ${employee.id})</span>
            <button onclick="removeEmployee(${index})">Remove</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function removeEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    if (index > -1 && index < employees.length) {
        employees.splice(index, 1); // Remove the employee at the specified index
        localStorage.setItem("employees", JSON.stringify(employees));
        alert("Employee Removed Successfully!");
        displayEmployeesForRemoval(); // Refresh the list
    }
}

function goBack() {
    window.location.href = "index.html"; // Redirect to new main page
}