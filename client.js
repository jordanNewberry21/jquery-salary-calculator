$(document).ready(readyNow);

function readyNow() {
    $('#btn-add').on('click', addEmployee)
}

function addEmployee(event) {
    event.preventDefault();
    console.log('Adding Employee');
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeID = $('#employee-id-number').val();
    let jobTitle = $('#job-title').val();
    let annualSalary = $('#annual-salary').val();
    $('#first-name').val('');
    $('#last-name').val('');
    $('#employee-id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');

    $('#employee-list').append(`<tr><td>${firstName}</td><td>${lastName}</td><td>${employeeID}</td><td>${jobTitle}</td><td>${annualSalary}</td></tr>`);
}