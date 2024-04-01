import { useParams } from "react-router-dom";
import blogData from "../data/Blogs";
import { useEffect } from "react";

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { postId } = useParams();
  const postIdNumber = parseInt(postId, 10); // Convert postId to a number

  const search_by_postId = (data, Id) => {
    return data.find((obj) => obj.id === Id);
  };

  const SearchedByID = search_by_postId(blogData, postIdNumber);

  if (!SearchedByID) {
    return (
      <div className=" h-[70vh] flex justify-center items-center text-center text-3xl md:text-4xl lg:text-[80px]">
        Post not found!
      </div>
    );
  }

  return (
    <div className="main">
      <section className=" ">
        <article className="text-center grid place-items-center">
          <img className="w-[40vw] h-fit" src={SearchedByID.imageUrl} alt="" />
          <h2 className="text-3xl font-bold mb-4">{SearchedByID.heading}</h2>
          <p className="text-gray-600">{SearchedByID.p}</p>
          <p className="my-4 text-gray-800">{SearchedByID.text}</p>
          <p className="italic">{SearchedByID.italic}</p>
        </article>

        {/* artical2 */}
        <article className="mx-16 mt-20">
          <div className="flex  ">
            <img src={SearchedByID.img} alt={SearchedByID.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">{SearchedByID.name}</p>
              <p className="text-sm text-gray-600">{SearchedByID.post}</p>
            </div>
          </div>
          <div className="mt-4">
            {/* <Link >
        </Link> */}
            <button onClick={() => window.history.back()} className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Go Back
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default BlogDetail;
