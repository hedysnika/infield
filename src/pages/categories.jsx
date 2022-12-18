import { Link } from "react-router-dom";
import healthtopics from "./healthtopics";

export default function categories() {
  return (
    <div>
      <div className="h-screen">
        <div className="bg-black py-16">
          <h1 className="text-white text-right pr-64 text-4xl">
            Topics
          </h1>

          <div></div>
        </div>
        <div className="text-black grid grid-cols-3 bg-[#F3F3F3]">
          {healthtopics.map((item) => (
            <div className="m-6 p-8 py-12 border border-solid rounded-xl bg-[#FFFFFF]">
              <Link to={`/${item.path}`} className="text-black text-2xl">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
