document.addEventListener('DOMContentLoaded', function() {
    const textItems = document.querySelectorAll('.text-item');
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
    
    function showSlide(index) {
        // Hide all items
        textItems.forEach(item => {
            item.classList.remove('show');
        });
        images.forEach(img => {
            img.classList.remove('show'); 
        });
        
        // Show current items
        textItems[index].classList.add('show');
        images[index].classList.add('show');
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % textItems.length;
        showSlide(currentIndex);
    }
    
    // Start with first slide
    showSlide(0);
    
    // Auto-advance slides every 4 seconds
    setInterval(nextSlide, 4000);
});