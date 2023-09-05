const NavHome = document.getElementById("NavHome");
const NavList = document.getElementById("NavList");

function navigator(page){
    if (page === "Home"){
        document.location="/accueil"
    }
    if (page === "List"){
        document.location="/horaires"
    }
}