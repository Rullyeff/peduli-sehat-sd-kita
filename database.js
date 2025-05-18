
// Simulasi database menggunakan localStorage
// Struktur data:
// - users: Menyimpan akun pengguna (siswa, guru, admin)
// - healthData: Menyimpan data kesehatan harian siswa
// - complaints: Menyimpan keluhan kesehatan siswa
// - responses: Menyimpan tanggapan guru terhadap keluhan siswa

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

// Function untuk login
function login(username, password, role) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Cari user berdasarkan username, password dan role
    const user = users.find(u => 
        u.username === username && 
        u.password === password && 
        u.role === role
    );

    if (user) {
        // Simpan info user yang sedang login di sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            username: user.username,
            name: user.name,
            role: user.role,
            class: user.class
        }));

        // Redirect ke halaman dashboard sesuai role
        switch (role) {
            case 'siswa':
                window.location.href = 'siswa/dashboard.html';
                break;
            case 'guru':
                window.location.href = 'guru/dashboard.html';
                break;
            case 'admin':
                window.location.href = 'admin/dashboard.html';
                break;
        }
        return true;
    } else {
        alert('Login gagal. Pastikan username, password, dan peran benar.');
        return false;
    }
}

// Function untuk logout
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = '../index.html';
}

// Function untuk mendapatkan user yang sedang login
function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
}

// Function untuk memeriksa apakah user sudah login
function checkAuth() {
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        window.location.href = '../index.html';
        return false;
    }
    
    // Cek apakah user sedang berada di halaman yang sesuai dengan role-nya
    const currentPath = window.location.pathname;
    const isInCorrectArea = currentPath.includes(`/${currentUser.role}/`);
    
    if (!isInCorrectArea) {
        switch (currentUser.role) {
            case 'siswa':
                window.location.href = '../siswa/dashboard.html';
                break;
            case 'guru':
                window.location.href = '../guru/dashboard.html';
                break;
            case 'admin':
                window.location.href = '../admin/dashboard.html';
                break;
        }
        return false;
    }
    
    return true;
}

// Function untuk mengambil data
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Function untuk menyimpan data
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function untuk generate ID unik
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// Function untuk mendapatkan tanggal hari ini (format YYYY-MM-DD)
function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

// Function untuk memformat tanggal (dari format YYYY-MM-DD ke DD/MM/YYYY)
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

// Function untuk memeriksa apakah siswa sudah mengisi data kesehatan hari ini
function hasHealthDataToday(studentId) {
    const healthData = getData('healthData');
    const todayDate = getTodayDate();
    
    return healthData.some(data => 
        data.studentId === studentId && data.date === todayDate
    );
}

// Function untuk mendapatkan data kesehatan siswa berdasarkan ID dan tanggal
function getHealthDataByStudentAndDate(studentId, date) {
    const healthData = getData('healthData');
    
    return healthData.find(data => 
        data.studentId === studentId && data.date === date
    );
}

// Function untuk mendapatkan siswa berdasarkan kelas
function getStudentsByClass(className) {
    const users = getData('users');
    
    return users.filter(user => 
        user.role === 'siswa' && user.class === className
    );
}

// Function untuk mendapatkan keluhan siswa berdasarkan ID siswa
function getComplaintsByStudent(studentId) {
    const complaints = getData('complaints');
    
    return complaints.filter(complaint => 
        complaint.studentId === studentId
    ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// Function untuk mendapatkan keluhan berdasarkan kelas
function getComplaintsByClass(className) {
    const complaints = getData('complaints');
    const users = getData('users');
    
    // ID siswa dari kelas tertentu
    const studentIds = users
        .filter(user => user.role === 'siswa' && user.class === className)
        .map(student => student.id);
    
    return complaints
        .filter(complaint => studentIds.includes(complaint.studentId))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

// Function untuk mendapatkan tanggapan untuk keluhan tertentu
function getResponsesForComplaint(complaintId) {
    const responses = getData('responses');
    
    return responses
        .filter(response => response.complaintId === complaintId)
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}

// Function untuk menambahkan data kesehatan baru
function addHealthData(healthData) {
    const allHealthData = getData('healthData');
    const newHealthData = {
        ...healthData,
        id: generateId(),
        createdAt: new Date().toISOString()
    };
    
    allHealthData.push(newHealthData);
    saveData('healthData', allHealthData);
    
    return newHealthData;
}

// Function untuk menambahkan keluhan baru
function addComplaint(complaint) {
    const complaints = getData('complaints');
    const newComplaint = {
        ...complaint,
        id: generateId(),
        status: 'unread',
        createdAt: new Date().toISOString()
    };
    
    complaints.push(newComplaint);
    saveData('complaints', complaints);
    
    return newComplaint;
}

// Function untuk menambahkan tanggapan guru
function addResponse(response) {
    const responses = getData('responses');
    const complaints = getData('complaints');
    
    const newResponse = {
        ...response,
        id: generateId(),
        createdAt: new Date().toISOString()
    };
    
    responses.push(newResponse);
    saveData('responses', responses);
    
    // Update status keluhan menjadi 'responded'
    const complaintIndex = complaints.findIndex(c => c.id === response.complaintId);
    if (complaintIndex !== -1) {
        complaints[complaintIndex].status = 'responded';
        saveData('complaints', complaints);
    }
    
    return newResponse;
}

// Function untuk menambah user baru
function addUser(userData) {
    const users = getData('users');
    const newUser = {
        ...userData,
        id: generateId(),
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveData('users', users);
    
    return newUser;
}

// Function untuk update user
function updateUser(userId, userData) {
    const users = getData('users');
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
        saveData('users', users);
        return users[userIndex];
    }
    
    return null;
}

// Function untuk menghapus user
function deleteUser(userId) {
    const users = getData('users');
    const filteredUsers = users.filter(u => u.id !== userId);
    
    saveData('users', filteredUsers);
    
    // Jika user yang dihapus adalah siswa, hapus juga data kesehatan dan keluhan
    const healthData = getData('healthData').filter(d => d.studentId !== userId);
    saveData('healthData', healthData);
    
    const complaints = getData('complaints').filter(c => c.studentId !== userId);
    saveData('complaints', complaints);
    
    return true;
}

// Function untuk mendapatkan nama siswa berdasarkan ID
function getStudentName(studentId) {
    const users = getData('users');
    const student = users.find(u => u.id === studentId);
    
    return student ? student.name : 'Tidak diketahui';
}

// Function untuk mendapatkan nama guru berdasarkan ID
function getTeacherName(teacherId) {
    const users = getData('users');
    const teacher = users.find(u => u.id === teacherId);
    
    return teacher ? teacher.name : 'Tidak diketahui';
}
