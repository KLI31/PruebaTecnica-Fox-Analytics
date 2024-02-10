import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2/",
});

const apiKey = "?country=us&apiKey=fd518460fde14c659be315e825a6e3fc";

const getTopHeadlines = api.get(`/top-headlines${apiKey}`);

const getNewsByCategory = (category) =>
  api.get(`/everything?q=${category}&apiKey=fd518460fde14c659be315e825a6e3fc`);

export default { getTopHeadlines, getNewsByCategory };
