import { useQuery } from '@tanstack/react-query';
import React from 'react'

const BlogDetailsModal = ({ id }) => {
  const { data: { title, details, cover, tags, author, publishDate } = {} } = useQuery({
    queryKey: ['blogs', id],
    queryFn: () =>
      fetch(`https://perform-tracker-server.vercel.app/blogs/${id}`).then(res => res.json()),
  });

  return (
    <div>
      <input type="checkbox" id="blogDetailsModal" className="modal-toggle" />
      <label htmlFor="blogDetailsModal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="blogDetailsModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="card rounded-md mt-5">
            <figure>
              <img className='hover:scale-105 hover:brightness-75 transition-all duration-300 w-full' src={cover} alt="Blog" />
            </figure>
            <div className="card-body block p-4">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <div className="card-actions mt-4">
                {
                  tags?.map((tag, i) => <div
                    key={i}
                    className="badge badge-outline pt-1 pb-2"
                  >{tag}</div>)
                }
              </div>
              <div className='flex items-center gap-3 mt-5'>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={author?.img || 'https://i.ibb.co/Qj8XhH5/user.png'} />
                  </div>
                </div>
                <div>
                  <h4 className='font-semibold leading-5'>{author?.name}</h4>
                  <p className='leading-5'><small>{publishDate}</small></p>
                </div>
              </div>
            </div>
          </div>
        </label>
      </label>
    </div>
  )
}

export default BlogDetailsModal