import React from 'react';
import Lottie from 'react-lottie';
import aiUser from '../Lottie_all_files/profile_dashboard.json'

const AiUser = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: aiUser,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className='w-10 h-10 text-white'>
            <Lottie
                className="bg-transparent"
                options={defaultOptions}
            />
        </div>
    );
};

export default AiUser;