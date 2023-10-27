const loveStory = document.getElementById("love-story");

// Fungsi untuk mengganti isi elemen p saat scroll mencapai bawah
function replaceTextOnScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Tambahkan nilai sesuai dengan tinggi elemen p dan batas bawah yang diinginkan
    const triggerOffset = 1;

    if (scrollPosition + windowHeight >= documentHeight - triggerOffset) {
        loveStory.textContent = "PUTRY MATINDAS";
    }
}

// Tambahkan event listener ke scroll
window.addEventListener("scroll", replaceTextOnScroll);
