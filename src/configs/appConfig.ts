export const ENVIRONMENT =
  import.meta.env.VITE_REACT_APP_ENVIRONMENT || 'local';
export const isLocal = ENVIRONMENT === 'local';
export const BASE_URL =
  import.meta.env.REACT_APP_BASE_URL || 'http://localhost:4000/api';
