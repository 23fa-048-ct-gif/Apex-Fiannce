# Employee Management System

A web-based Employee Management Application that allows managing employee records, tracking statistics, and viewing dashboards.

## Features
- **Add New Employees:** Form interface to submit employee details including Name, ID, Salary, Gender, Department, and Photo/Icon.
- **Dashboard Overview:** Displays total counts, gender distribution, average salary metrics, and a dynamic employee table.
- **Data Persistence:** Supports browser Local Storage for client-side persistence and SQL Server/PHP backend for server-side persistence.

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend:** PHP (MSSQL driver / SQL Server connection)
- **Database:** Microsoft SQL Server (`EmployeeDB`)

## File Structure
- `add-employee.html` / `add-employee.css` / `add-employee.js`: Employee addition page and logic.
- `dashboard.html` / `dashboard.css` / `dashboard.js`: Dashboard reporting interface.
- `database.php`: PHP script for SQL Server database connectivity.
- `employees.json`: Mock/initial data file for employee records.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <YOUR-GITHUB-REPOSITORY-URL>