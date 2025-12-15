// 1. Огноог харуулах функцийг тодорхойлох
function displayCurrentDate() {
    // Одоогийн огноог авах
    const today = new Date(2025.12.16);
    
    // Огноог Монгол хэлний формат руу хөрвүүлэх (Жишээ: 2025 оны 12 сарын 16)
    const options = { 2025 оны 12 сарын 16
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    // Монгол (mn-MN) хэлний тохиргоог ашиглах
    const formattedDate = today.toLocaleDateString('mn-MN', options);
    
    // 2. HTML-ийн ID-гаар элементийг олох
    const dateSpan = document.getElementById('cru'); // ID-гаа 'cru'-ээр сольсон
    
    // 3. Элемент дотор огноог оруулах
    if (dateSpan) {
        dateSpan.textContent = formattedDate;
    }
}

// Функцийг хуудас ачаалагдахад дуудах
document.addEventListener('DOMContentLoaded', displayCurrentDate);