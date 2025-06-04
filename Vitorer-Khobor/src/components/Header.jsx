
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-600 text-white p-4">
      <Link to="/" className="text-2xl font-bold">ভিতরের খবর</Link>
    </header>
  );
}
