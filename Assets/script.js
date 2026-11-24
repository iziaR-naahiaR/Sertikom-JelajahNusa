// Data
const destinations = [
    {
        title: "Bali",
        description: "Bali adalah pulau destinasi wisata ikonik di Indonesia yang terkenal akan perpaduan harmonis antara keindahan alam, kekayaan tradisi, dan keramahtamahan penduduknya. Dijuluki sebagai Pulau Dewata.",
        background: "Assets/images/Bali.jpg",
    },
    {
        title: "Papua Barat Daya",
        description: "Raja Ampat adalah gugusan kepulauan di Papua Barat Daya yang dikenal sebagai surga bahari dengan kekayaan hayati bawah laut tertinggi di dunia. Destinasi ini menjadi impian bagi para pencinta alam dan penyelam berkat pesonanya yang masih sangat alami.",
        background: "Assets/images/Raja Ampat.jpg",
    },
    {
        title: "Jawa Timur",
        description: "Gunung Bromo adalah gunung berapi aktif yang terletak di kawasan Taman Nasional Bromo Tengger Semeru, Jawa Timur, dan menjadi salah satu ikon wisata alam paling spektakuler di Indonesia.",
        background: "Assets/images/Bromo.jpg",
    },
    {
        title: "Nusa Tenggara Timur",
        description: "Labuan Bajo adalah sebuah kota pelabuhan yang terletak di ujung barat Pulau Flores, Nusa Tenggara Timur, yang berfungsi sebagai gerbang utama menuju kawasan Taman Nasional Komodo.",
        background: "Assets/images/Labuan Bajo.jpg",
    },
];
// Mengambil elemen html
const heroTitle = document.querySelector('.hero-text h1');
const heroDescription = document.querySelector('.hero-text p');
const heroSection = document.querySelector('.hero');
const heroBgLayer = document.querySelector('.hero-bg-layer');

// Memperbarui hero
function updateHero(index) {
    const destination = destinations[index];

    updateHeroBackground(destination);

    heroTitle.classList.add('fade-out');
    heroDescription.classList.add('fade-out');

    setTimeout(() => {
        heroTitle.textContent = destination.title;
        heroDescription.textContent = destination.description;

        heroTitle.classList.remove('fade-out');
    }, 500);

    setTimeout(() => {
        heroDescription.classList.remove('fade-out');
    }, 650);
}

const heroBgLayers = document.querySelectorAll('.hero-bg-layer');

let activeBgLayer = 0;

function updateHeroBackground(destination) {
    const nextLayerIndex = activeBgLayer === 0 ? 1 : 0;
    const nextLayer = heroBgLayers[nextLayerIndex];
    const currentLayer = heroBgLayers[activeBgLayer];

    nextLayer.classList.remove('show');

    nextLayer.style.backgroundImage = `
        linear-gradient(
            90deg,
            rgba(16, 36, 58, 0.55) 0%,
            rgba(16, 36, 58, 0.39) 35%,
            rgba(16, 36, 58, 0.08) 100%
        ),
        url("${destination.background}")
    `;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            nextLayer.classList.add('show');
            currentLayer.classList.remove('show');

            activeBgLayer = nextLayerIndex;
        });
    });
}

// Merubah hero
swiper.on('slideChange', function () {
    updateHero(swiper.realIndex);
});

// Menampilkan data awal
updateHero(swiper.realIndex);