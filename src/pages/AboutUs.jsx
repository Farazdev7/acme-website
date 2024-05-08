  import  { useEffect ,useState } from "react";
  import { GiPodiumWinner } from "react-icons/gi";
  import { HiOutlineLightBulb } from "react-icons/hi";
  import { BiSolidBookAlt } from "react-icons/bi";
  import { HiOutlineRocketLaunch } from "react-icons/hi2";
  import Aos from "aos";
  import "aos/dist/aos.css";
  import frazimg from "../../public/images/team/faraz.jpg";
  import zeryabimg from "../../public/images/team/zeryab.jpg";
  import saad2img from "../../public/images/team/image.jpg";
  import hamzaimg from "../../public/images/team/hamza2.jpg";
  import ashirimg from "../../public/images/team/ashir2.jpg";
  import ahsanimg from "../../public/images/team/ahsan2.jpg";
  // blue background images
  import ahsan2bgimg from "../../public/images/team/blur img/ahsan2bg.jpg";
  import saad2bgimg from "../../public/images/team/blur img/saadbgimage.jpg";
  import hamza2bgimg from "../../public/images/team/blur img/hamzablur.jpg";
  import ashir2bgimg from "../../public/images/team/blur img/ashirblur.jpg";





  // thats array of object will come from backend
  const About = [
    {
      bgimg: "",
      title: "",
      // here is tream array of objects
      team: [
        {
          name: "Faraz Rasool",
          blurimg:ahsan2bgimg,
          image:frazimg,
          desination: "CEO",
        },
        {
          name: "Zaryab Salman",
          blurimg:ahsan2bgimg,
          image:zeryabimg,
          desination: "Marketing Manager & UI/UX Designer",
        },
        {
          name: "Saad Salman",
          image:saad2img,
          blurimg:saad2bgimg,
          desination: "Business Developer",
        },
        {
          name: "Hamza Nafasat",
          image:hamzaimg,  
          blurimg:hamza2bgimg,
            desination: "MERN Stack Developer",
        },
        {
          name: "Asher",
          image:ashirimg,
          blurimg:ashir2bgimg,
          desination: "Flutter developer",
        },
        {
          name: "Ahsan Rasheed",
          image:ahsanimg,
          blurimg:ahsan2bgimg,
          // image: '../../public/images/team/ahsan.jpg',
          desination: "MERN Stack Developer",
        },
      ],
    },
  ];


  const AboutUs = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
      Aos.init();
    });
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      
      
      
      //bg-gray-100 
      <section  >
      <div className="grid place-items-center text-center">
        {/* Mission Banner */}
        <div className="w-full">
          {/* <img
            className="w-full h-auto object-cover object-center"
            src="../../public/images/team/cover.jpeg"
            alt="Mission Banner"
          /> */}
          {/* Our mission */}
          <div className="pt-6  pb-16">
            <h2 className="text-xl md: font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 font-[400]">
              We are dedicated to providing innovative software solutions that empower businesses and individuals to achieve
              their goals efficiently and effectively.
            </p>
          </div>
        </div>
        {/* Our Values Section */}
        <div className="mt-12 my-16">
          <h2 className=" font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="max-w-xs">
              <GiPodiumWinner className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Empower Success</h3>
            </div>
            {/* Value 2 */}
            <div className="max-w-xs">
              <HiOutlineLightBulb className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Passionate Experts</h3>
            </div>
            {/* Value 3 */}
            <div className="max-w-xs">
              <BiSolidBookAlt className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Creative Problem Solver</h3>
            </div>
            {/* Value 4 */}
            <div className="max-w-xs">
              <HiOutlineRocketLaunch className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Enjoy the Journey</h3>
            </div>
          </div>
        </div>
        {/* Our Team Section */}

        {/* <section className=" w-full py-14">
          <article className=" text-center font-[400]">
            <h1 className=" md:text-2xl lg:text-4xl">Senior Management Team</h1>
            <p>
              Our SMT brings a world of experience to the company. Our business leaders inspire and guide the team to ensure
              the quality and efficiency of all our app development projects.
            </p>
          </article>
          <div className="w-full flex flex-wrap justify-center space-x-4 mt-12  text-center font-[400]">
            {About[0].team.map((item, i) => (
              <div key={i} data-aos="fade-up" 
              className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4 bg-cover bg-center">   
    
      <img className="w-full h-64 object-cover object-center"
      onLoad={() => setImageLoaded(true)}
       src={imageLoaded?item.image:item.blurimg} loading="lazy" alt="Employee" />

      <div className="p-6">
        <h3 className="font-semibold mb-2">{item.name}</h3>
        <h4 className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.desination.replace("&", "<br />") }} />
      </div>
    </div>
  ))}
          </div>
        </section>   */}


      </div>
    </section>
    
    );
  };

  export default AboutUs;
