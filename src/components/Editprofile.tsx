import { FaCamera } from 'react-icons/fa';
import { useState } from 'react';

export default function EditProfile() {
    const [profileImage, setProfileImage] = useState("");

    const handleImageChange = (e: any) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setProfileImage(imageUrl);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="p-4 text-left">
                <img src="./logo.png" alt="Logo" className="h-8" />
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className="max-w-lg w-full bg-white rounded-md p-8 lg:p-0">
                    <h1 className="text-3xl font-bold text-center mb-4">Welcome! Let's create your profile</h1>
                    <p className="text-center text-gray-500 mb-8 leading-relaxed">Let others get to know you better! You can do these later</p>

                    <div className="flex flex-col  mb-16">
                        <h2 className="text-xl font-semibold text-left mb-8">Add an Avatar</h2>
                        <label htmlFor="profile-image" className="relative cursor-pointer flex items-center">
                            <div className="lg:w-40 lg:h-40 bg-gray-200  w-20 h-20 rounded-full flex items-center justify-center mr-4">
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <FaCamera className="text-gray-400 w-6 h-6" />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="m-8 text-lg mb-1">Choose image</h3>
                                <p className="m-8 text-sm text-gray-500">Or choose one of our defaults</p>
                            </div>
                            <input type="file" id="profile-image" className="hidden" onChange={handleImageChange} />
                        </label>
                    </div>

                    <div className="flex flex-col items-start mb-4">
                        <h2 className="text-xl font-semibold text-left mb-4">Add Your Location</h2>
                        <input type="text" placeholder="Set a Location" className="border-b-4 p-2 mb-8 w-full" />
                        <button className="bg-pink-500 text-white px-4 py-2 rounded" style={{ width: "200px" }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
