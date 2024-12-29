import { FaDiscord, FaTwitter, FaYoutube , FaInstagram, FaFacebook} from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="/img/Madhurima-Favicon.png" className="h-8 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Madhurima</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Youtube</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Email</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://www.instagram.com/madhurima.dtu/" className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Youtube</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">More</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://docs.google.com/document/d/1I0bW4lNbrkK3LnrdDMOK7ewa20GoR_cjyEUTIUoGexA/edit?tab=t.0" className="hover:underline">Auditions</a>
                      </li>

                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Madhurima™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaFacebook className="w-5 h-5" />
                  <span className="sr-only">Facebook page</span>
              </a>
           
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaTwitter className="w-5 h-5" />
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://www.instagram.com/madhurima.dtu/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaYoutube className="w-5 h-5" />
                  <span className="sr-only">Youtube account</span>
              </a>

          </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;