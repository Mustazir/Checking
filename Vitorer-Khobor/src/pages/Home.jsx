
import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

function Home() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("/newsData.json")
      .then(res => res.json())
      .then(data => setNewsList(data));
  }, []);

  return (
    <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {newsList.map(news => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}

export default Home;
