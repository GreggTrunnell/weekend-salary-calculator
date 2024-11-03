

//use event because some one is activating the event
function addEmployee(event){
    // Stop default behavior of refreshing the page when there's a button elem inside a form element
  event.preventDefault();
    // need to create five variables to take in the data for the employee
    //document accesses the html. get elementById will grab that specific Id 
  //?Had trouble with some syntax here. the .getElementById I thought would need a # in front of Labels
  //? I kept getting null so I knew I was close to getting them to the dom.
    let firstName=document.querySelector("#firstNameInput").value;
    let lastName=document.querySelector("#lastNameInput").value;
    let employeeId=document.querySelector("#idInput").value;
    let title=document.querySelector("#titleInput").value;
    let annualSalary=document.querySelector("#annualSalaryInput").value;
  //changed to querySelector to try and remeber how quesel and getElemid work  
    let tableBody=document.querySelector("#employees tbody");

//This is template for adding employee
  tableBody.innerHTML += `
<tr>
    <td>
    ${firstName}
    </td>
    <td>
    ${lastName}
    </td>
    <td>
    ${employeeId}
    </td>
    <td>
    ${title}
    </td>
    <td>
    $${annualSalary}
    </td>
    <td>
    <button onClick="deleteEmployee(event)" id="deleteButton">Delete</button>
    </td>
<tr>
`;
document.getElementById("employeeForm").reset();

//when adding the new salary input it will need to access the element that was 
//"pushed" into html tbody
console.log(annualSalary)

//Code for accessing css using js for over-budget
//!(will need to be calculated by month)
//if statement to check if monthly budget is over 20000
//need a variable to retrieve the annualSalary element
let totalSalary= document.querySelector("#annualSalary")
if (annualSalary>20000){
  totalSalary.classList.remove("over-budget");}
    else {
      totalSalary.classList.add("over-budget")
    }
}//end of addEmployee function

//delete will be an action that someone activates so we need event
function deleteEmployee(event){
    //will need to use .target to target an element that was added to dom when calling addEmployee
    event.target.parentNode.parentNode.remove();
}//end of deleteEmployee function





