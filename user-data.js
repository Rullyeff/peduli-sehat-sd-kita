
// Module untuk mendapatkan data pengguna (siswa dan guru)

// Import dependencies
document.write('<script src="../storage.js"></script>');

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

// Function untuk mendapatkan siswa berdasarkan kelas
function getStudentsByClass(className) {
    const users = getData('users');
    
    return users.filter(user => 
        user.role === 'siswa' && user.class === className
    );
}
