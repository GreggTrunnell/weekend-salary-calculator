
let totalMonthly=0;

//use event because some one is activating the event
function addEmployee(event){
    // Stop default behavior of refreshing the page when there's a button elem inside a form element
  //!prevent defualt isn't needed unless in <form>
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

    // //this is a way to console.log all the selectors
    // let tempArrayInputs =[firstName, lastName, employeeId];
    // console.log(tempArrayInputs);

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


totalMonthly+=annualSalary /12;
let monthlyBudget = document.querySelector("#totalMonthly");
monthlyBudget.textContent+=`
$${totalMonthly}
`;

//document.querySelector("footer p") takes value from footer's p's element
let totalMonthlyBudget=document.querySelector("footer p")
//document.querySelector("footer p").textContent will take the value stored and add the
//incoming total monthly
document.querySelector("footer p").textContent = "Total Monthley Budget: $"+totalMonthly.toFixed(2);

totalMonthlyBudget;

//if else statement to call over-budget
if (totalMonthly > 20000) {
const footer=document.querySelector('footer')
footer.classList.add("over-budget")

}
document.getElementById("employeeForm").reset();
}//*end of addEmployee function


      //delete will be an action that someone activates so we need event
function deleteEmployee(event){
    //will need to use .target to target an element that was added to dom when calling addEmployee
    event.target.parentNode.parentNode.remove();
}//*end of deleteEmployee function

// if (totalMonthlyBudget  > 20000){
//   foooter.classList.add("over-budget");  
//   }  else { foooter.classList.remove("over-budget")
// }

//  if ("#totalMonthly">20000){
//   totalMonthlyBudget.classList.add(".over-budget");  
//  } else { 
//   totalMonthlyBudget.classList.remove(".over-budget")
//      }
 
//



