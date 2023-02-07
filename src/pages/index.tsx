import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Post from "../component/Post";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900">
        <nav className="w-5/12">
          <div className="flex flex-wrap items-center justify-between bg-slate-700 p-6">
            <div className="mr-6 flex flex-shrink-0 items-center text-white">
              <svg
                className="mr-2 h-8 w-8 fill-current"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h54v54H0z" />
                <path d="M27 0C12.1 0 0 12.1 0 27s12.1 27 27 27 27-12.1 27-27S41.9 0 27 0zm0 50C13.8 50 3 39.2 3 26S13.8 3 27 3s24 10.8 24 24-10.8 24-24 24z" />
              </svg>
              <span className="text-xl font-semibold tracking-tight">
                BlindDate
              </span>
            </div>
          </div>
        </nav>
        <main className="flex min-h-screen w-5/12 flex-col border border-gray-500 bg-slate-900">
          {/* Post */}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
};

export default Home;
