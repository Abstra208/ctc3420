link = {
    "horaires": "",
    "nouveau": "",
}
links = [["/nouveau", "nouveau"], ["/", "accueil"]]

links.forEach(element => {
    if (element[0] == location.pathname) {
        eval(`window.link.${element[1]} == "active"`)
    }
});