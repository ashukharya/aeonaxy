export default function Login() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 bg-light">
                <img src="./imag.png" alt="" className="max-h-screen w-full" />
            </div>

            {/* Form Section */}
            <div className="lg:w-1/2 flex justify-center items-center px-12">
                <div className="bg-white p-12 w-full max-w-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-4xl font-bold">Sign up to Dribbble</h2>
                        <a className="text-sm font-medium text-[#ea4c89]" href="#">
                            Already a member? Sign In
                        </a>
                    </div>
                    <div className="mt-6 flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/2 lg:mr-4 mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full border-2 border-gray-300 rounded-md p-2"
                                id="name"
                                placeholder="John"
                                type="text"
                            />
                            <p className="mt-1 text-sm text-red-600">Username has already been taken</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label className="block text-sm font-medium mb-1" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full border border-gray-300 rounded-md p-2"
                                id="username"
                                placeholder="Username"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-300 rounded-md p-2"
                            id="email"
                            placeholder="account@refero.design"
                            type="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">
                            Password
                        </label>
                        <input className="w-full border border-gray-300 rounded-md p-2" id="password" placeholder="6+ characters" type="password" />
                    </div>
                    <div className="flex items-center mb-6">
                        <input className="w-4 h-4" id="terms" type="checkbox" />
                        <label className="ml-2 text-sm" htmlFor="terms">
                            Creating an account means you’re okay with our{" "}
                            <a className="text-[#ea4c89]" href="#">
                                Terms of Service
                            </a>
                            ,{" "}
                            <a className="text-[#ea4c89]" href="#">
                                Privacy Policy
                            </a>
                            , and our default{" "}
                            <a className="text-[#ea4c89]" href="#">
                                Notification Settings
                            </a>
                            .
                        </label>
                    </div>
                    <button className="w-250px bg-[#ea4c89] text-white rounded-md p-2" >Create Account</button>
                    <p className="mt-6 text-xs text-gray-500">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a className="text-[#ea4c89]" href="#">
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a className="text-[#ea4c89]" href="#">
                            Terms of Service
                        </a>{" "}
                        apply.
                    </p>
                </div>
            </div>
        </div>
    )
}
