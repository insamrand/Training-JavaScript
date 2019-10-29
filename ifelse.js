let mark1 = parseInt(prompt("Enter Your Eng Score", "Your Score")),
    mark2 = parseInt(prompt("Enter Your TH Score", "Your Score")),
    mark3 = parseInt(prompt("Enter Your JP Score", "Your Score")),
    total = mark1 + mark2 + mark3;
    percent = total *100 / 300;
    console.log("Eng Score" + " " + mark1);
    console.log("TH Score" + " " + mark2);
    console.log("JP Score" + " " + mark3);
    console.log("Total" + " " + total);
    console.log(percent + "%");

    if (percent >= 80) {
        alert("Grade A");
    } else if (percent >= 70) {
        alert("Grade B");
    } else if (percent >= 60) {
        alert("Grade C");
    } else if (percent >= 50) {
        alert("Grade D");
    } else {
        alert("Grade F");
    }
