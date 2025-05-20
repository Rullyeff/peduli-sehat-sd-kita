
// Module for authentication and user management

// Import dependencies
document.write('<script src="../storage.js"></script>');

// Function for login
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
