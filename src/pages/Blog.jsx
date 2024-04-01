import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//ya data ka object backend sy aye ga

const Blogdata = [
  {
    id: 1,
    heading: "Build the right team to scale",
    p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    text: "Our delivery model helps you cut costs and deliver within budget.",
    italic:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    imageUrl: "https://i.ibb.co/H21r2VY/great-Software1.png",
    isImageRight: true,
    img: "https://i.ibb.co/FmFZpKc/Ellipse.png",
    name: "Jeewa markram",
    post: "CEO",
  },
  {
    id: 2,
    heading: "Build the right team to scale",
    p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    text: "Our delivery model helps you cut costs and deliver within budget.",
    italic:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    imageUrl: "https://i.ibb.co/Bqd1tPN/great-Software2.png",
    isImageRight: false,
    img: "https://i.ibb.co/1sbWC97/ee.png",
    name: "Jeewa markram",
    post: "CEO",
  },
  {
    id: 3,
    heading: "Build the right team to scale",
    p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
    text: "Our delivery model helps you cut costs and deliver within budget.",
    italic:
      "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
    imageUrl: "https://i.ibb.co/C1GXS1w/great-Software3.png",
    isImageRight: true,
    img: "https://i.ibb.co/tsb0C9S/bb.png",
    name: "Jeewa markram",
    post: "CEO",
  },
];
// BlogPost component to display individual posts
const BlogPost = ({ post }) => {
  // Conditional styling based on the 'isImageRight' property
  const containerStyle = `flex flex-col md:flex-row ${
    post.isImageRight ? "md:flex-row" : "md:flex-row-reverse"
  } items-center my-8`;
  const contentStyle = "w-full md:w-1/2 p-4";
  const imageStyle = "w-full md:w-1/2";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Link to={`/blog/${post.id}`} className="w-full">
      <div className={containerStyle}>
        <div className={contentStyle}>
          <h2 className="text-2xl font-bold">{post.heading}</h2>
          <p className=" ">{post.p}</p>
          <p className="my-4 text-gray-800 font-[500]">{post.text}</p>
          <p className="italic  ">{post.italic}</p>
          <div className="flex items-center mt-4">
            <img src={post.img} alt={post.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">{post.name}</p>
              <p className="text-sm text-gray-600">{post.post}</p>
            </div>
          </div>
        </div>
        <div className={imageStyle}>
          <img src={post.imageUrl} alt="Blog" className="w-full h-auto" />
        </div>
      </div>
    </Link>
  );
};

// Main Blog component to map through the posts
const Blog = ({ posts }) => {
  return (
    <div className="container mx-auto px-4">
      {posts.map((post, index) => (
        <BlogPost key={index} post={{ ...post, id: post.id }} />
      ))}
    </div>
  );
};

// Sample data array
// Sample data array

export default function App() {
  return <Blog posts={Blogdata} />;
}
