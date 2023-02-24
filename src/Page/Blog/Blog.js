import React, { useState } from 'react';
import Article from './Article';
import bg from '../../Assets/blog/blog-bg.jpg';
import AddBlogModal from './AddBlogModal';
import { useQuery } from '@tanstack/react-query';
import BlogDetailsModal from './BlogDetailsModal';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');

    const [showModal, setShowModal] = useState(true);
    const [id, setId] = useState(null);

    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: () =>
            fetch('https://perform-tracker-server.vercel.app/blogs').then(res => res.json()),
    });

    return (
        <div>
            <div className="hero h-[400px]" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold">Blog</h1>
                        <label onClick={() => setShowModal(true)} htmlFor='addBlogModal' className="btn hover:bg-white btn-outline text-white hover:text-black">Publish a blog</label>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1440px] mx-auto'>
                <div className="mx-5 md:mx-10 my-24">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-12'>
                        {
                            blogs.map(blog => <Article
                                article={blog}
                                setId={setId}
                            />)
                        }
                    </div>
                </div>
            </div>
            {
                showModal && <AddBlogModal
                    refetch={refetch}
                    setShowModal={setShowModal}
                />
            }
            {
                id && <BlogDetailsModal
                    id={id}
                />
            }
        </div>
    );
};

export default Blog;