
window.onsubmit = validateForm;

function validateForm() {   
    var phone1 = document.getElementById("phoneFirstPart").value;
    var phone2 = document.getElementById("phoneSecondPart").value;
    var phone3 = document.getElementById("phoneThirdPart").value;
    var highBloodPressure = document.getElementById("highBloodPressure");
    var diabetes = document.getElementById("diabetes");
    var glaucoma = document.getElementById("glaucoma");
    var asthma = document.getElementById("asthma");
    var none = document.getElementById("none");
    var period = document.getElementsByName("period");
    var id1 = document.getElementById("firstFourDigits").value;
    var id2 = document.getElementById("secondFourDigits").value;
    var timePeriodFlag = false;
    var idx, timePeriodInvalid = "";
    var conditionInvalid = "";
    var conditionCheck = 0;
    var errorMessage = "";
    var integerArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    if ((phone1.length !== 3) || (String(parseInt(phone1)) !== phone1)) {
        errorMessage += "Invalid phone number provided.\n";
    }
    else if ((phone2.length !== 3) || (String(parseInt(phone2)) !== phone2)) {
        errorMessage += "Invalid phone number provided.\n";
    }
    else if ((phone3.length !== 4) || (String(parseInt(phone3)) !== phone3)) {
        errorMessage += "Invalid phone number provided.\n";
    }
        
    if (none.checked) {
        conditionCheck += 1
    }
    
    if (highBloodPressure.checked || 
        diabetes.checked || 
        glaucoma.checked || 
        asthma.checked) {
            conditionCheck += 1
        }
        
    if (conditionCheck === 0) {
        errorMessage += "no condition checked.\n"
    }

    if (conditionCheck === 2) {
        errorMessage += "invalid conditions selected.\n"
    }
        
    for (idx = 0; idx < period.length; idx++) {
            if (period[idx].checked) {
                timePeriodFlag = true;
            }
        }

    if (timePeriodFlag === false) {
        errorMessage += "no time period selected.\n";
        }
    
        if (id1.length !== 4 || id2.length !== 4) {
            errorMessage += "invalid study id.\n";
        }
        
        else if (id1[0] !== "A" || id2[0] !== "B") {
            errorMessage += "invalid study id.\n";
        }

        else if (!(integerArray.includes(id1[1])) || !(integerArray.includes(id2[1]))) {
            errorMessage += "invalid study id.\n";
        }

        else if (!(integerArray.includes(id1[2])) || !(integerArray.includes(id2[2]))) {
            errorMessage += "invalid study id.\n";
        }

        else if (!(integerArray.includes(id1[3])) || !(integerArray.includes(id2[3]))) {
            errorMessage += "invalid study id.\n";
        }

    if (errorMessage !== "") {
        alert(errorMessage);
        return false
    } else {

   return (window.confirm("Submit Form?"))
}
}