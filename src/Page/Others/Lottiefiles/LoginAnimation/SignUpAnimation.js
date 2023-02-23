import React from 'react';
import Lottie from 'react-lottie';
import sign_up from '../../Lottiefiles/Lottie_all_files/sign_up.json'

const SignUpAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sign_up,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className='max-w-[450px]'>
            <Lottie
                className="lg:w-full bg-transparent"
                options={defaultOptions}
            />
        </div>
    );
};

export default SignUpAnimation;