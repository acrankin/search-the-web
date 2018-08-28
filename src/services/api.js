export default {
  getNews(searchTerm = '') {
    return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=d5fb6207e8c44b67b6744129f45d5431`)
      .then(response => response.json());
  }
};