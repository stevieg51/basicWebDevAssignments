$(function () {
      
    $("#daisy").draggable();

    $.validator.addMethod("nameValidation", function nameValidation(value) {
        var nPattern = /[0-9]/;
        var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (value.length >= 15) {
          return false;
        } else if (nPattern.test(value) || specialChar.test(value)) {
            return false;
          }
        return true;
      });
    $.validator.addMethod("lastNameVal", function lastNameValidation(value) { 
        var nPattern = /[0-9]/;
        var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (value.length >= 15) {
          return false;
        } else if (nPattern.test(value) || specialChar.test(value)) {
          return false;
        }
        return true;
      });
    $.validator.addMethod("userNameVal", function userNameValidation(value) {
        if (value.length < 4 || value.length > 12) {
          return false;
        }
        return true;
      });
    $.validator.addMethod("pWordValidation", function pWordValidation(value) {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        if (value.length < 8 || !passw.test(value)) {
          return false;
        }
        return true;
      } );
  $("#class-form").validate({
    rules: {
      FirstName: {
        required: true,
        nameValidation: true
      },
      LastName: {
        required: true,
        lastNameVal: true
      },
      Password: {
        required: true,
        pWordValidation: true
      },
      Username: {
        required: true,
        userNameVal: true
      }
    },
    messages:{
        FirstName: {
            required: "Please Enter A Name",
            nameValidation: "The name must be only text and no more than 15 characters."
        }, 
        LastName: {
            required: "Please Enter A Name",
            lastNameVal: "The name must be only text and no more than 15 characters."
        },
        Password: {
            required: "Please Enter A Password",
            pWordValidation: "Password Must Be At Least 8 Characters Long and Contain 1 upper/lower case letter and 1 number"
        },
        Username: {
            required: "Please Enter A userName",
            userNameVal: "UserName Must be within 4-12 Characters Long"
        }
    }
  });
});
