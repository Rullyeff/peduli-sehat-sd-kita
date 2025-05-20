
// Module untuk integrasi data cuaca

async function getWeatherData(city = 'Jakarta') {
    try {
        // Simulasi data cuaca (dalam aplikasi nyata akan menggunakan API cuaca)
        const weatherData = {
            location: city,
            temperature: Math.floor(Math.random() * 10) + 23, // Suhu 23-32 derajat Celcius
            condition: getRandomWeatherCondition(),
            humidity: Math.floor(Math.random() * 30) + 60, // Kelembaban 60-89%
            updatedAt: new Date().toISOString()
        };
        
        // Simpan ke localStorage sebagai cache
        localStorage.setItem('weather_data', JSON.stringify(weatherData));
        return weatherData;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        
        // Jika gagal, coba ambil dari cache jika ada
        const cachedData = localStorage.getItem('weather_data');
        if (cachedData) {
            return JSON.parse(cachedData);
        }
        
        // Fallback data
        return {
            location: city,
            temperature: 28,
            condition: 'cerah',
            humidity: 75,
            updatedAt: new Date().toISOString()
        };
    }
}

function getRandomWeatherCondition() {
    const conditions = ['cerah', 'berawan', 'hujan ringan', 'hujan', 'berawan sebagian'];
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
}

function getWeatherIcon(condition) {
    switch(condition.toLowerCase()) {
        case 'cerah':
            return 'fas fa-sun';
        case 'berawan':
            return 'fas fa-cloud';
        case 'hujan ringan':
            return 'fas fa-cloud-rain';
        case 'hujan':
            return 'fas fa-cloud-showers-heavy';
        case 'berawan sebagian':
            return 'fas fa-cloud-sun';
        default:
            return 'fas fa-cloud-sun';
    }
}

