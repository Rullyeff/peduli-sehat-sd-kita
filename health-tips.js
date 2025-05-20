
// Module untuk tips dan info kesehatan

const healthTips = [
    {
        title: "Cuci Tangan Dengan Benar",
        description: "Cuci tangan dengan sabun selama 20 detik, terutama sebelum makan dan setelah bermain di luar.",
        icon: "handwashing.png",
        category: "kebersihan"
    },
    {
        title: "Sarapan Sehat Setiap Hari",
        description: "Sarapan membantu otak bekerja lebih baik dan memberikan energi untuk belajar.",
        icon: "breakfast.png",
        category: "nutrisi"
    },
    {
        title: "Minum Air Putih Yang Cukup",
        description: "Minum minimal 8 gelas air putih setiap hari untuk menjaga kesehatan.",
        icon: "water-kids.png",
        category: "nutrisi"
    },
    {
        title: "Istirahat Yang Cukup",
        description: "Anak SD membutuhkan tidur 9-12 jam setiap malam untuk pertumbuhan yang optimal.",
        icon: "sleep-kids.png",
        category: "istirahat"
    },
    {
        title: "Makan Buah dan Sayur",
        description: "Konsumsi minimal 3 porsi buah dan sayur setiap hari untuk mendapatkan vitamin dan mineral penting.",
        icon: "fruit-vegetables.png",
        category: "nutrisi"
    },
    {
        title: "Olahraga Teratur",
        description: "Bergerak aktif minimal 60 menit setiap hari untuk menjaga kesehatan jantung dan tubuh.",
        icon: "exercise-kids.png",
        category: "aktivitas"
    },
    {
        title: "Sikat Gigi 2 Kali Sehari",
        description: "Sikat gigi minimal 2 kali sehari selama 2 menit untuk menjaga kesehatan gigi dan mulut.",
        icon: "toothbrush-kids.png",
        category: "kebersihan"
    },
    {
        title: "Batasi Makanan Manis",
        description: "Kurangi konsumsi permen, coklat, dan minuman manis untuk mencegah gigi berlubang dan obesitas.",
        icon: "healthy-plate-kids.png",
        category: "nutrisi"
    }
];

function getRandomHealthTips(count = 3) {
    // Mengacak array tips kesehatan
    const shuffled = [...healthTips].sort(() => 0.5 - Math.random());
    
    // Mengambil sejumlah tips yang diminta
    return shuffled.slice(0, count);
}

function getHealthTipsByCategory(category) {
    return healthTips.filter(tip => tip.category === category);
}

function getAllHealthTips() {
    return [...healthTips];
}

