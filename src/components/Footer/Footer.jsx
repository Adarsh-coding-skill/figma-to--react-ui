const Footer = () => {
  return (
    <footer className="bg-[#f5f5f3] px-6 py-16">
      <div className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-4
      gap-10
      ">

        <div>
          <h2 className="text-2xl font-semibold">
            Elementum
          </h2>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>Studio</li>
            <li>Services</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Follow Us
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>

      <div className="
      max-w-7xl
      mx-auto
      mt-10
      pt-6
      border-t
      text-gray-500
      text-sm
      ">
        © 2026 Elementum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;