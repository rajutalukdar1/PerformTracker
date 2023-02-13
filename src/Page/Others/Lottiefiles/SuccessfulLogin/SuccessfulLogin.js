import React from 'react';
import Lottie from 'react-lottie';
import successful_login from "../../Others/LottifilesAmimation/blue-successful-login.json";

const SuccessfulLogin = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: successful_login,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    }

    return (
        <div>
            <Lottie
                className="lg:w-full bg-transparent"
                options={defaultOptions}
            />
        </div>
    );
};

export default SuccessfulLogin;