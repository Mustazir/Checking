
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-600 ">
       <nav className="bg-red-600 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        ভিতরের খবর
      </Link>
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="cursor-pointer hover:underline">প্রচ্ছদ</li>
        <li className="cursor-pointer hover:underline">জাতীয়</li>
        <li className="cursor-pointer hover:underline">প্রযুক্তি</li>
        <li className="cursor-pointer hover:underline">খেলা</li>
      </ul>
    </nav>
    </header>
  );
}
