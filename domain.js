// domain.js - Central Configuration for URLs & Endpoints

const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

const CONFIG = {
    // Development vs Production URLs
    AUTH_API: isProduction 
        ? 'https://your-production-auth-domain.com/api/auth' 
        : 'http://localhost:3001/api/auth',
    
    CALL_API: isProduction 
        ? 'https://your-production-call-domain.com/api/calls' 
        : 'http://localhost:3003/api/calls',
    
    CALL_SERVICE_URL: isProduction 
        ? 'https://your-production-call-domain.com' 
        : 'http://localhost:3003'
};
