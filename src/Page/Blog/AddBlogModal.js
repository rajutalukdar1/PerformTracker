import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AddBlogModal = ({ refetch, setShowModal }) => {
  const { user } = useContext(AuthContext);
  const { register, formState: { errors }, reset, handleSubmit } = useForm();

  const tags = ['Redux', 'React.js', 'Javascript', 'CSS', 'HTML', 'Node.js', 'MongoDB', 'Express.js'];

  const handleAddBlog = data => {
    const formData = new FormData();
    formData.append('image', data.cover[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success && imgData.status === 200) {
          const article = {
            ...data,
            cover: imgData.data.display_url,
            author: {
              name: user?.displayName,
              img: user?.photoURL
            },
            publishDate: moment().format('Do MMMM, YYYY')
          }
          fetch('https://perform-tracker-server.vercel.app/blogs', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(article)
          })
            .then(res => res.json())
            .then(result => {
              if (result.acknowledged) {
                toast.success('Blog added successfully');
                reset();
                refetch();
                setShowModal(false)
              }
            }).catch(err => console.error(err))
        }
      }).catch(err => console.error(err))
  }

  return (
    <div>
      <input type="checkbox" id="addBlogModal" className="modal-toggle" />
      <label htmlFor="addBlogModal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="addBlogModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {
            user?.uid ? <>
              <h2 className="text-2xl text-center font-bold">Publis a Blog</h2>
              <form onSubmit={handleSubmit(handleAddBlog)} className="mt-4">
                <div className="form-control mb-3">
                  <input type="text" placeholder="Title" className="input input-bordered rounded" {...register("title", { required: "Title can't be blank" })} />
                  <p className="text-error font-bold"><small>{errors.title && errors.title.message}</small></p>
                </div>
                <div className="form-control mb-3">
                  <textarea className="textarea textarea-bordered rounded" placeholder="Write in details..." {...register("details", { required: "Details can't be blank" })}></textarea>
                  <p className="text-error font-bold"><small>{errors.details && errors.details.message}</small></p>
                </div>
                <div className="form-control mb-3">
                  <div className='flex gap-3 items-top'>
                    <span className='text-xl font-semibold mt-1'>Topics:</span>
                    <div className='flex flex-wrap gap-3 items-baseline'>
                      {
                        tags.map((tag, i) => <label key={i} className="label cursor-pointer gap-2">
                          <input type="checkbox" value={tag} className="checkbox checkbox-primary rounded" {...register("tags", { required: "Please choose a tag" })} />
                          <span className="label-text">{tag}</span>
                        </label>)
                      }
                    </div>
                  </div>
                  <p className="text-error font-bold"><small>{errors.tags && errors.tags.message}</small></p>
                </div>
                <div className="form-control mb-6">
                  <input type="file" className="file-input file-input-bordered rounded" accept='image/*' {...register("cover", { required: "Please choose an image" })} />
                  <p className="text-error font-bold"><small>{errors.cover && errors.cover.message}</small></p>
                </div>
                <div className="form-control mb-3">
                  <button type='submit' className="btn btn-primary text-white">Publish</button>
                </div>
              </form>
            </> :
              <h3 className='text-lg md:text-2xl font-semibold text-center mt-2'>You need to <Link className='link text-blue-600' to='/login'>login</Link> first to publish a blog</h3>
          }
        </label>
      </label>
    </div>
  )
}

export default AddBlogModal