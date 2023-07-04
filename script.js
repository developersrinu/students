const students = [
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' }
];

let editingStudentId = null;

// Initialize the student management system
function initialize() {
    displayStudents();
    const form = document.getElementById('student-form');
    form.addEventListener('submit', handleFormSubmit);
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('input', handleSearch);
}

// Display the list of students
function displayStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    students.forEach((student) => {
        const row = document.createElement('tr');
        const idCell = createTableCell(student.ID);
        const nameCell = createTableCell(student.name);
        const ageCell = createTableCell(student.age);
        const gradeCell = createTableCell(student.grade);
        const degreeCell = createTableCell(student.degree);
        const emailCell = createTableCell(student.email);
        const actionsCell = createActionsCell(student.ID);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(gradeCell);
        row.appendChild(degreeCell);
        row.appendChild(emailCell);
        row.appendChild(actionsCell);

        studentList.appendChild(row);
    });
}

// Create a table cell with given content
function createTableCell(content) {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}

// Create the actions cell with edit and delete buttons
function createActionsCell(studentId) {
    const actionsCell = document.createElement('td');

    // Edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<img src="./images/edit.png" alt="Edit" />';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
        editStudent(studentId);
    });
    actionsCell.appendChild(editButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<img src="./images/delet.png" alt="Delete" />';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        deleteStudent(studentId);
    });
    actionsCell.appendChild(deleteButton);

    return actionsCell;
}



// Handle form submission (Add/Edit Student)
function handleFormSubmit(event) {
    event.preventDefault();

    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    const studentAge = document.getElementById('student-age').value;
    const studentGrade = document.getElementById('student-grade').value;
    const studentDegree = document.getElementById('student-degree').value;
    const studentEmail = document.getElementById('student-email').value;

    if (editingStudentId) {
        // Editing existing student
        const studentIndex = students.findIndex((student) => student.ID === editingStudentId);

        if (studentIndex !== -1) {
            students[studentIndex] = {
                ID: editingStudentId,
                name: studentName,
                age: studentAge,
                grade: studentGrade,
                degree: studentDegree,
                email: studentEmail
            };
            editingStudentId = null;
        }
    } else {
        // Adding new student
        const newStudent = {
            ID: students.length + 1,
            name: studentName,
            age: studentAge,
            grade: studentGrade,
            degree: studentDegree,
            email: studentEmail
        };
        students.push(newStudent);
    }

    clearForm();
    displayStudents();
    document.getElementById('add-btn').textContent = 'Add Student';
    editingStudentId = null;
}

// Clear the form inputs
function clearForm() {
    document.getElementById('student-id').value = '';
    document.getElementById('student-name').value = '';
    document.getElementById('student-age').value = '';
    document.getElementById('student-grade').value = '';
    document.getElementById('student-degree').value = '';
    document.getElementById('student-email').value = '';
    document.getElementById('add-btn').textContent = 'Add Student';
}

// Edit a student profile
function editStudent(studentId) {
    const student = students.find((student) => student.ID === studentId);

    if (student) {
        document.getElementById('student-id').value = student.ID;
        document.getElementById('student-name').value = student.name;
        document.getElementById('student-age').value = student.age;
        document.getElementById('student-grade').value = student.grade;
        document.getElementById('student-degree').value = student.degree;
        document.getElementById('student-email').value = student.email;
        document.getElementById('add-btn').textContent = 'Edit Student';
        editingStudentId = student.ID;
    }
}

// Delete a student profile
function deleteStudent(studentId) {
    const confirmDelete = confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
        const studentIndex = students.findIndex((student) => student.ID === studentId);
        if (studentIndex !== -1) {
            students.splice(studentIndex, 1);
            displayStudents();
        }
    }
}

// Handle search
function handleSearch() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchQuery) ||
        student.email.toLowerCase().includes(searchQuery) ||
        student.degree.toLowerCase().includes(searchQuery)
    );
    displayFilteredStudents(filteredStudents);
}

// Display the filtered list of students
function displayFilteredStudents(filteredStudents) {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    filteredStudents.forEach((student) => {
        const row = document.createElement('tr');
        const idCell = createTableCell(student.ID);
        const nameCell = createTableCell(student.name);
        const ageCell = createTableCell(student.age);
        const gradeCell = createTableCell(student.grade);
        const degreeCell = createTableCell(student.degree);
        const emailCell = createTableCell(student.email);
        const actionsCell = createActionsCell(student.ID);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(gradeCell);
        row.appendChild(degreeCell);
        row.appendChild(emailCell);
        row.appendChild(actionsCell);

        studentList.appendChild(row);
    });
}

// Initialize the student management system
initialize();

// Display the list of students
function displayStudents() {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';

    // Create table headings
    const headingsRow = document.createElement('tr');
    const idHeading = createTableHeading('ID');
    const nameHeading = createTableHeading('Name');
    const ageHeading = createTableHeading('Age');
    const gradeHeading = createTableHeading('Grade');
    const degreeHeading = createTableHeading('Degree');
    const emailHeading = createTableHeading('Email');
    const actionsHeading = createTableHeading('Actions');

    headingsRow.appendChild(idHeading);
    headingsRow.appendChild(nameHeading);
    headingsRow.appendChild(ageHeading);
    headingsRow.appendChild(gradeHeading);
    headingsRow.appendChild(degreeHeading);
    headingsRow.appendChild(emailHeading);
    headingsRow.appendChild(actionsHeading);

    studentList.appendChild(headingsRow);

    students.forEach((student) => {
        const row = document.createElement('tr');
        const idCell = createTableCell(student.ID);
        const nameCell = createTableCell(student.name);
        const ageCell = createTableCell(student.age);
        const gradeCell = createTableCell(student.grade);
        const degreeCell = createTableCell(student.degree);
        const emailCell = createTableCell(student.email);
        const actionsCell = createActionsCell(student.ID);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(gradeCell);
        row.appendChild(degreeCell);
        row.appendChild(emailCell);
        row.appendChild(actionsCell);

        studentList.appendChild(row);
    });
}

// Create a table heading with given content
function createTableHeading(content) {
    const heading = document.createElement('th');
    heading.textContent = content;
    return heading;
}

