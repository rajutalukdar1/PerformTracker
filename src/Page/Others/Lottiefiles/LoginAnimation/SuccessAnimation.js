import React from 'react';
import Lottie from 'react-lottie';
import sign_up from '../../Lottiefiles/Lottie_all_files/thank_you.json'

const SuccessAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sign_up,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className=''>
            <Lottie
                className="lg:w-full bg-transparent"
                options={defaultOptions}
            />
        </div>
    );
};

export default SuccessAnimation;