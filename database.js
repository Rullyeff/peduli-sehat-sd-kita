
// Main database module - refactored into smaller files
// Import and re-export all functionality to maintain compatibility

// Import modules for internal use
function initializeDatabase() {
    // Data awal untuk pengguna
    const initialUsers = [
        // Admin
        {
            id: "admin1",
            username: "admin",
            password: "admin123",
            role: "admin",
            name: "Administrator",
            class: null,
            createdAt: new Date().toISOString()
        },
        // Guru
        {
            id: "guru1",
            username: "budi_guru",
            password: "guru123",
            role: "guru",
            name: "Pak Budi",
            class: "6A",
            createdAt: new Date().toISOString()
        },
        {
            id: "guru2",
            username: "siti_guru",
            password: "guru123",
            role: "guru",
            name: "Bu Siti",
            class: "6B",
            createdAt: new Date().toISOString()
        },
        // Siswa
        {
            id: "siswa1",
            username: "ani_siswa",
            password: "siswa123",
            role: "siswa",
            name: "Ani Wijaya",
            class: "6A",
            createdAt: new Date().toISOString()
        },
        {
            id: "siswa2",
            username: "budi_siswa",
            password: "siswa123",
            role: "siswa",
            name: "Budi Santoso",
            class: "6A",
            createdAt: new Date().toISOString()
        },
        {
            id: "siswa3",
            username: "citra_siswa",
            password: "siswa123",
            role: "siswa",
            name: "Citra Rahmawati",
            class: "6B",
            createdAt: new Date().toISOString()
        },
        {
            id: "siswa4",
            username: "doni_siswa",
            password: "siswa123",
            role: "siswa",
            name: "Doni Prasetyo",
            class: "6B",
            createdAt: new Date().toISOString()
        }
    ];

    // Data awal untuk kesehatan harian (contoh)
    const currentDate = new Date().toISOString().split('T')[0];
    const initialHealthData = [
        {
            id: "health1",
            studentId: "siswa1",
            date: currentDate,
            temperature: 36.5,
            weight: 35,
            height: 140,
            bloodPressureSystolic: 110,
            bloodPressureDiastolic: 70,
            notes: "Kondisi sehat",
            createdAt: new Date().toISOString()
        },
        {
            id: "health2",
            studentId: "siswa2",
            date: currentDate,
            temperature: 36.8,
            weight: 38,
            height: 145,
            bloodPressureSystolic: 115,
            bloodPressureDiastolic: 75,
            notes: "Sedikit batuk",
            createdAt: new Date().toISOString()
        }
    ];

    // Data awal untuk keluhan kesehatan (contoh)
    const initialComplaints = [
        {
            id: "complaint1",
            studentId: "siswa1",
            date: currentDate,
            title: "Sakit Kepala",
            description: "Saya mengalami sakit kepala sejak pagi",
            status: "unread", // unread, read, responded
            createdAt: new Date().toISOString()
        },
        {
            id: "complaint2",
            studentId: "siswa3",
            date: currentDate,
            title: "Sakit Perut",
            description: "Saya mengalami sakit perut setelah jam istirahat",
            status: "unread",
            createdAt: new Date().toISOString()
        }
    ];

    // Data awal untuk tanggapan guru (contoh)
    const initialResponses = [];

    // Simpan data awal ke localStorage
    localStorage.setItem('users', JSON.stringify(initialUsers));
    localStorage.setItem('healthData', JSON.stringify(initialHealthData));
    localStorage.setItem('complaints', JSON.stringify(initialComplaints));
    localStorage.setItem('responses', JSON.stringify(initialResponses));
    localStorage.setItem('peduli_sehatku_initialized', 'true');

    console.log('Database initialized with sample data');
}

// Re-export all functions from modules for backward compatibility

// Load all required modules
document.addEventListener('DOMContentLoaded', function() {
    // Load the modules in the correct order to ensure dependencies are available
    const scripts = [
        'storage.js', 
        'utils.js', 
        'auth.js', 
        'health-data.js', 
        'complaints.js', 
        'responses.js', 
        'user-data.js'
    ];
    
    let loadedCount = 0;
    
    scripts.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script.includes('/') ? script : `../${script}`;
        scriptElement.onload = () => {
            loadedCount++;
            if (loadedCount === scripts.length) {
                console.log('All database modules loaded successfully');
                
                // Initialize the database if needed
                if (!localStorage.getItem('peduli_sehatku_initialized')) {
                    initializeDatabase();
                }
            }
        };
        document.head.appendChild(scriptElement);
    });
});

// Make sure these functions are available immediately (not waiting for dynamic loading)
// This maintains compatibility with any code that directly uses database.js
// and expects these functions to be available immediately
