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
      process.env.RAZZLE_API_SECRET || 'L95JWn2w62ICx0W4Rlm00xs0ymftF6JDosw3MUfK',
    API_GRANT: 'password',
  }
  