import Image from "next/image";
import { useEffect, useState } from "react";

export default function Post() {
  const [image, setImage] = useState<string>("");
  const [data, setData] = useState();

  useEffect(() => {
    async function FetchImage() {
      await fetch("https://randomuser.me/api/").then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          setImage(data.results[0].picture.large);
          setData(data.results[0]);
        }
      });
    }
    FetchImage();
  }, []);

  return (
    <>
      <article className="border border-gray-500">
        <div className="flex items-center gap-4 px-4 py-2">
          <span className="text-gray-100">@{data?.login.username}</span>
          <p className="text-gray-200">
            Posted on <time dateTime="2020-03-16">March 16, 2020</time>
          </p>
        </div>
        <h2 className="px-4 text-2xl font-bold text-gray-200">
          Random question inserted here
        </h2>

        <div className="w-fill relative m-4 h-64 rounded-lg">
          <Image
            src={image}
            alt={"User's image"}
            fill
            style={{ objectFit: "cover", borderRadius: "15px" }}
          />
        </div>
      </article>
    </>
  );
}
