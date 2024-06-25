import axios from 'axios';

/**
 * get_logout()
 * GET /api/logout endpoint
 */
export default async function get_logout(): Promise<void> {
  try {
    await axios({ method: 'get', url: '/api/logout', timeout: 2000, withCredentials: true });
  } catch (error) {
    // Ignore if unauthorized (401), unknown error otherwise
    if (axios.isAxiosError(error) && error.response && error.response.status === 401) return;
    throw error;
  }

  return;
}
