function getClanXP(){
    let a = document.getElementsByClassName("scrollItem")[0];
    let s = ""
    for(let i = 0; i < a.childNodes.length; i++) {
        s += a.childNodes[i].childNodes[3].childNodes[0].data + ", ";
    }
    return s;
}

function getPlayerXP(){
    let a = document.getElementsByClassName("scrollItem")[0];
    let s = ""
    for(let i = 0; i < a.childNodes.length; i++) {
        s += a.childNodes[i].childNodes[2].childNodes[0].childNodes[1].data + ", ";
    }
    return s;
}