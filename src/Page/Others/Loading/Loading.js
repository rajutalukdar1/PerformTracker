import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className='flex justify-center mt-8'>
                <FadeLoader color="#FF0000" />
            </div>
        </div >
    );
};

export default Loading;