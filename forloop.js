var i;
var product = 1;
var num = parseInt(prompt("Enter Product", "Enter"))
for (i = 1; i <= num; i++) {
    product= product * num;
    document.write("Total : " + product);
}