import  { useEffect } from "react";

const services = [
  {
    heading: "Mobile App Development",
    description:
      "In today's digital era, having a mobile app is crucial for businesses to stay competitive. Our Mobile App Development team crafts innovative and user-friendly mobile apps tailored to your unique business needs and target audience.",
    importance:
      "Mobile apps provide businesses with a powerful tool to connect with users, enhance brand engagement, and fulfill their needs anytime, anywhere.",
    procedure:
      "Our procedural approach involves thorough analysis of each project, ensuring a deep understanding of your business objectives. We prioritize collaboration, transparency, and quality assurance throughout the development process to deliver seamless and high-quality mobile apps.",
    images: [
      "https://www.brightlogix.com/services/mobile-development/Mobileapp.gif",
      "https://proeffico.com/wp-content/uploads/2023/10/app-development-1.gif",
      "https://stepsharp.com/wp-content/uploads/2022/04/android-app-development-company-in-chennai.gif",
    ],
  },
  {
    heading: "Web App Development",
    description:
      "Web apps are essential for delivering dynamic and interactive experiences to users across various platforms. Our Web App Development team specializes in creating scalable and efficient web applications that cater to your specific business requirements.",
    importance:
      "Web apps empower businesses to reach a wider audience, streamline processes, and provide personalized experiences to users, leading to increased engagement and conversions.",
    procedure:
      "We follow a systematic approach, starting with comprehensive research and planning to ensure alignment with your business goals. Our team emphasizes on user-centric design, robust development, and rigorous testing to deliver top-notch web applications.",
    images: [
      "https://www.fullstacktechnology.com/wp-content/uploads/2020/11/web-development-2.gif",
      // "https://media.licdn.com/dms/image/D4D12AQFu1JyX6kWKMw/article-cover_image-shrink_600_2000/0/1696900919419?e=2147483647&v=beta&t=8EicoeUS3KXL64WYkOTjjThYfgD1w5rzCf0hjoSpq2I",
      "https://croniox.in/assets/img/croniox_animation.gif",
      // "https://miro.medium.com/v2/resize:fit:679/1*L_QoAG863l8QvqxpNyBiqw.gif",
      "https://www.digitalsilk.com/wp-content/uploads/2022/09/modern-website-design-hero.gif",
    ],
  },
  {
    "heading": "Digital Marketing",
    "description": "In today's digital era, effective digital marketing is essential for businesses to thrive online. Our Digital Marketing services are tailored to enhance your online presence, increase brand visibility, and drive meaningful engagement with your target audience. From SEO and social media marketing to content creation and email campaigns, we have the expertise to elevate your digital strategy and help your business succeed in the competitive online landscape.",
    "importance": "Digital marketing amplifies your brand's visibility, extends your reach, and engages your audience across various online channels. It allows businesses to connect with their customers in real-time, understand their preferences, and deliver personalized experiences.",
    "procedure": "Our digital marketing strategy is data-driven, focusing on targeted campaigns, content optimization, and performance tracking to maximize ROI and achieve your business goals. We work closely with you to understand your objectives, analyze your market, and develop custom solutions that resonate with your audience and drive results.",
    "images": [
      "https://irp.cdn-website.com/bb44a1e6/dms3rep/multi/parkyd-banner-toronto-canada-digiatl-marketing.gif",
      "https://www.anipixart.com/assets/admin/images/course-details//634611652181493.gif",
      "https://i.pinimg.com/originals/35/ca/72/35ca72c8f011488fc91bb828c837ac47.gif"
    ]
  },
  
  {
    heading: "Web Designing",
    description:
      "A visually appealing and user-friendly website is crucial for making a strong impression on your audience and driving conversions. Our Web Designing team specializes in creating stunning and intuitive designs that captivate users and enhance brand credibility.",
    importance:
      "Effective web design plays a vital role in attracting and retaining users, improving usability, and fostering trust and credibility in your brand, ultimately leading to higher conversions and business growth.",
    procedure:
      "Our design process begins with understanding your brand identity and target audience, followed by wireframing, prototyping, and iterative design refinements. We focus on creating responsive and SEO-friendly designs that deliver exceptional user experiences across all devices.",
    images: [
      "https://boyecreativegroup.com/wp-content/uploads/2021/07/web-design-03.gif",
      // "https://public-images.interaction-design.org/tags/02-04-05-fluid-grid.gif",
      "https://lh6.googleusercontent.com/_fsRsC8Qj2YmLS2_Ae0pLd_tLBYhS7dqG2ZQSmFC3505U5-r6wVILa_SwdqmKJZxVf15F6NDgY2KzDImMYYp6OFetT-_FCo3E5FQI-rVf2SoA6g5HwuzbyrJpdAHj5T6hc7HjIS7",
      "https://i.pinimg.com/originals/f4/20/ac/f420ace45d8631e25156b685e0e87607.gif",
    ],
  },
  {
    heading: "App Designing",
    description:
      "A well-designed app not only looks visually appealing but also enhances usability and user satisfaction. Our App Designing team specializes in creating intuitive and aesthetically pleasing app interfaces that resonate with your target audience.",
    importance:
      "App design significantly impacts user engagement and retention, as it influences how users interact with your app and perceive your brand. A thoughtful and user-centric design can lead to higher user satisfaction and loyalty.",
    procedure:
      "We adopt a user-centered design approach, conducting thorough research and usability testing to understand user needs and preferences. Our iterative design process focuses on creating seamless and delightful user experiences that align with your brand identity and business objectives.",
    images: [
      "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8a4f456f-1ea2-4c22-9713-e2f70c5d0b09/mobile-app-design-image63.gif",
      "https://cdn-images-1.medium.com/fit/t/1600/480/0*pi2d158sd6KwwpAT.gif",
      "https://miro.medium.com/v2/resize:fit:1200/0*1wjclsP9usvp2l-z.gif",
    ],
  },
  {
    heading: "Software Testing",
    description:
      "Thorough testing is essential to ensure the reliability, performance, and security of your software applications. Our Software Testing team specializes in conducting comprehensive testing to identify and resolve defects, ensuring the delivery of high-quality and reliable software.",
    importance:
      "Effective software testing helps businesses mitigate risks, enhance product quality, and improve user satisfaction by delivering bug-free and stable applications. It instills confidence in your product and enhances your brand reputation.",
    procedure:
      "Our testing process encompasses various methodologies, including manual and automated testing, to thoroughly assess the functionality, performance, and security of your software. We employ industry-leading tools and best practices to identify and address issues at every stage of the development lifecycle.",
    images: [
      "https://miro.medium.com/v2/resize:fit:679/1*zAwc_dAX8EnvER8kqR2y3Q.gif",
      "https://i.pinimg.com/originals/c6/9f/a6/c69fa6e9d0af971ba052817ae70c4261.gif",
      "https://www.aalpha.net/wp-content/uploads/2021/03/Software-Testing.gif",
      // "https://www.edureka.co/blog/wp-content/uploads/2019/02/Selenium-blog.gif",
    ],
  },
];

function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container mx-auto py-8 text-xl ">
    <h1 className="text-4xl font-bold   text-center mb-8 text-gray-800">Our Services</h1>
    {services.map((service, index) => (
      <div key={index} className="mb-8  leading-8 bg-gray-200 rounded-lg shadow-md p-8">
        <h2 className="text-3xl text-center font-semibold mb-8">{service.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-center justify-center">
          {service.images.map((image, imageIndex) => (
            <img
            loading="lazy"
              key={imageIndex}
              src={image}
              alt={service.heading}
              className="rounded-lg shadow-md max-h-64 w-full object-cover"
            />
          ))}
        </div>
        <p className="my-4  mb-8">{service.description}</p>
        <p className="my-4  mb-8">
          <strong><h3>Importance:</h3></strong> <br /> {service.importance}
        </p>
        <p className="my-4  mb-8">
          <strong><h3>Procedure:</h3></strong> <br /> {service.procedure}
        </p>
      </div>
    ))}
  </div>
  );
}

export default ServicePage;
