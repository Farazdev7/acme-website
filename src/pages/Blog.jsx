import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Blogdata from '../Components/data/Blogs'
// import upwordLine from "../../../public/images/Reviews/upwordLine.png";
import upwordLine from "../../public/images/Reviews/upwordLine.png";


//ya data ka object backend sy aye ga

// const Blogdata = [
//   {
//     id: 1,
//     heading: "Build the right team to scale",
//     p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
//     text: "Our delivery model helps you cut costs and deliver within budget.",
//     italic:
//       "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
//     imageUrl: "https://i.ibb.co/H21r2VY/great-Software1.png",
//     isImageRight: true,
//     img: "https://i.ibb.co/FmFZpKc/Ellipse.png",
//     name: "Jeewa markram",
//     post: "CEO",
//   },
//   {
//     id: 2,
//     heading: "Build the right team to scale",
//     p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
//     text: "Our delivery model helps you cut costs and deliver within budget.",
//     italic:
//       "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
//     imageUrl: "https://i.ibb.co/Bqd1tPN/great-Software2.png",
//     isImageRight: false,
//     img: "https://i.ibb.co/1sbWC97/ee.png",
//     name: "Jeewa markram",
//     post: "CEO",
//   },
//   {
//     id: 3,
//     heading: "Build the right team to scale",
//     p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
//     text: "Our delivery model helps you cut costs and deliver within budget.",
//     italic:
//       "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
//     imageUrl: "https://i.ibb.co/C1GXS1w/great-Software3.png",
//     isImageRight: true,
//     img: "https://i.ibb.co/tsb0C9S/bb.png",
//     name: "Jeewa markram",
//     post: "CEO",
//   },
// ];
// BlogPost component to display individual posts

let picture='../../public/images/team/faraz.jpg'
const BlogPost = ({ post }) => {
  // Conditional styling based on the 'isImageRight' property
  const containerStyle = `flex flex-col  text-xl font-[400] justify-between md:flex-row mx-auto my-20 mb-36 bg-slate-200 ${
    post.isImageRight ? "" : "md:flex-row-reverse"
  } items-center my-8`;
  const contentStyle = " md:ml-8  lg:w-[50%] pt-4  md:text-left text-center ";
  const imageStyle = "md:mt-0 mt-8 ";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Link to={`/blog/${post.id}`} >
      <div className={containerStyle}>
        <div className={contentStyle}>
      
          <h3 className="t font-bold py-4">{post.heading}</h3>
          <p className=" ">{post.p}</p>
          <p className="my-4 text-gray-800 font-[500]">{post.text}</p>
          
          <div className="flex gap-4 items-center">
                <img className="max-h-[4rem]" src={upwordLine} alt={upwordLine} />
                <p className="md:my-10 my-6 text-pink-700 italic">" {post.italic}"</p>
              </div>
          <div className="flex items-center mt-4">
            <img src={post.img} alt={post.name} className="w-12 h-12 rounded-full mr-4" />
            {/* <img src={picture} alt={post.name} className="w-12 h-12 rounded-full mr-4" /> */}
            <div>
              <p className="font-bold">{post.name}</p>
              <p className="text-sm text-gray-600">{post.post}</p>
            </div>
          </div>
        </div>
        <div className={imageStyle}>
          <img  src={post.imageUrl} alt="Blog" className="md:mx-auto w-full md:w-auto rounded-lg shadow-lg" />
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
