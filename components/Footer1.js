import Link from "next/link";

function Footer1() {
  return (
    <footer className=" text-white bg-black ">
      <div className="flex items-center justify-center ">
        <div className="m-2 items-center  justify-center w-full flex flex-row  mt-8 ml-8 mr-8 max-w-15xl bg-black ">
          <div className="relative ">
            <div className="bg-red p-3 space-y-10 md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-3 md:gap-[100px]">
              <div className=" md:ml-24 md:mt-9  400">
                <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent  text-xl font-medium">
                  Company
                </h1>{" "}
                <br />
                <p className="text-gray-500 font-medium text-base hover:text-blue-600 ">
                  {" "}
                  Strada Studenților 9/11, <br />
                  Chişinău Moldova
                  <br />
                </p>{" "}
                <br />
                <p className="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer ">
                  {" "}
                  <strong className="tracking-wide text-blue-600 font-normal">
                    Phone:
                  </strong>
                  +373 68 43 44 24{" "}
                </p>
                <p className="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer">
                  {" "}
                  <strong className="tracking-wide text-blue-600 font-normal">
                    Email:
                  </strong>{" "}
                  info@gmail.com{" "}
                </p>
              </div>
              <div className="leading-9 md:w-2/4 md:order-3 md:ml-24 ">
                <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent  text-xl font-medium tracking-[0.030rem]">
                  {" "}
                  Useful Links{" "}
                </h1>
                <ul className="mt-2 text-gray-500 font-medium">
                  <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="/" className="hover:text-blue-600">
                      Home
                    </Link>{" "}
                  </li>
                  {/* <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="#" className="hover:text-blue-600">
                      About Us
                    </Link>{" "}
                  </li> */}
                  <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="/services" className="hover:text-blue-600">
                      Services
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="/Contact" className="hover:text-blue-600">
                      Contact
                    </Link>{" "}
                  </li>
                  {/* <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="#" className="hover:text-blue-600">
                      Privacy policy
                    </Link>{" "}
                  </li> */}
                </ul>
              </div>
              <div className="leading-9 md:w-3/4 md:order-4 0">
                <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent  text-xl font-medium tracking-[0.030rem]">
                  {" "}
                  Our Services{" "}
                </h1>
                <ul className="mt-2 text-gray-500 font-medium">
                  <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="/services" className="hover:text-blue-600">
                      UX/UI Design
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="/services" className="hover:text-blue-600">
                      Web Development
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="/services" className="hover:text-blue-600">
                      Marketing
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-chevron-right text-blue-600"></i>{" "}
                    <Link href="/services" className="hover:text-blue-600">
                      Graphic Design
                    </Link>{" "}
                  </li>
                </ul>
              </div>
          
            </div>
            <div className="md:flex hidden bg-black p-3 flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0"></div>
            <footer className="text-gray-600 body-font">
              <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link
                  href="/"
                  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                >
                  <span className="ml-3 text-xl text-white">GUT UI.</span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                  © 2023 GUT UI.
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
