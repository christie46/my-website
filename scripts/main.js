let menu = false
function toggle() {
    if(menu == false) {
        document.getElementById("one").classList.add("active");
        menu = true    
        console.log("clicked");
    } else {
        document.getElementById("one").classList.remove("active");
        menu = false
        console.log("unclicked")
    }
}    
