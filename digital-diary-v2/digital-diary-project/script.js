// ==================== FILTRAGE DES CARTES ====================
function filterContent(category) {
    const cards = document.querySelectorAll('.card');
    const tags = document.querySelectorAll('.tag');
    
    // Mise à jour du tag actif
    tags.forEach(tag => tag.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filtrage des cartes
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// ==================== SMOOTH SCROLL ====================
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.tags-container').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});
