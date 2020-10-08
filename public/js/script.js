var config = {
  apiKey: "AIzaSyCx3ooMujC1cVIy4dou6h3XWeaothhJbPA",
  authDomain: "employment-form-6c9f3.firebaseapp.com",
  databaseURL: "https://employment-form-6c9f3.firebaseio.com",
  projectId: "employment-form-6c9f3",
  storageBucket: "employment-form-6c9f3.appspot.com",
  messagingSenderId: "1030878748882",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("Details");

const employementForm = document.querySelector("#employement-form");
employementForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var postion = checkPos();
  var firstName = employementForm["firstname"].value;
  var middlename = employementForm["middlename"].value;
  var lastname = employementForm["lastname"].value;
  var street = employementForm["street"].value;
  var state = employementForm["state"].value;
  var city = employementForm["city"].value;
  var pin = employementForm["pin"].value;
  var phonenumber = employementForm["phonenumber"].value;
  var emailid = employementForm["emailid"].value;
  var dob = employementForm["dob"].value;
  var securitynumer = employementForm["securitynumer"].value;
  var citizenship = radioCitizen();
  var workpermit = radioWorkpermit();
  var application = radioApplication();
  var worked = radioworked();
  var employmentdesired = radioemploymentdesired();
  var available = radioavailable();
  //   var shifts =
  var travel = radiotravel();
  console.log(
    postion,
    firstName,
    middlename,
    lastname,
    street,
    state,
    city,
    pin,
    phonenumber,
    emailid,
    dob,
    securitynumer,
    citizenship,
    workpermit,
    application,
    worked,
    employmentdesired,
    available
  );
  function radioCitizen() {
    var citizenship = document.querySelector("input[name=citizenship]:checked")
      .value;
    return citizenship;
  }
  function radioWorkpermit() {
    var workpermit = document.querySelector("input[name=workpermit]:checked")
      .value;
    return workpermit;
  }
  function radioApplication() {
    var application = document.querySelector("input[name=application]:checked")
      .value;
    return application;
  }
  function radioworked() {
    var worked = document.querySelector("input[name=worked]:checked").value;
    return worked;
  }
  function radioemploymentdesired() {
    var employmentdesired = document.querySelector(
      "input[name=employmentdesired]:checked"
    ).value;
    return employmentdesired;
  }
  function radioavailable() {
    var available = document.querySelector("input[name=available]:checked")
      .value;
    return available;
  }
  function radiotravel() {
    var travel = document.querySelector("input[name=travel]:checked").value;
    return travel;
  }

  function checkPos() {
    var checkedValue = [];
    var inputElements = document.getElementsByClassName("position");
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
        //   break;
      }
    }
    return checkedValue;
  }
  function saveMessage(
    FirstName,
    MiddleName,
    LastName,
    Street,
    City,
    State,
    Pin,
    Phonenumber,
    Mailid,
    socialsecuritynumber,
    Citizen,
    BelowAge,
    PreviousFill,
    EmploymentDesierd,
    StartingDate,
    travel,
    DriversLicense,
    felony,
    typeofschool,
    nameofschool,
    location,
    noofyearscompletd,
    majordegree,
    computerskill,
    otherskill,
    employee,
    address,
    position,
    finalpay,
    supervisor,
    reasonforleaving,
    workperformed,
    referencename,
    sex,
    data
  ) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      FirstName: FirstName,
      MiddleName: MiddleName,
      LastName: LastName,
      Street: Street,
      City: City,
      State: State,
      Pin: Pin,
      Phonenumber: Phonenumber,
      Mailid: Mailid,
      socialsecuritynumber: socialsecuritynumber,
      Citizen: Citizen,
      BelowAge: BelowAge,
      PreviousFill: PreviousFill,
      EmploymentDesierd: EmploymentDesierd,
      StartingDate: StartingDate,
      travel: travel,
      DriversLicense: DriversLicense,
      felony: felony,
      typeofschool: typeofschool,
      nameofschool: nameofschool,
      location: location,
      noofyearscompletd: noofyearscompletd,
      majordegree: majordegree,
      computerskill: computerskill,
      otherskill: otherskill,
      employee: employee,
      address: address,
      position: position,
      finalpay: finalpay,
      supervisor: supervisor,
      reasonforleaving: reasonforleaving,
      workperformed: workperformed,
      referencename: referencename,
      sex: sex,
      data: data,
    });
  }
});
