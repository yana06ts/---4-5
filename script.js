function togglePopup(id) {
    const popup = document.getElementById(id);
    const isVisible = popup.style.display === 'block';
    popup.style.display = isVisible ? 'none' : 'block';
}

document.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (!popup.contains(event.target) && !popup.previousElementSibling.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
});