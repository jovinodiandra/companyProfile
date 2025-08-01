function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");

    // Tutup dropdown jika menu utama ditutup
    if (!nav.classList.contains("show")) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
            menu.classList.remove('show');
        });
    }
}
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.dropdown');
    const menu = dropdown.querySelector('.dropdown-content');

    // Toggle class .show ke dropdown
    menu.classList.toggle('show');
    // Tutup dropdown lain
    document.querySelectorAll('.dropdown-content').forEach(dc => {
        console.log(dc)
        if (dc !== menu) dc.classList.remove('show');
    });
}

// Menangani klik submenu layanan
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href').substring(1);
            const text = this.textContent.trim();
            showSection(href, text);

            // Tutup semua menu
            document.querySelector("nav ul").classList.remove("show");
            document.querySelectorAll('.dropdown-content').forEach(menu => {
                menu.classList.remove('show');
            });
        });
    });
});

// Fungsi tampilkan section
function showSection(id, title) {
    document.querySelectorAll("main section").forEach(section => {
        section.style.display = "none";
    });

    if (id === "home") {
        document.getElementById("home").style.display = "block";
        document.getElementById("welcome").style.display = "block";
    } else {
        const target = document.getElementById(id);
        if (target) target.style.display = "block";
    }
}
