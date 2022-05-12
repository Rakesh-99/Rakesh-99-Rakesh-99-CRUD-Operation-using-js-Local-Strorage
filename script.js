alert("I welcome you to my To Do App !");


let input = document.getElementById("input");
let errormsg = document.getElementById("error");
const formSubmit = document.getElementById("form");
let posts = document.getElementById("posts");





formSubmit.addEventListener("submit", (obj) => {
    obj.preventDefault();
    formValidate();
});





//Function for validating the form if it is blanck or not 

let formValidate = () => {
    if (input.value === "") {
        errormsg.innerHTML = "Input filed is blancked ! *"
        console.log("failure state");
    } else {
      errormsg.innerHTML = "";
      console.log("success state");
      getInput(); //calling getInput method. It will fire when user clicks on submit
      displayData(); //calling displayData method. It will fire when user clicks on submit
    }
};

// Function for collecting the input 

let collect = {};

let getInput = () => {
    collect["text"] = input.value;
    console.log(collect);
};





//Function for displayimg the data : -

let displayData = () => {
    posts.innerHTML += `
      <div>
        <p>${collect.text}</p>
        <span class="option">
          <i onclick = "editPost(this)" class="bi bi-pencil-square"></i>
          <i class="bi bi-trash3" onclick = "deletion(this)" ></i>
        </span>
      </div>
    `;
    input.value = ""; //Resseting the form after posting stuffs
}



// Function for post deletion : - 


let deletion = (f) => {
  f.parentElement.parentElement.remove();
}



// Function for editing the post : -

let editPost = (s) => {
  
  console.log("hitting edit button !");
  input.value = s.parentElement.previousElementSibling.innerHTML;
  s.parentElement.parentElement.remove();
 
}