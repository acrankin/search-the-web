export default {
  getNews(searchTerm = '') {
    return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json());
  }
};