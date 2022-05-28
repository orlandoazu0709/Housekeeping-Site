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
    var desc = document.getElementById("contact-desc")
    var p = document.getElementById("p");
    if (form.style.display == "none") {
        form.style.display = "flex";
        btn1.style.display = "none";
        btn2.style.display = "block";
        desc.style.display = "none";
        p.style.marginTop = "100px";
    } else {
        form.style.display = "none";
        btn1.style.display = "block";
        btn2.style.display = "none";
        desc.style.display = "block";
        p.style.marginTop = "250px";
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

function clickLoad() {
    document.getElementById("form1").reset();
    setTimeout(document.getElementById("gen-b1").click(), 5000);
}

if(window.attachEvent) {
    window.attachEvent("onload", setTimeout(clickLoad, 2000));
} else {
    window.addEventListener("load", setTimeout(clickLoad, 1000), false);
}
