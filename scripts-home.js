function toggleMenu() {
    var x = document.getElementById("nav");
    var y = document.getElementById("cancel-icon1");
    var z = document.getElementById("cancel-icon2");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    }
    else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}