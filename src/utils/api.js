const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const totalCount = response.headers.get('x-total-count'); // For pagination
    return { data, totalCount };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};