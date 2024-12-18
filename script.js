//Generate Prefix//
function genPrefix(firstName) {
    return (firstName.length > 5 || firstName.length <= 5) ? "The Great" : "Master";
}

//generate first name//
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    switch (firstLetter) {
        case "a":
            return "Jeff";
        case "b":
            return "Pablo";
        default:
            return "Julian";
    }
}
//Generate middle name//
function genMiddleName(roadType, favoriteColor) {
    if (roadType === "road") {
        return `${favoriteColor}ridge`; //Ex: BlueRidge
    } else if (roadType === "street") {
        return `${favoriteColor}son`; // Ex: Redson
    } else if (roadType === "circle") {
        return `${favoriteColor}land`; // Ex: Orangeland
    } else if (roadType === "court") {
        return `${favoriteColor}tide`; // Ex: Bluetide
    } else if (roadType === "drive") {
        return `${favoriteColor}hawk`; // Ex: Crimsonhawk
    } else {
        return `${favoriteColor}stone`; //Ex: Bluestone
    }
}
//Generate Last Name//
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1);
    if (lastLetter === "a") {
        return "Shadow";
    } else if (lastLetter === "b") {
        return "Storm";
    } else if (lastLetter === "c") {
        return "Blaze";
    } else if (lastLetter === "d") {
        return "Thorn";
    } else if (lastLetter === "e") {
        return "Frost";
    } else {
        return "Moon";
    }
}
//generate Suffix//

function genSuffix(wizardHouse) {
    if (wizardHouse === "courageAndBravery") {
        return `of the Gryffindor house.`; 
    } else if (wizardHouse === "ambitionAndCunning") {
        return `of the Slytherin house.`; 
    } else if (wizardHouse === "wisdomAndCreativity") {
        return `of the Ravenclaw house.`; 
    } else (wizardHouse === "loyaltyAndHardWork") {
        return `of the Hufflepuff house.`; 
    }
}

//Generate
//Master Name Building Function//
function genFullName() {
    //Get the Users Inputs from the HTML Elements//
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const wizardHouse = document.getElementById('wizardHouse').value.trim()
    //Run Name Generating Functions & store them in new variables//
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(wizardHouse)

    //Capitalize Name Variables when needed//
    const capitalizedPrefix = capitalize(prefix)
    const capitalizedFistName = capitalize(newFirstName)
    const capitalizedMiddleName = capitalize(middleName)
    const capitalizedLastName = capitalize(newLastName)
    //Combine all of the Name variables in a new name//
    const fullName = `${capitalizedPrefix} ${capitalizedFistName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`
    console.log(fullName)
    //Display he new name//
    document.getElementById('result').textContent = fullName
}
//Capitalization function//
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}