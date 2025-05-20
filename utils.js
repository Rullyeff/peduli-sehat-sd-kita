
// Module untuk fungsi utility umum

// Function untuk mendapatkan tanggal hari ini (format YYYY-MM-DD)
function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

// Function untuk memformat tanggal (dari format YYYY-MM-DD ke DD/MM/YYYY)
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

// Export functions
