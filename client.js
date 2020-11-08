$(document).ready(readyNow);

let employeeInfo = []; // empty array for storing employee information
let firstName = ''; // empty values for employee object
let lastName = '';
let employeeID = '';
let jobTitle = '';
let annualSalary = '';
 // new variable for calculating monthly salary cost

function readyNow() {
    $('#btn-add').on('click', addEmployee);
    $(document).on('click', '#btn-remove', removeEmployee);
}
// I had this whole function set up pretty differently at first. Steven Maloney helped me realize
// that the way I had it was kind of trapping all of my values inside of the function
// and then I couldn't use them, so I had to refactor it a bit and make another function to actually
// get the information on the DOM in a usable way.
function addEmployee(event) {
    event.preventDefault(); // prevents refresh on click
    firstName = $('#first-name').val(); // grabbing values from input fields
    lastName = $('#last-name').val();
    employeeID = $('#employee-id-number').val();
    jobTitle = $('#job-title').val();
    annualSalary = $('#annual-salary').val();
    let employee = { // creates new object for each employee with above values
        firstName,
        lastName,
        employeeID,
        jobTitle,
        annualSalary
    };
    employeeInfo.push(employee); // pushes new object to the array
    $('#first-name').val(''); // empties inputs
    $('#last-name').val('');
    $('#employee-id-number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');
    $('#employee-list').empty(); // I had to call this here to avoid posting the same information twice
    $('#monthly-cost').empty();
    calculateMonthly(employee);
    postEmployeeInfo(employee); // calling function to post employee information to the DOM
}

function postEmployeeInfo(employee) {
    $('#employee-list').append( // table header
        `<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Employee ID</th>
        <th>Job Title</th>
        <th>Annual Salary</th>
        <th>Remove Employee</th>
        </tr>`); // appending the head of the table
    for (let emp of employeeInfo) { // this for loop is grabbing the values from the above function
        $('#employee-list').append( // and then adding them onto the DOM in the table format.
            `<tr>
            <td>${emp.firstName}</td>
            <td>${emp.lastName}</td>
            <td>${emp.employeeID}</td>
            <td>${emp.jobTitle}</td>
            <td>${emp.annualSalary}</td>
            <td><button id="btn-remove">Remove Employee</button></td>
            </tr>`);
    }
    $('#employee-list').append(`<tr></tr>`); // adds bottom row to the table for looks
    
}

function calculateMonthly (employee) {
    let totalSalaries = 0; // I had to put this empty variable inside this function to get it to work how I wanted.
    // I originally had it at the top along with my other global variables, but I ran into issues when trying to post
    // this info to the DOM. It was like doubling the value when it shouldn't have. I understand that this is a scoping issue, but I 
    // guess I don't quite understand why it was happening.
    for (let emp of employeeInfo) {
        totalSalaries += emp.annualSalary/12;
    }
    $('#monthly-cost').append(totalSalaries.toFixed(2));
    if (totalSalaries > 20000) {
        $('#monthly-cost').toggleClass('red', true);
    }
}

function removeEmployee () { // removeEmployee function is connected to the button being generated in my Table.
    console.log('in remove button');
}