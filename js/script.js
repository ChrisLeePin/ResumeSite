function showNavList(){
    var a = document.getElementById("nav-list");
    if (window.getComputedStyle(a).display === "none"){
        a.style.display = "inline-block";
    }
    else{
        a.style.display = "none"; //Try and make this a class
    }
}