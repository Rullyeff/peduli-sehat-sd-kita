
// Module untuk menyimpan dan mengambil pengaturan sekolah

function initializeSchoolSettings() {
    // Pengaturan awal jika belum ada
    if (!localStorage.getItem('school_settings')) {
        const defaultSettings = {
            name: 'Peduli Sehatku',
            logoUrl: 'images/logo-health.png',
            updatedAt: new Date().toISOString()
        };
        
        localStorage.setItem('school_settings', JSON.stringify(defaultSettings));
        console.log('School settings initialized with default values');
    }
}

function getSchoolSettings() {
    const settings = JSON.parse(localStorage.getItem('school_settings') || '{}');
    return settings;
}

function updateSchoolSettings(newSettings) {
    const currentSettings = getSchoolSettings();
    const updatedSettings = {
        ...currentSettings,
        ...newSettings,
        updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('school_settings', JSON.stringify(updatedSettings));
    return updatedSettings;
}

