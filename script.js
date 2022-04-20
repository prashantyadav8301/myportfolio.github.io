document.querySelector(".b").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebar-go")
    if (document.querySelector(".sidebar").classList.contains("sidebar-go")) {
        document.querySelector(".a").style.display = "inline"
        document.querySelector(".b").style.display = "none"
    }
    else {
        document.querySelector(".a").style.display = "none"
        setTimeout(() => {
            document.querySelector(".b").style.display = "inline"
        }, 300);
    }
})

