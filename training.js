const fn = () => {
    console.log("start");
    const doSomething = function () {
        setTimeout(() => {
            return new Promise((resolve, reject) => {
                console.log("return")
            })
        }, 1000);
    };
}
fn();

parseHTML = window.document.onload = () => {
    console.log("sssss")
}
parseHTML();