// domain.js - Central Configuration for URLs & Endpoints

const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

const CONFIG = {
    // Auth Service Live URL
    AUTH_API: isProduction 
        ? 'https://callingchatapp.onrender.com/api/auth' 
        : 'http://localhost:3001/api/auth',
    
    // Call Service Live URL (Updated with your new Render URL)
    CALL_API: isProduction 
        ? 'https://callingchatapp-1.onrender.com/api/calls' 
        : 'http://localhost:3003/api/calls',
    
    CALL_SERVICE_URL: isProduction 
        ? 'https://callingchatapp-1.onrender.com' 
        : 'http://localhost:3003'
};
