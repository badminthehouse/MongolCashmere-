// Энэ кодыг script.js дотор өмнөх огноо гаргах кодтой хамт нэмнэ
document.addEventListener('DOMContentLoaded', function() {
    const fadeInSection = document.getElementById('fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Хэрэв элемент харагдах хэсэгт орж ирвэл
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 2s ease-in';
                entry.target.style.opacity = '1'; // Тод харагдуулна
                observer.unobserve(entry.target); // Дахин шалгахгүй
            }
        });
    }, {
        threshold: 0.5 // Элементийн 50% нь харагдах хэсэгт орж ирэх үед
    });

    if (fadeInSection) {
        observer.observe(fadeInSection);
    }
});