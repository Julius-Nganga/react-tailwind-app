import React, { useState, useEffect, useCallback } from 'react';
import Card from '../components/Card';
import Button from '../components/button';
import { fetchPosts } from '../utils/api';
import PropTypes from 'prop-types';

const PostItem = ({ post }) => (
  <Card className="mb-4">
    <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{post.title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
  </Card>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

const ApiPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const postsPerPage = 10;

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, totalCount } = await fetchPosts(page, postsPerPage);
      setPosts(data);
      setTotalPages(Math.ceil(totalCount / postsPerPage));
    } catch (err) {
      setError('Failed to fetch posts. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const results = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercasedSearchTerm) ||
        post.body.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">API Data (JSONPlaceholder Posts)</h2>

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Search posts by title or body..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-center text-blue-500 dark:text-blue-300">Loading posts...</p>}
      {error && <p className="text-center text-red-500 dark:text-red-400">{error}</p>}

      {!loading && !error && filteredPosts.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400">No posts found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <Button onClick={handlePrevPage} disabled={page === 1} variant="secondary">
          Previous
        </Button>
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Page {page} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={page === totalPages} variant="secondary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ApiPage;