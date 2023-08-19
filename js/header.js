link = {
    "horaires": "",
    "nouveau": "",
}
links = [["/nouveau", "new"], ["/", "home"]]

links.forEach(element => {
    if (element[0] == location.pathname) {
        eval(`window.link.${element[1]} == "active"`)
    }
});