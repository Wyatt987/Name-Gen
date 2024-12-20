//Generate Prefix//
function genPrefix(firstName) {
    return (firstName.length > 5 || firstName.includes("a")) ? "Professor" : "Lord";
}
//Prompt//
window.onload = function() {
    myFunction();
};
function myFunction() {
    alert("Hi, in this website you will be able to generate your wizarding name by answering the following prompts! Are you ready to begin?");
}
//generate first name//
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    if (firstLetter === "d" && firstName.length === 2) {
        return "Dumbledore";
    }
    switch (firstLetter) {
        case "n":
            return "Nevel";
        case "b":
            return "Dudley";
        case "c":
            return "Harry";
        case "d":
            return "Draco";
        case "h":
            return "Hermione";
        case "s":
            return "Snape";
        default:
            return "Ron";
    }
}
//Generate middle name//
function genMiddleName(roadType, favoriteColor) {
    if (roadType === "Acacia") {
        return `${favoriteColor}ridge`; //Ex: BlueRidge
    } else if (roadType === "alder") {
        return `${favoriteColor}land`; // Ex: Orangeland
    } else if (roadType === "apple") {
        return `${favoriteColor}tide`; // Ex: Bluetide
    } else if (roadType === "ash") {
        return `${favoriteColor}hawk`; // Ex: Crimsonhawk
    } else if (roadType === "aspen") {
        return `${favoriteColor}wood`; // Ex: Greenwood
    } else if (roadType === "beech") {
        return `${favoriteColor}brook`; // Ex: Yellowbrook
    } else if (roadType === "blackthorn") {
        return `${favoriteColor}thorn`; // Ex: Pinkthorn
    } else if (roadType === "blackwalnut") {
        return `${favoriteColor}stone`; // Ex: Brownstone
    } else if (roadType === "cedar") {
        return `${favoriteColor}hill`; // Ex: Whitehill
    } else if (roadType === "cherry") {
        return `${favoriteColor}bloom`; // Ex: Redbloom
    } else if (roadType === "chestnut") {
        return `${favoriteColor}wood`; // Ex: Goldwood
    } else if (roadType === "cypress") {
        return `${favoriteColor}leaf`; // Ex: Blueleaf
    } else if (roadType === "dogwood") {
        return `${favoriteColor}tree`; // Ex: Pinktree
    } else if (roadType === "ebony") {
        return `${favoriteColor}shade`; // Ex: Blackshade
    } else if (roadType === "elder") {
        return `${favoriteColor}root`; // Ex: Silverroot
    } else if (roadType === "elm") {
        return `${favoriteColor}shade`; // Ex: Greenshade
    } else if (roadType === "englishoak") {
        return `${favoriteColor}oak`; // Ex: Blueoak
    } else if (roadType === "fir") {
        return `${favoriteColor}mist`; // Ex: Redmist
    } else if (roadType === "hawthorn") {
        return `${favoriteColor}thorn`; // Ex: Whitesthorn
    } else if (roadType === "hazel") {
        return `${favoriteColor}glade`; // Ex: Goldglade
    } else if (roadType === "holly") {
        return `${favoriteColor}berry`; // Ex: Redberry
    } else if (roadType === "hornbeam") {
        return `${favoriteColor}bend`; // Ex: Silverbend
    } else if (roadType === "larch") {
        return `${favoriteColor}wood`; // Ex: Yellowwood
    } else if (roadType === "laurel") {
        return `${favoriteColor}crest`; // Ex: Whitecrest
    } else if (roadType === "mahogany") {
        return `${favoriteColor}glow`; // Ex: Goldglow
    } else if (roadType === "maple") {
        return `${favoriteColor}leaf`; // Ex: Redleaf
    } else if (roadType === "pear") {
        return `${favoriteColor}blossom`; // Ex: Pinkblossom
    } else if (roadType === "pine") {
        return `${favoriteColor}cone`; // Ex: Greencone
    } else if (roadType === "poplar") {
        return `${favoriteColor}reach`; // Ex: Bluereach
    } else if (roadType === "redoak") {
        return `${favoriteColor}oak`; // Ex: Brownoak
    } else if (roadType === "redwood") {
        return `${favoriteColor}tree`; // Ex: Goldtree
    } else if (roadType === "rowan") {
        return `${favoriteColor}branch`; // Ex: Redbranch
    } else if (roadType === "silverlime") {
        return `${favoriteColor}glow`; // Ex: Whiteglow
    } else if (roadType === "spruce") {
        return `${favoriteColor}breeze`; // Ex: Bluebreeze
    } else if (roadType === "sycamore") {
        return `${favoriteColor}shade`; // Ex: Silvershade
    } else if (roadType === "vine") {
        return `${favoriteColor}vine`; // Ex: Greenvine
    } else if (roadType === "walnut") {
        return `${favoriteColor}grove`; // Ex: Browngrove
    } else if (roadType === "willow") {
        return `${favoriteColor}whisper`; // Ex: Silverwhisper
    } else if (roadType === "yew") {
        return `${favoriteColor}branch`; // Ex: Goldbranch
    } else {
        return `${favoriteColor}wood`; // Default Ex: Pinkwood
    }
}
//Generate Last Name//
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1);
    if (lastLetter === "a") {
        return "Abbot";
    } else if (lastLetter === "b") {
        return "Avery";
    } else if (lastLetter === "c") {
        return "Black";
    } else if (lastLetter === "d") {
        return "Bulstrode";
    } else if (lastLetter === "e") {
        return "Burke";
    } else if (lastLetter === "f") {
        return "Crouch";
    } else if (lastLetter === "g") {
        return "Fawley";
    } else if (lastLetter === "h") {
        return "Flint";
    } else if (lastLetter === "i") {
        return "Gaunt";
    } else if (lastLetter === "j") {
        return "Greengrass";
    } else if (lastLetter === "k") {
        return "Lestrange";
    } else if (lastLetter === "l") {
        return "Longbottom";
    } else if (lastLetter === "m") {
        return "Macmillan";
    } else if (lastLetter === "n") {
        return "Malfoy";
    } else if (lastLetter === "o") {
        return "Nott";
    } else if (lastLetter === "p") {
        return "Ollivander";
    } else if (lastLetter === "q") {
        return "Parkinson";
    } else if (lastLetter === "r") {
        return "Prewett";
    } else if (lastLetter === "x") {
        return "Rosier";
    } else if (lastLetter === "t") {
        return "Selwyn";
    } else if (lastLetter === "u") {
        return "Shacklebolt";
    } else if (lastLetter === "v") {
        return "Shafiq";
    } else if (lastLetter === "w") {
        return "Slughorn";
    } else if (lastLetter === "x") {
        return "Travers";
    } else if (lastLetter === "y") {
        return "Yaxley";
    } else  
        return "Wesley";
}
//generate Suffix//

function genSuffix(wizardHouse) {
    if (wizardHouse === "courageAndBravery") {
        return `of the Gryffindor house.`; 
    } else if (wizardHouse === "ambitionAndCunning") {
        return `of the Slytherin house.`; 
    } else if (wizardHouse === "wisdomAndCreativity") {
        return `of the Ravenclaw house.`; 
    } else (wizardHouse === "loyaltyAndHardWork") 
        return `of the Hufflepuff house.`; 
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