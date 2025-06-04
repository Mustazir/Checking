
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch("/newsData.json")
      .then(res => res.json())
      .then(data => {
        const selected = data.find(item => item.id === id);
        setNews(selected);
      });
  }, [id]);

  if (!news) return <p className="p-4">লোড হচ্ছে...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img
        src={news.image}
        alt={news.title}
        className="w-[500px]  object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{news.title}</h1>
      <p className="text-gray-700 mt-2">{news.content}</p>
    </div>
  );
}

export default NewsDetail;
