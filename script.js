function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}
document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let items = document.querySelectorAll(".card-box, .info-box");

    items.forEach(function(item) {
        let text = item.innerText.toLowerCase();

        if (text.includes(filter)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});