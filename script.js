

//use event because some one is activating the event
function addEmployee(event){
    // Stop default behavior of refreshing the page when there's a button elem inside a form element
  event.preventDefault();
    // need to create five variables to take in the data for the employee
    //document accesses the html. get elementById will grab that specific Id 
    let firstName=document.getElementById("firstNameInput").value;
    let lastName=document.getElementById("lastNameInput").value;
    let employeeId=document.getElementById("idInput").value;
    let title=document.getElementById("titleInput").value;
    let annualSalary=document.getElementById("annualSalaryInput").value;
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
    ${annualSalary}
    </td>
<tr>
`;
}
