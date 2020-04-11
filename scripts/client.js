console.log('js');

$(document).ready(readyCalculator)
let employees=[];
    
function readyCalculator () {
    console.log('jQ')
    $('#submitEmpBtn').on('click', addEmployee)
};

//submit button append employee to dom
function addEmployee(){
    //target input elements by ID
    //get value of text input
    let empFirst = $( '#firstNameInput' ).val();
    let empLast = $( '#lastNameInput' ).val();
    let empId = $( '#idInput' ).val();
    let empTitle = $( '#titleInput' ).val()
    let empSalary = $( '#salaryInput' ).val()
    console.log(empFirst, empLast, empId, empTitle, empSalary);
    
    //empty input values after pushing into addEmployee
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#titleInput' ).val( '' );
    $( '#salaryInput' ).val( '' );
    $( '#modelInput' ).val( '' );
  }//end addEmployee
