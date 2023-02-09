import React from 'react';
import Lottie from 'react-lottie';
import aiUser from '../Lottie_all_files/profile_dashboard.json'

// const style = {
//     height: 48,
//     width: 48,
//     padding: 0,
// };

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
        <div className='w-6 h-6 text-white p-0 m-0'>
            <Lottie
                className="bg-transparent"
                // style={style}
                options={defaultOptions}
            />
        </div>
    );
};

export default AiUser;