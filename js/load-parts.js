fetch("parts/header.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
        // Убираем анимации до загрузки
        document.querySelectorAll("#header button").forEach(btn => btn.classList.add("loaded"));
    });

fetch("parts/footer.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });
