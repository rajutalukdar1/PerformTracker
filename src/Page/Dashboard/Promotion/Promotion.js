import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PromotionDetails from './PromotionDetails/PromotionDetails';

const Promotion = () => {
  const { data: user = [], refetch } = useQuery({
    queryKey: ["promotion"],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/promotion`).then((res) => res.json()),
  });
  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Promoted Employee</th>
                <th>Promotion designation From</th>
                <th>Promotion designation To</th>
                <th>Promotion date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user?.map((promotion, i) =>
                  <PromotionDetails
                    i={i}
                    promotion={promotion}
                    refetch={refetch}
                  ></PromotionDetails>
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Promotion;