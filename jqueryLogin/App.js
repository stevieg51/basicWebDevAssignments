var nPattern = /[0-9]/;
var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  if (!nameValidation() || !lastNameValidation() || !userNameValidation() || !pWordValidation()) {
    e.preventDefault();
  }  
  if (nameValidation() && lastNameValidation() && userNameValidation() && pWordValidation()) {
    form.removeEventListener("submit", e);
};
});


function nameValidation() {
  var fName = document.getElementById("FirstName").value;

  if (fName.length >= 15) {
    alert("Name must be less than 15 characters");
    return false;
  } else if (nPattern.test(fName) || specialChar.test(fName)) {
    alert("Names Must Contain Only Text");
    return false;
  }
  return true;
}

function lastNameValidation() {
  var lName = document.getElementById("LastName").value;

  if (lName.length >= 15) {
    alert("Name must be less than 15 Characters");
    return false;
  }
  if (lName.length >= 15) {
    alert("Name must be less than 15 characters");
    return false;
  } else if (nPattern.test(lName) || specialChar.test(lName)) {
    alert("Names Must Contain Only Text");
    return false;
  }
  return true;
}

function userNameValidation() {
  var usrName = document.getElementById("Username").value;
  var ln = usrName.length;
  if (ln < 4 || ln > 12) {
    alert("UserName Must be within 4-12 Characters Long");
    return false;
  }
  return true;
}

function pWordValidation() {
  var pWord = document.getElementById("Password").value;
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  if (pWord.length < 8 || !passw.test(pWord)) {
    alert("Password Must Be At Least 8 Characters Long and Contain 1 upper/lower case letter and 1 number");
    return false;
  }
  return true;
}
