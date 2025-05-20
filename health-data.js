
// Module untuk manajemen data kesehatan siswa

// Import dependencies
document.write('<script src="./storage.js"></script>');
document.write('<script src="./utils.js"></script>');

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

// Function untuk mendapatkan semua data kesehatan siswa berdasarkan ID
function getAllHealthDataByStudent(studentId) {
    const healthData = getData('healthData');
    
    return healthData.filter(data => 
        data.studentId === studentId
    ).sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Function untuk mendapatkan data kesehatan berdasarkan kelas
function getHealthDataByClass(className, date) {
    const healthData = getData('healthData');
    const users = getData('users');
    
    // ID siswa dari kelas tertentu
    const studentIds = users
        .filter(user => user.role === 'siswa' && user.class === className)
        .map(student => student.id);
    
    return healthData
        .filter(data => 
            studentIds.includes(data.studentId) && 
            (!date || data.date === date)
        );
}

// Export functions
module.exports = {
    addHealthData,
    hasHealthDataToday,
    getHealthDataByStudentAndDate,
    getAllHealthDataByStudent,
    getHealthDataByClass
};
