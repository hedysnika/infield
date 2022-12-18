import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <div className="bg-[#201f20]">
        <div className="w-4/6 ml-auto mr-auto pt-3 pb-3"></div>
      </div>
      <div className="bg-[#201f20] text-white pt-4 pb-5">
        <div className="flex w-4/6 ml-auto mr-auto gap-6 justify-center sm:justify-start">
          <Link to="/">About Us</Link>
          <Link to="/categories">Category</Link>
        </div>
      </div>
    </div>
  );
}
