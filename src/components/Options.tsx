import { useState } from 'react';

export default function Options() {
    const [selectedOptions, setSelectedOptions] = useState(new Set());

    const handleOptionSelect = (option: any) => {
        const updatedOptions = new Set(selectedOptions);
        if (updatedOptions.has(option)) {
            updatedOptions.delete(option);
        } else {
            updatedOptions.add(option);
        }
        setSelectedOptions(updatedOptions);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="p-4 text-left">
                <img src="./logo.png" alt="Logo" className="h-8" />
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className="w-lg">
                    <h1 className="text-3xl font-bold text-center mb-4">Welcome! Let's create your profile</h1>
                    <p className="text-center text-gray-500 mb-8 leading-relaxed">Select the options that best describe you. Don't worry, you can explore other options later.</p>

                    <div className="flex items-center justify-between mb-8">
                        <div className={`option text-center ${selectedOptions.has('option1') ? 'border-pink-500 border-4' : 'border-gray-200 border-2'} rounded-xl p-2`} onClick={() => handleOptionSelect('option1')}>
                            <img src="./option1.png" alt="Option 1" className="w-250 h-250 mb-4" />
                            <input type="checkbox" id="option1" name="options" className="mr-2" checked={selectedOptions.has('option1')} onChange={() => { }} />
                        </div>
                        <div className={`option text-center m-8 ${selectedOptions.has('option2') ? 'border-pink-500 border-4' : 'border-gray-200 border-2'} rounded-xl p-2`} onClick={() => handleOptionSelect('option2')}>
                            <img src="./option1.png" alt="Option 2" className="w-250 h-250 mb-4" />
                            <input type="checkbox" id="option2" name="options" className="mr-2 " checked={selectedOptions.has('option2')} onChange={() => { }} />
                        </div>
                        <div className={`option text-center ${selectedOptions.has('option3') ? 'border-pink-500 border-4' : 'border-gray-200 border-2'} rounded-xl p-2`} onClick={() => handleOptionSelect('option3')}>
                            <img src="./option1.png" alt="Option 3" className="w-250 h-250 mb-4" />
                            <input type="checkbox" id="option3" name="options" className="rounded-full mr-2" checked={selectedOptions.has('option3')} onChange={() => { }} />
                        </div>
                    </div>

                    <div className='justify-center'>
                        <p className="text-md font-semibold text-center mb-4">Anything Else? You can select multiple</p>
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded" style={{ width: "100px" }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
