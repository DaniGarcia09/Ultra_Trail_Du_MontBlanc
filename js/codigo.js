// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //document.getElementById("header").style.backgroundColor = "white";//</script>
        document.getElementById("nav").style.backdropFilter = "blur(4px)";
        //document.getElementById("nav").style.backdropFilter = "invert(1)"
        document.getElementById("nav").style.backdropFilter = "sepia(1)"
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(255,255,255,0.5)";
        //document.getElementById("nav").style.backdropFilter = "invert(0)";
        document.getElementById("nav").style.backdropFilter = "sepia(1)"
    }
}