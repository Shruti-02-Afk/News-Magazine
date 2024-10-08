import { useState, useEffect } from "react";
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    useEffect(()=>{
        let URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(URL).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[category]);
  return (
    <div className="mt-2">
      <div><h2 className="text-center mb-2">Latest <span className="badge bg-danger">News</span></h2></div>
      <div className="d-flex flex-wrap justify-content-start">
        {articles.map((news, index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
      </div>  
    </div>
  );
}

export default NewsBoard;
