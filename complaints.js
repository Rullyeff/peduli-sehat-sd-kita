
// Module untuk manajemen keluhan kesehatan siswa

// Import dependencies
document.write('<script src="../storage.js"></script>');
document.write('<script src="../utils.js"></script>');

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
