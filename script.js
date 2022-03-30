var userName = document.getElementById("userName");
var submitFeedbackButton = document.getElementById("submit-feedback");
var date = document.getElementById("date-section");
var feedbackTitle = document.getElementById("feedback-title");
var feedbackText = document.getElementById("message-box");
var genderMale = document.getElementById("gender-male");
var genderFemale = document.getElementById("gender-female");
var formCheckedInputs = document.getElementsByClassName("checkbox");
var categories = [];
var showMoreButton = document.getElementById("show-more");

submitFeedbackButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Name: ", userName.value);
  console.log("Date: ", date.value);
  console.log("Feedback title: ", feedbackTitle.value);
  console.log("Feedback text: ", feedbackText.value);
  if (genderFemale.checked) {
    console.log("Gender: Female");
  } else {
    console.log("Gender: Male");
  }
  for (let i = 0; i < formCheckedInputs.length; i++) {
    if (formCheckedInputs[i].checked)
      categories.push(formCheckedInputs[i].value);
  }
  console.log("Categories: ", categories);
});

const api_url = "https://jsonplaceholder.typicode.com/users";
// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}
function show(data) {
  let tab = `<tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
           </tr>`;

  // Loop to access all rows
  for (let i = 0; i < 10; i++) {
    tab += `<tr>
      <td>${data[i].name} </td>
      <td>${data[i].email}</td>
      <td>${data[i].username}</td>
      <td>${data[i].phone}</td>
  </tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("employees").innerHTML = tab;
  document.getElementById("employees").style.padding = "20px";
}
