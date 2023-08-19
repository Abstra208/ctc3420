link = {
    "horaires": "",
    "nouveau": "",
}
links = [["/nouveau", "new"], ["/", "accueil"]]

links.forEach(element => {
    if (element[0] == location.pathname) {
        eval(`window.link.${element[1]} == "active"`)
    }
});