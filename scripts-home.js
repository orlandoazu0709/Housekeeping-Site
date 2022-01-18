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

function toggleForm1() {
    var form = document.getElementById("form1");
    var btn1 = document.getElementById("gen-b1");
    var btn2 = document.getElementById("gen-b2");
    if (form.style.display == "none") {
        form.style.display = "flex";
        btn1.style.display = "none";
        btn2.style.display = "block";
    } else {
        form.style.display = "none";
        btn1.style.display = "block";
        btn2.style.display = "none";
    }
}

function toggleForm2() {
    var form = document.getElementById("form2");
    var btn1 = document.getElementById("est-b1");
    var btn2 = document.getElementById("est-b2");
    if (form.style.display == "none") {
        form.style.display = "flex";
        btn1.style.display = "none";
        btn2.style.display = "block";
    } else {
        form.style.display = "none";
        btn1.style.display = "block";
        btn2.style.display = "none";
    }
}