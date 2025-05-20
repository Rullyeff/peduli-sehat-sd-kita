
// Module untuk manajemen data kesehatan siswa

// Import dependencies
document.write('<script src="../storage.js"></script>');
document.write('<script src="../utils.js"></script>');

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
