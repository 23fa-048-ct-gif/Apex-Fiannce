document.addEventListener("DOMContentLoaded", function() {
    displayEmployeeReport();
});

function displayEmployeeReport() {
    const reportContainer = document.getElementById("employeeReport");
    reportContainer.innerHTML = ""; // Clear existing report

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    if (employees.length === 0) {
        reportContainer.innerHTML = "<p>No employees to display.</p>";
        return;
    }

    // Calculate statistics
    const totalEmployees = employees.length;
    const maleEmployees = employees.filter(emp => emp.gender === 'male').length;
    const femaleEmployees = employees.filter(emp => emp.gender === 'female').length;
    const totalSalary = employees.reduce((sum, emp) => sum + parseFloat(emp.salary || 0), 0);
    const averageSalary = totalEmployees > 0 ? (totalSalary / totalEmployees).toFixed(2) : 0;

    const statsHtml = `
        <div class="stats-grid">
            <div class="stat-card">
                <h3>Total Employees</h3>
                <p>${totalEmployees}</p>
            </div>
            <div class="stat-card">
                <h3>Male Employees</h3>
                <p>${maleEmployees}</p>
            </div>
            <div class="stat-card">
                <h3>Female Employees</h3>
                <p>${femaleEmployees}</p>
            </div>
            <div class="stat-card">
                <h3>Average Salary</h3>
                <p>$${averageSalary}</p>
            </div>
        </div>
    `;
    reportContainer.innerHTML += statsHtml;

    // Create table for employee details
    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Photo/Icon</th>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Salary</th>
                <th>Gender</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    const tbody = table.querySelector("tbody");

    employees.forEach(employee => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${employee.image || 'images/default_user.png'}" alt="${employee.name}" class="employee-image"></td>
            <td>${employee.name}</td>
            <td>${employee.id}</td>
            <td>$${employee.salary}</td>
            <td>${employee.gender}</td>
            <td>${employee.department}</td>
        `;
        tbody.appendChild(row);
    });

    reportContainer.appendChild(table);
}

function goBack() {
    window.location.href = "index.html"; // Redirect to new main page
}