import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
let cloud = "https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/london-4.svg";

const contactData = [
  {
    phone: "03404099242",
    email: "rasheedahsan786@gmail.com",
    // email subject will be here with %20 .'%20' that mean space
    emailSubject: "Contact%20to%20Acme",
    maintext: ` We’d love to hear about your latest app idea and discuss how we can help bring it to fruition, get in touch
    below or visit us at our York or London offices.`,
    ourLocation: {
      lication1: {
        city: "London",
        street: "90 York Way",
        street2: "N1 9AG.",
      },
      lication2: {
        city: "York",
        street: "12-18 Market st.",
        street2: "York YO1 8ST",
      },
      contactform: {
        uniname: `London King's Cross`,
        address: "York Micklegate",
      },
    },
    socialLinks: {
      facebookProfileUrl: "https://www.facebook.com/ahsan.rasheed.18400700",
      linkedinProfileUrl: "https://www.linkedin.com/in/ahsan-rasheed-977693177",
      twitterProfileUrl: "https://twitter.com/home",
    },
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  // const facebookProfileUrl = "https://www.facebook.com/ahsan.rasheed.18400700";
  // const linkedinProfileUrl = "https://www.linkedin.com/in/ahsan-rasheed-977693177";
  // const twitterProfileUrl = "https://twitter.com/home";

  const facebookClick = () => {
    window.open(contactData[0].socialLinks.facebookProfileUrl, "_blank");
  };
  const linkedinClick = () => {
    window.open(contactData[0].socialLinks.linkedinProfileUrl, "_blank");
  };
  const twitterClick = () => {
    window.open(contactData[0].socialLinks.twitterProfileUrl, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <section className="contactus-landing md:min-h-[90vh] md:max-h-[100vh] text-center text-white font-[400] ">
        <div className="contact py-[10vh]  bg-[#116c78]">
          <h1 className="text-3xl">Contact</h1>
          <p>{contactData[0].maintext}</p>
        </div>
        <div className="our-locations bg-[#2baeba] md:h-[75vh] py-[13vh] ">
          <h1 className="text-3xl">Our Locations</h1>
          {/* cloudes images is here stared */}
          <img className="h-[80px] hidden md:block w-fit absolute left-[40vw] bottom-[30vh]" src={cloud} alt="cloud1" />
          <img
            className="h-[80px] hidden md:block w-fit absolute right-[20vw] bottom-[10vh]"
            src={cloud}
            alt="cloud2"
          />
          <img className="h-[80px] hidden lg:block w-fit absolute left-[20vw] top-[35vh]" src={cloud} alt="cloud3" />
          <img className="h-[80px] hidden lg:block w-fit absolute left-[10vh] bottom-[30vh]" src={cloud} alt="cloud4" />
          {/* cloudes images is here  ended */}
          {/* our locations */}
          <div className="location text-center flex flex-col md:flex-row items-center  justify-around">
            <div className="London">
              <img
                className="w-[250px] "
                src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/london-1.svg"
                alt=""
              />
              <h1 className="text-2xl">{contactData[0].ourLocation.lication1.city}</h1>
              <p>{contactData[0].ourLocation.lication1.street}</p>

              <p>{contactData[0].ourLocation.lication1.street2}</p>
            </div>
            <div className="New York text-center">
              <img
                className="w-[250px] "
                src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/york-1.svg"
                alt=""
              />
              <h1 className="text-2xl">{contactData[0].ourLocation.lication2.city}</h1>
              <p>{contactData[0].ourLocation.lication2.street}</p>

              <p>{contactData[0].ourLocation.lication2.street2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* // form section */}
      <div className="bg-[#1a3b4f] text-white  py-24 bg-[url('https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/phone-bg.svg')] ">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-4xl mb-4 text-center">Tell us more about your project</h2>
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2" />
            {/* <span>+923404099242</span> */}
            <span>
              <a href={`tel:${contactData[0].phone}`}>{contactData[0].phone}</a>
            </span>
          </div>
          <div className="flex items-center mb-8">
            <FaEnvelope className="mr-2" />
            <span>
              {/* rasheedahsan786@gmail.com */}
              <a
                target="_blank"
                href={`https://mail.google.com/mail/?view=cm&to=${contactData[0].email}&su=${contactData[0].emailSubject}`}
              >
                {contactData[0].email}
              </a>
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                onChange={handleChange}
                value={formData.firstName}
                className="p-2 rounded bg-white text-gray-700"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                onChange={handleChange}
                value={formData.lastName}
                className="p-2 rounded bg-white text-gray-700"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile phone number*"
                onChange={handleChange}
                value={formData.mobile}
                className="p-2 rounded bg-white text-gray-700"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Work email*"
                onChange={handleChange}
                value={formData.email}
                className="p-2 rounded bg-white text-gray-700"
                required
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company Name*"
              onChange={handleChange}
              value={formData.company}
              className="p-2 mb-4 rounded bg-white text-gray-700 w-full"
              required
            />
            <textarea
              name="message"
              placeholder="What would you like?"
              onChange={handleChange}
              value={formData.message}
              className="p-2 mb-4 rounded bg-white text-gray-700 min-h-24 md:min-h-32 w-full"
              required
            />
            <button type="submit" className="bg-orange-500 p-2 rounded-full flex items-center justify-center w-32">
              Send
            </button>
          </form>
          <div className="flex justify-between items-center mt-8">
            <div>
              {/* {contactData[0].ourLocation} */}
              <p> {contactData[0].ourLocation.contactform.uniname}</p>
              <p>{contactData[0].ourLocation.contactform.address}</p>
            </div>

            <div className="flex gap-10">
              <span onClick={facebookClick} style={{ cursor: "pointer" }}>
                <FaFacebookF className="mx-1" />
              </span>
              <span onClick={twitterClick} style={{ cursor: "pointer" }}>
                <FaTwitter className="mx-1" />
              </span>
              <span onClick={linkedinClick} style={{ cursor: "pointer" }}>
                <FaLinkedinIn className="mx-1" />
              </span>
              {/* <FaFacebookF className="mx-1" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
