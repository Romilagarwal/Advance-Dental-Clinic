// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title }) => (
  <div className="flex flex-col min-h-screen">
    <Head>
      <title>{title ? `${title} - Advance Dental Clinic` : 'Advance Dental Clinic'}</title>
      <meta name="description" content="Advance Dental Clinic Website" />
    </Head>

    {/* Header */}
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">Advance Dental Clinic</Link>
        </h1>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/booking">Book Appointment</Link></li>
        </ul>
      </nav>
    </header>

    {/* Main Content */}
    <main className="container mx-auto flex-grow p-4">
      {children}
    </main>

    {/* Footer */}
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Advance Dental Clinic</p>
        <p>Email: <a href="mailto:advancedentalclinic17@gmail.com" className="text-blue-400">advancedentalclinic17@gmail.com</a></p>
        <p>Phone: +919415070200</p>
      </div>
    </footer>
  </div>
);

export default Layout;
