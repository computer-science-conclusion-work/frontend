export default {
    title: 'Ada',
    storagePrefix: '_ada',
  
    API_URL:
      process.env.RAZZLE_API_URL || 'http://127.0.0.1:8000/api',
    STORAGE_URL:
      process.env.RAZZLE_STORAGE_URL ||
      'http://127.0.0.1:8000/storage/',
    API_CLIENT: process.env.RAZZLE_API_CLIENT || '3',
    API_SECRET:
      process.env.RAZZLE_API_SECRET || 's5yzxNAnXp4onGQ8RBwrcakTQD9rByoaH3WHIIuQ',
    API_GRANT: 'password',
  }
  