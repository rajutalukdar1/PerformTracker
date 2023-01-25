import React from 'react'

const Article = ({ article, setId }) => {
  const { _id, title, details, cover, tags, author, publishDate } = article;

  return (
    <div className="card bg-base-100 shadow-xl rounded-md">
      <figure>
        <label onClick={() => setId(_id)} htmlFor='blogDetailsModal' className='w-full'>
          <img className='hover:scale-105 hover:brightness-75 transition-all duration-300 w-full' src={cover} alt="Blog" />
        </label>
      </figure>
      <div className="card-body block p-4">
        <h2 className="card-title">
          <label onClick={() => setId(_id)} htmlFor='blogDetailsModal' className='hover:text-gray-600 transition-all'>{title}</label>
        </h2>
        <p>
          {
            details.length > 100 ? <>
              <span>{details.slice(0, 99)}... </span>
              <small><label onClick={() => setId(_id)} htmlFor='blogDetailsModal' className='underline font-semibold hover:text-gray-600'>Read More</label></small>
            </> :
              details
          }
        </p>
        <div className="card-actions mt-4">
          {
            tags.map((tag, i) => <div
              key={i}
              className="badge badge-outline pt-1 pb-2"
            >{tag}</div>)
          }
        </div>
        <div className='flex items-center gap-3 mt-5'>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={author.img || 'https://i.ibb.co/Qj8XhH5/user.png'} />
            </div>
          </div>
          <div>
            <h4 className='font-semibold leading-5'>Sumon Kaysar</h4>
            <p className='leading-5'><small>{publishDate}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article