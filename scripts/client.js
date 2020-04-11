console.log('js');

$(document).ready(readyCalculator)
let employees=[];
    
function readyCalculator () {
    console.log('jQ')
    $('#submitEmpBtn').on('click', addEmployee)
    // $('.deleteButton').on('click', deleteEmpBtn)
};

//submit button append employee to dom
function addEmployee(){
    //get user input & place in an object
    //push object in employees array
    let empToAdd = {
        empFirst: $( '#firstNameInput' ).val(),
        empLast: $( '#lastNameInput' ).val(),
        empId: $( '#idInput' ).val(),
        empTitle: $( '#titleInput' ).val(),
        empSalary: $( '#salaryInput' ).val(),
    }// end empToAdd

    //TEST
    // console.log('in employee add', empToAdd);

    //push employee to array
    employees.push(empToAdd);
    displayEmpTable();

    //TEST
    // console.log('employees:', employees)
    
    //empty input values after pushing into addEmployee
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idInput' ).val( '' );
    $( '#titleInput' ).val( '' );
    $( '#salaryInput' ).val( '' );
  }//end addEmployee

  function displayEmpTable(){
   console.log( 'in displayEmpTable', employees );
    // target output ul by ID
    let el = $( '#tableBody' );
    // empty ul
    el.empty();
    // loop through employees
    for( let i=0; i<employees.length; i++){
        // append each item to ul
        el.append(
            `<tr>
            <td>${ employees[ i ].empFirst }</td>
            <td>${ employees[ i ].empLast }</td>
            <td>${ employees[ i ].empId}</td>
            <td>${ employees[ i ].empTitle}</td>
            <td>${ employees[ i ].empSalary}</td>
            <td> <button class="deleteButton">Delete</button> </td>
            </tr>`
        ) //end append
    } // end employee for loop
    // delete button
    $('.deleteButton').on('click', deleteEmpBtn)
}; // displayInventory

function deleteEmpBtn() {
    console.log('in delete button')
    // let el = 
}; // end deleteEmpBtn
