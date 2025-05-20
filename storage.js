
// Module for local storage data management

// Function untuk generate ID unik
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// Function untuk mengambil data
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Function untuk menyimpan data
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Export functions
module.exports = {
    generateId,
    getData,
    saveData
};
