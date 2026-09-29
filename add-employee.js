document.getElementById("addEmployeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const employeeName = document.getElementById("employeeName").value;
    const employeeId = document.getElementById("employeeId").value;
    const salary = document.getElementById("salary").value;
    const gender = document.getElementById("gender").value;
    const department = document.getElementById("department").value;
    const image = document.getElementById("employeeImage").value;

    if (!image) {
        alert("Please select an image before adding the employee.");
        return;
    }

    // Retrieve existing employees from Local Storage
    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Add new employee
    employees.push({
        name: employeeName,
        id: employeeId,
        salary: salary,
        gender: gender,
        department: department,
        image: image
    });

    // Save updated employees back to Local Storage
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee Added Successfully!");

    setTimeout(() => {
        window.location.href = "index.html"; // Redirect to new main page
    }, 1000);
});

function openImageSelector() {
    window.open("image-selection.html", "Select Image", "width=400,height=300");
}

function goBack() {
    window.location.href = "index.html"; // Redirect to new main page
}