import React from 'react';

const ClientDetails = () => {
    const {_id,img, company } = useLoaderData();
    return (
        <div>
            <p>Client Details</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ea assumenda fugiat officiis doloribus? Voluptates voluptate aut esse facilis iusto atque, praesentium excepturi ipsa, architecto maiores minus rem laboriosam inventore.</p>
        </div>
    );
};

export default ClientDetails;