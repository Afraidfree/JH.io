function toggleBackground() {
    var body = document.body;
    var hello = document.getElementById("hello");
    
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        hello.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        hello.style.color = "black";
    }
}