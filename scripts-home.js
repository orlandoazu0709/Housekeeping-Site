function toggleMenu() {
    var x = document.getElementById("nav");
    var y = document.getElementById("cancel-icon1");
    var z = document.getElementById("cancel-icon2");

    if (z.style.display == "none") {
        x.style.height = "285px";
        y.style.display = "block";
        z.style.display = "block";
    }
    else {
        x.style.height = "0px";
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
    if (form.style.height == "0px") {
        form.style.height = "620px";
        form.style.padding = "20px 0";
        form.style.paddingTop = "35px";
        form.style.margin = "auto";
        btn1.style.display = "none";
        btn2.style.display = "block";
        /*desc.style.display = "none";*/
        p.style.marginTop = "100px";
    } else {
        form.style.height = "0px";
        form.style.marginTop = "0px";
        form.style.padding = "0px";
        btn1.style.display = "block";
        btn2.style.display = "none";
       /* desc.style.display = "block";*/
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

window.onscroll = function() {
    if (window.location.href.match('index-home.html') != null) {
        scrollFunction();
    } else {
        scrollFunction2();
    }
};

function scrollFunction() {
    var btn = document.getElementById("scroll-btn");
    var sBtn2 = document.getElementById("scroll-btn2");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.bottom = "60px";
        sBtn2.style.bottom = "30px";
    }
    else {
        btn.style.bottom = "-160px";
        sBtn2.style.bottom = "-160px";
    }
}

function scrollFunction2() {
    var btn = document.getElementById("scroll-btn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.bottom = "-20px";
    }
    else {
        btn.style.bottom = "-160px";
    }
} 

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function clickLoad() {
    document.getElementById("form1").reset();
    setTimeout(document.getElementById("form1").style.display = "flex", 800);
    document.getElementById("gen-b1").click();
    /*setTimeout(document.getElementById("gen-b1").click(), 5000);*/
}

if(window.attachEvent) {
    window.attachEvent("onload", setTimeout(clickLoad, 800));
} else {
    window.addEventListener("load", setTimeout(clickLoad, 800), false);
}
