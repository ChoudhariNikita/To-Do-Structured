export const DB_MESSAGES = {
    MISSING_ENV_VARS: 'Missing required environment variables.',
    CONNECTION_SUCCESS: 'Database connection established successfully.',
    CONNECTION_ERROR: 'Unable to connect to the database:',
  };
  
  export const DB_DEFAULTS = {
    DIALECT: 'mysql' as const,
    PASSWORD: 'root',
  };
  