
// Write function to add affirmations to list in HTML table
// function addAffirmation(event) {

//     // Stop default behavior of refreshing the page when there's a button elem inside a form element
//     event.preventDefault();
  
//     // Get the inputs and table
//     const affirmation = document.querySelector("#affirmationInput").value;
//     const author = document.querySelector("#authorInput").value;
//     let tableBody = document.querySelector("#affirmationList tbody");

//use event because some one is activating the event
function addEmployee(event){
    // Stop default behavior of refreshing the page when there's a button elem inside a form element
  event.preventDefault();
    // need to create five variables to take in the data for the employee
    //document accesses the html. get elementById will grab that specific Id 
    let firstName=document.querySelector("#firstNameInput").value;
    let lastName=document.querySelector("#lastNameInput");
    let employeeId=document.querySelector("#idInput");
    let title=document.querySelector("#titleInput");
    let annualSalary=document.querySelector("#annualSalaryInput");
    let tableBody=document.getElementById("#employees tbody");

//This is template for adding employee
tableBody.innerHTML +=`
<tr>
    <td>
     ${firstName}
    </td>
    <td>
    ${lastName}
    </td>
    <td>
    </td>
<tr>
`;
}

// tableBody.innerHTML += `
//     <tr>
//       <td>
//         ${affirmation}
//       </td>
//       <td>
//         ${author}
//       </td>
//       <td>
//         <button onClick="deleteAffirmation(event)">Delete</button>
//       </td>
//     </tr>
