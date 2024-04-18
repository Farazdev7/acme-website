import { useParams } from "react-router-dom";
import blogData from "../data/Blogs";
import { useEffect } from "react";

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { postId } = useParams();
  const postIdNumber = parseInt(postId, 10);

  const search_by_postId = (data, Id) => {
    return data.find((obj) => obj.id === Id);
  };

  const SearchedByID = search_by_postId(blogData, postIdNumber);

  if (!SearchedByID) {
    return (
      <div className="h-screen flex justify-center items-center text-center text-3xl md:text-4xl lg:text-6xl text-gray-800">
        Post not found!
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8   leading-10">
      <section className="grid  gap-8 ">
        <article className=" ">
          <img className="mx-auto my-auto md:w-[60vh] h-auto" src={SearchedByID.imageUrl} alt="" />
          <h2 className="text-3xl font-bold my-10">{SearchedByID.heading}</h2>
          <p className="text-gray-600 ">{SearchedByID.p}</p>
          <p className="my-4 text-gray-800">{SearchedByID.text}</p>
          <p className="italic">{SearchedByID.italic}</p>
          <div className="detail">
            {SearchedByID.detail.map((item, i) => (
              <div key={i} className="my-4">
                
                <h3 className="font-bold ">{i+1} : {item.heading}</h3>
                <p className="">{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <img src={SearchedByID.img} alt={SearchedByID.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">{SearchedByID.name}</p>
              <p className="text-sm text-gray-600">{SearchedByID.post}</p>
            </div>
          </div>
          <button onClick={() => window.history.back()} className="px-4 py-2 bg-gray-500 text-white rounded-md">
            Go Back
          </button>
        </article>
      </section>
    </div>
  );
};

export default BlogDetail;