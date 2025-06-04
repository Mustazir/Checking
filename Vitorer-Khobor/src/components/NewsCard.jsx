
import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img src={news.image} alt={news.title} className="w-[500px]  object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{news.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{news.summary}</p>
      <Link to={`/news/${news.id}`} className="text-blue-600 mt-2 inline-block">বিস্তারিত</Link>
    </div>
  );
}

export default NewsCard;
