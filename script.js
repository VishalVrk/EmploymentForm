// const  = document.querySelector("#employement-form");
const employementForm = document.querySelector("#employement-form");
employementForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = employementForm["firstname"].value;
  alert(firstname);
});
