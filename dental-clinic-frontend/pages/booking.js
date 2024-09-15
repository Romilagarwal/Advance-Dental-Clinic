// pages/booking.js
import { useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns'; // Add this import
export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleDateChange = (date) => {
  // Format the date to 'YYYY-MM-DD'
    const formattedDate = format(date, 'yyyy-MM-dd');
    setFormData({ ...formData, date: formattedDate });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      toast.success('Appointment booked successfully!');
      setFormData({
        name: '',
        email: '',
        date: new Date(),
        time: '',
      });
    } catch (error) {
      toast.error(error.response?.data || 'Failed to book appointment.');

    }
  };

  return (
    <Layout title="Book Appointment">
      <ToastContainer />
      <h2 className="text-3xl font-bold">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-md mx-auto">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block">Preferred Date:</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            className="w-full border p-2"
            dateFormat="yyyy-MM-dd"
            required
          />
        </div>
        <div>
          <label className="block">Preferred Time:</label>
          <input
            type="time"
            name="time"
            className="w-full border p-2"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">
          Book Now
        </button>
      </form>
    </Layout>
  );
}
