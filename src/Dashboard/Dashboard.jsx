import React, { useState, useEffect } from 'react';
import DashboardNavbar from './DashboardNavBar';

const Dashboard = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/dashboard/contactus');
        if (!response.ok) {
          throw new Error('Failed to fetch contact data');
        }
        const data = await response.json();
        setContactData(data);

      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  const handleUpdateContact = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:4000/dashboard/contactus/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update contact');
      }

      // Update contactData state with the updated data
      setContactData(prevData =>
        prevData.map(contact =>
          contact._id === id ? { ...contact, ...updatedData } : contact
        )
      );
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <React.Fragment>

      <DashboardNavbar/>
      <main className='flex flex-wrap justify-around mt-10'>
        <div className="left">
          {/* <ul>
            <li>home</li>
            <li>aboutus</li>
            <li>blogs</li>
            <li>process</li>
            <li>case study</li>
          </ul> */}
        </div>
        <div className="right">
          {contactData && (
            <main>
              {
                contactData.map((item,i)=>(
                  <form key={i} onSubmit={(e) => {
                    e.preventDefault();
                    // Here you can get the updated data from the form fields
                    const updatedData = {
                      firstName: e.target.elements.firstName.value,
                      lastName: e.target.elements.lastName.value,
                      message: e.target.elements.message.value
                    };
                    handleUpdateContact(item._id, updatedData);
                  }}>
                    <div className='flex gap-10 bg-slate-500 border-2 border-red-700 p-5 space-between ' >
                      <div className="firstName "><input type="text" name="firstName" defaultValue={item.firstName} /></div>
                      <div className="lastName"><input type="text" name="lastName" defaultValue={item.lastName} /></div>
                      <div className="id "><input type="text" value={item._id} readOnly /></div>
                      <div className="message"><input type="text" name="message" defaultValue={item.message} /></div>
                      
                      <button type="submit">Change</button>
                    </div>
                  </form>
                ))
              }
            </main>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
