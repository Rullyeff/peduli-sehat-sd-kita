
// Module untuk manajemen tanggapan guru terhadap keluhan siswa

// Import dependencies
document.write('<script src="./storage.js"></script>');

// Function untuk mendapatkan tanggapan untuk keluhan tertentu
function getResponsesForComplaint(complaintId) {
    const responses = getData('responses');
    
    return responses
        .filter(response => response.complaintId === complaintId)
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
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

// Export functions
module.exports = {
    getResponsesForComplaint,
    addResponse
};
