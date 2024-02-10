import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2/",
});

const apiKey = "?country=us&apiKey=fd518460fde14c659be315e825a6e3fc";

// Conseguir las noticias principales
const getTopHeadlines = api.get(`/top-headlines${apiKey}`);

// &apiKey=5ffd4be6fd4d41f2a3b678e7d7a19f40
// &apiKey=fd518460fde14c659be315e825a6e3fc

// Conseguir las noticias por categoria
const getNewsByCategory = (category) =>
  api.get(`/everything?q=${category}&apiKey=5ffd4be6fd4d41f2a3b678e7d7a19f40`);

// Conseguir las noticias por busqueda
const getNewsBySearch = (search) =>
  api.get(`/everything?q=${search}&apiKey=5ffd4be6fd4d41f2a3b678e7d7a19f40`);

export default { getTopHeadlines, getNewsByCategory, getNewsBySearch };
