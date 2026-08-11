// domain.js - Central Configuration for URLs & Endpoints

const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

const CONFIG = {
    // Auth Service Live URL (Aapka auth-service deploy ho chuka hai)
    AUTH_API: isProduction 
        ? 'https://callingchatapp.onrender.com/api/auth' 
        : 'http://localhost:3001/api/auth',
    
    // Call Service Live URL (Jab call-service deploy ho jaye, toh ye URL change kar dena)
    CALL_API: isProduction 
        ? 'https://yahan-apna-call-service-ka-live-url-dalein.onrender.com/api/calls' 
        : 'http://localhost:3003/api/calls',
    
    CALL_SERVICE_URL: isProduction 
        ? 'https://yahan-apna-call-service-ka-live-url-dalein.onrender.com' 
        : 'http://localhost:3003'
};
