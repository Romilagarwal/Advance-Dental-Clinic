// pages/services.js
import Layout from '../components/Layout';

export default function Services() {
  return (
    <Layout title="Services">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <ul className="list-disc list-inside mt-4">
        <li>General Dentistry</li>
        <li>Cosmetic Dentistry</li>
        <li>Orthodontics</li>
        <li>Laser Dentistry</li>
        <li>Oral Surgery</li>
      </ul>
    </Layout>
  );
}
