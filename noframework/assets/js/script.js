document.addEventListener("DOMContentLoaded", function() {
    // Load components
    loadComponent("header", "../components/header.html");
    loadComponent("nav", "../components/nav.html");
    loadComponent("footer", "../components/footer.html");

    function loadComponent(id, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            });
    }
});
