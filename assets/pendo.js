const text = "surat untuk telinga kelinci"; // Ganti dengan teks yang ingin ditampilkan

const header = document.getElementById("typed-text");
let currentIndex = 0;

function typeText() {
    if (currentIndex < text.length) {
        header.textContent += text[currentIndex];
        currentIndex++;
        setTimeout(typeText, 100); // Waktu jeda antara penambahan huruf (dalam milidetik)
    }
}

typeText();
