import React, { useEffect, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
let cloud =
  "https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/london-4.svg";

const contactData = [
  {
    phone: "+923201619619",
    email: "connect@acmedigitalsol.online ",
    // email subject will be here with %20 .'%20' that mean space
    emailSubject: "Contact%20to%20Acme",
    maintext: ` We’d love to hear about your latest app idea and discuss how we can help bring it to fruition, get in touch
    below or visit us at our York or London offices.`,
    ourLocation: {
      lication1: {
        city: "UAE_Sharjah",
        street: "Near Al Malomat Center - AlBu Danig_Sharjah ",
        street2: "Office No 7",
      },
      lication2: {
        city: "Lahore - Pakistan",
        street: "rd Floor, AMNA Tower , Near Model Town link Rood ",
        street2: "Office No 3",
      },
      contactform: {
        uniname: `Acme Digital Solutions`,
        address: "",
      },
    },
    socialLinks: {
      facebookProfileUrl:
        "https://www.facebook.com/profile.php?id=61557459425088&mibextid=ZbWKwL",
      linkedinProfileUrl:
        "https://www.linkedin.com/company/acme-digital-solutions/about/",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, mobile, email, company, message } = formData;

    const res = await fetch("http://localhost:4000/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        mobile,
        email,
        company,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message faild to post");
    } else {
      console.log("message send sucessfully");
    }
    // Handle form submission

    console.log(formData);
  };

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
      <section className="contactus-landing  text-center text-white font-[400] ">
        <div className="contact py-[10vh]  bg-[#116c78]">
          <h1 className="text-3xl">Contact</h1>
          <p>{contactData[0].maintext}</p>
        </div>
        <div className="our-locations bg-[#2baeba]  py-[13vh] ">
          <h1 className="text-3xl">Our Locations</h1>
          {/* our locations */}
          <div className="location  flex flex-col md:flex-row items-center  justify-around">
            <div className="UAE">
              <img
                src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/london-1.svg"
                alt=""
              />
              <h2 className="mt-5">
                {contactData[0].ourLocation.lication1.city}
              </h2>
              <p>{contactData[0].ourLocation.lication1.street}</p>

              <p>{contactData[0].ourLocation.lication1.street2}</p>
            </div>
            <div className="Lahore">
              <img
                src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/york-1.svg"
                alt=""
              />
              <h2 className="mt-5">
                {contactData[0].ourLocation.lication2.city}
              </h2>
              <p>{contactData[0].ourLocation.lication2.street}</p>

              <p>{contactData[0].ourLocation.lication2.street2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* // form section */}
      <div className="bg-[#1a3b4f] text-white px-6  py-24 bg-[url('https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/phone-bg.svg')] ">
        <div className="max-w-2xl mx-auto">
          <h2 className=" mb-4 text-center">Tell us more about your project</h2>
          <div className="flex items-center mb-4">
            <FaPhone className="mr-2" />
            <span>
              <a href={`tel:${contactData[0].phone}`}>{contactData[0].phone}</a>
            </span>
          </div>
          <div className="flex items-center mb-8">
            <FaEnvelope className="mr-2" />
            <span>
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
            <button
              type="submit"
              className="bg-orange-500 p-2 rounded-full flex items-center justify-center w-32"
            >
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
              <span
                className="cursor-pointer hover:text-orange-500"
                onClick={facebookClick}
              >
                <FaFacebookF className="mx-1" />
              </span>
              {/* <span onClick={twitterClick} style={{ cursor: "pointer" }}>
                <FaTwitter className="mx-1" />
              </span> */}
              <span
                onClick={linkedinClick}
                className="cursor-pointer hover:text-orange-500"
              >
                <FaLinkedinIn className="mx-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
