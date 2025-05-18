
// Fungsi utilitas umum

// Toggle active class pada navbar
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
}

// Format status keluhan
function formatStatus(status) {
    switch (status) {
        case 'unread':
            return '<span class="status-badge warning">Belum Dibaca</span>';
        case 'read':
            return '<span class="status-badge normal">Sudah Dibaca</span>';
        case 'responded':
            return '<span class="status-badge normal">Sudah Ditanggapi</span>';
        default:
            return '<span class="status-badge">Tidak Diketahui</span>';
    }
}

// Mengevaluasi status kesehatan berdasarkan suhu tubuh
function evaluateTemperatureStatus(temperature) {
    if (temperature < 36.0) {
        return 'danger';
    } else if (temperature > 37.5) {
        return 'danger';
    } else if (temperature > 37.0) {
        return 'warning';
    } else {
        return 'normal';
    }
}

// Mengevaluasi status kesehatan berdasarkan tekanan darah
function evaluateBloodPressureStatus(systolic, diastolic) {
    if (systolic > 130 || diastolic > 90) {
        return 'danger';
    } else if (systolic > 120 || diastolic > 80) {
        return 'warning';
    } else {
        return 'normal';
    }
}

// Format display untuk status kesehatan
function formatHealthStatus(status, value) {
    return `<span class="status-badge ${status}">${value}</span>`;
}

// Menghitung BMI (Body Mass Index)
function calculateBMI(weight, height) {
    // Weight in kg, height in cm
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    return bmi.toFixed(1);
}

// Mengevaluasi status BMI untuk anak-anak
function evaluateBMIStatus(bmi) {
    if (bmi < 14) {
        return 'danger'; // Underweight
    } else if (bmi > 23) {
        return 'warning'; // Overweight
    } else {
        return 'normal'; // Normal
    }
}

// Memuat data kelas untuk pilihan form
function loadClassOptions() {
    // Ambil semua kelas unik dari data users
    const users = getData('users');
    const classes = [...new Set(users.filter(u => u.class).map(u => u.class))];
    
    // Sort classes
    classes.sort();
    
    return classes;
}

// Memuat opsi kelas ke dalam dropdown
function populateClassDropdown(selectElementId) {
    const selectElement = document.getElementById(selectElementId);
    if (!selectElement) return;
    
    const classes = loadClassOptions();
    
    // Clear existing options
    selectElement.innerHTML = '<option value="">Pilih Kelas</option>';
    
    // Add class options
    classes.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        option.textContent = `Kelas ${className}`;
        selectElement.appendChild(option);
    });
}

// Memformat tanggal dan waktu
function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleString('id-ID', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Memformat tanggal
function formatDateDisplay(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric'
    });
}

// Filter keluhan berdasarkan status
function filterComplaints(complaints, statusFilter) {
    if (statusFilter === 'all') {
        return complaints;
    }
    
    return complaints.filter(complaint => complaint.status === statusFilter);
}
