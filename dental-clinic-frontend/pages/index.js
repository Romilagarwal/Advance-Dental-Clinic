// pages/index.js
import Layout from '../components/Layout';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';  // Updated imports for Heroicons v2

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/images/clinic-hero.png")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Your Smile, Our Priority</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-12 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Welcome to Advance Dental Clinic</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          We provide comprehensive dental care for patients of all ages. Our team of highly trained professionals is
          dedicated to ensuring that you receive the highest quality dental care in a comfortable and caring environment.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <Image src="/images/dental-checkup.jpg" alt="Dental Checkup" width={300} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Routine Checkup</h3>
            <p className="text-gray-600 mt-2">
              Regular dental checkups are essential for maintaining good oral health.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <Image src="/images/teeth-whitening.jpg" alt="Teeth Whitening" width={300} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Teeth Whitening</h3>
            <p className="text-gray-600 mt-2">
              Brighten your smile with our professional teeth whitening services.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <Image src="/images/dental-implants.png" alt="Dental Implants" width={300} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Dental Implants</h3>
            <p className="text-gray-600 mt-2">
              Replace missing teeth with our state-of-the-art dental implants.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <PhoneIcon className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-lg text-gray-700">9415070200</span>
          </div>
          <div className="flex items-center">
            <EnvelopeIcon className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-lg text-gray-700">advancedentalclinic17@gmail.com</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Appointment Today!</h2>
        <p className="text-lg mb-8">
          Don't wait, schedule your appointment with us and start your journey to a healthier, brighter smile.
        </p>
        <a href="/booking" className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition duration-300">
          Book Appointment
        </a>
      </section>
    </Layout>
  );
}
