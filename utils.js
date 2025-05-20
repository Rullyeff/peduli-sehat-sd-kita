
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

// Function untuk memformat tanggal dan waktu untuk tampilan
function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Function untuk memformat tanggal untuk tampilan
function formatDateDisplay(dateString) {
    const [year, month, day] = dateString.split('-');
    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    return `${day} ${monthNames[parseInt(month) - 1]} ${year}`;
}

// Function untuk memformat status keluhan
function formatStatus(status) {
    const statusMap = {
        'unread': '<span class="status-badge warning">Belum Dibaca</span>',
        'read': '<span class="status-badge warning">Dibaca</span>',
        'responded': '<span class="status-badge normal">Ditanggapi</span>'
    };
    
    return statusMap[status] || `<span class="status-badge">${status}</span>`;
}

// Function untuk memformat status kesehatan
function formatHealthStatus(status, value) {
    const statusMap = {
        'normal': `<span class="status-badge normal">${value}</span>`,
        'warning': `<span class="status-badge warning">${value}</span>`,
        'danger': `<span class="status-badge danger">${value}</span>`
    };
    
    return statusMap[status] || `<span class="status-badge">${value}</span>`;
}

// Function untuk mengevaluasi status suhu tubuh
function evaluateTemperatureStatus(temperature) {
    if (temperature < 36) return 'warning';
    if (temperature > 37.5) return 'danger';
    return 'normal';
}

// Function untuk mengevaluasi status tekanan darah
function evaluateBloodPressureStatus(systolic, diastolic) {
    if (systolic < 90 || diastolic < 60) return 'warning';
    if (systolic > 140 || diastolic > 90) return 'danger';
    return 'normal';
}

// Function untuk menghitung BMI
function calculateBMI(weight, height) {
    // Convert height from cm to m
    const heightInMeters = height / 100;
    
    // Calculate BMI: weight(kg) / (height(m))^2
    const bmi = weight / (heightInMeters * heightInMeters);
    
    return bmi.toFixed(1);
}

// Function untuk mengevaluasi status BMI
function evaluateBMIStatus(bmi) {
    bmi = parseFloat(bmi);
    
    if (bmi < 18.5) return 'warning'; // Underweight
    if (bmi > 25) return 'warning';   // Overweight
    if (bmi > 30) return 'danger';    // Obese
    return 'normal';                  // Normal
}

// Export functions
module.exports = {
    getTodayDate,
    formatDate,
    formatDateTime,
    formatDateDisplay,
    formatStatus,
    formatHealthStatus,
    evaluateTemperatureStatus,
    evaluateBloodPressureStatus,
    calculateBMI,
    evaluateBMIStatus
};
