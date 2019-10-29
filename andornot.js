let userId = prompt("Enter User ID", "User ID");
let userPassword = prompt("Enter Password", "Password");

let message = (userId == "Mackiiez" != userPassword == "Insamrand") ? "Welcome" : "Invalid User";
alert(message);
console.log(userId + "  " + userPassword);