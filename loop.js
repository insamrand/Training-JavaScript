var i;
for (let i = 1; i <= 10; i++) {
    document.write("I = " + i + " " + "What You ");
    if (i == 5 || i == 7) {
        document.write("Say What !!" + "<br>");
        
    }else {
        document.write("Say No !!" + "<br>")
    }
    continue;
}