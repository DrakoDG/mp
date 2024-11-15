if (localStorage.getItem('bannerClosed')) {
    document.getElementById('welcome-banner').style.display = 'none';
}

// Función para cerrar el banner
function closeBanner() {
    document.getElementById('welcome-banner').style.display = 'none';
    // Guarda en localStorage que el usuario cerró el banner
    localStorage.setItem('bannerClosed', 'true');
}