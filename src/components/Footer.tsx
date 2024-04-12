// import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { IoMailUnread, IoLogoInstagram, IoBaseballOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="p-4 text-left">
                <img src="./logo.png" alt="Logo" className="h-8" />
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className="w-lg w-full bg-white rounded-md">
                    <h1 className="text-3xl font-bold text-center mb-4">Please verify your email...</h1>
                    <IoMailUnread className="mx-auto text-8xl text-gray-500 mb-4" />
                    <p className="text-center text-gray-500 mb-4 leading-relaxed">
                        Please verify your email address. We've sent a confirmation email to: <br />
                    </p>
                    <p className="text-center font-bold mb-4 leading-relaxed">account@refero.design</p>
                    <p className="text-center text-gray-500 mb-4 leading-relaxed">Click the confirmation link in that email to begin using Dribbble.</p>
                    <p className="text-center text-gray-500 leading-relaxed">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If</p>
                    <p className="text-center text-gray-500 mb-4 leading-relaxed">you still don't see it, you can <span className="text-pink-500 font-bold">resend the confirmation email</span>.</p>
                    <p className="text-center text-gray-500 mb-8 leading-relaxed">Wrong email address? <span className="text-pink-500 font-bold">Change it.</span></p>
                </div>

            </div>
            <footer className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2">
                    <div className="flex gap-8 sm:grid-cols-2 md:text-left text-center">
                        <div className="flex gap-8 sm:grid-cols-2 md:text-left text-center">
                            <div className="max-w-[250px]">
                                <ul className="flex flex-col mt-2 space-y-2">
                                    <li>
                                        <div className="p-4">
                                            <img src="./logo.png" alt="Logo" className="h-8" />
                                        </div>
                                    </li>
                                    <li>
                                        <p className="text-gray-500 leading-relaxed mb-4">
                                            Dribbble is the world's leading community for creatives to share, grow, and get hired.
                                        </p>
                                    </li>
                                    <li>
                                        <div className="flex items-center space-x-4 mb-12">
                                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900"><IoBaseballOutline /></a>
                                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900"><FaFacebook /></a>
                                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900"><FaTwitter /></a>
                                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900"><IoLogoInstagram /></a>
                                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900"><FaPinterest /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="text-gray-600 mt-12">&copy; 2023 Dribbble. All rights reserved.</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h6 className="uppercase font-semibold text-gray-700">For designers</h6>
                                <ul className="mt-2 space-y-2 mr-4">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Go Pro!</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Explore design work</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Design blog</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Playoffs</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Weekly Warm-Up</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Code of conduct</a></li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="uppercase font-semibold text-gray-700">Hire designers</h6>
                                <ul className="mt-2 space-y-2 mr-4 mb-4">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Post a job opening</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Post a freelance project</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Search for designers</a></li>
                                </ul>
                                <h6 className="uppercase font-semibold text-gray-700">Brands</h6>
                                <ul>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Advertise with Us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="uppercase font-semibold text-gray-700">Company</h6>
                                <ul className="mt-2 space-y-2 mr-4">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Media kit</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">API</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="uppercase font-semibold text-gray-700">Directories</h6>
                                <ul className="mt-2 space-y-2 mr-4">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Design Jobs</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Designer's for hire</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Freelance designers for hire</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Tags kit</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Places</a></li>
                                </ul>
                                <h6 className="uppercase font-semibold text-gray-700">Design Assets</h6>
                                <ul className="mt-2 space-y-2 mr-4">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Dribble MarketPlace</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Creative Market</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">FontSpring</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Font Squirrel</a></li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="uppercase font-semibold text-gray-700">Design Resources</h6>
                                <ul className="mt-2 space-y-2 mr-4">
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Freelancing</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Design Hiring</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Design Portfolio</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Design Education</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Creative Process</a></li>
                                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Design Industry Trends</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4 text-gray-600">
                        <p className="text-right">20,501,853 shots dribbbled</p>
                    </div>
                </div>
            </footer>

        </div>

    );
}
