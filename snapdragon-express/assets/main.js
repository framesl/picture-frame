document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".bri-button");
    const imgStats = document.querySelector(".imgstats");

    if (button && imgStats) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            
            imgStats.classList.toggle("show");
        });
    }
});


