let userName = "Phusitkarn";
let lastName = "Insamrand";
console.log("My name is" + " " + userName + " " + lastName);


let person = {
    name: "Phusitkarn",
    lastname: "Insamrand",
    age: 26
}

person.name = "Mackiiez"
person["name"] = "mackiiez";

let name = "Phusitkarn";
let age = 26;
let isApprove = false;
let firstName = undefined;
console.log(person.name,person.lastname,person.age);


let selectedColor = ['red', 'blue', 'green'];
console.log(selectedColor[0]);


function greet(firstName,lastName) {
    console.log("Hello BanPu" +" "+ firstName +" "+ lastName);
}

greet("firstName","lastName");


function square(number) {
    return number * number;
}

    console.log(square(2));
