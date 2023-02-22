import React from 'react';

const EditProfile = () => {
    return (
        <div>
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <form action="" className="space-y-4">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <input
                                    name="name"
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600 mt-2"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div>
                                <input
                                    name="progressed"
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                    placeholder="Progressed"
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    name="cost"
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                    placeholder="Cost"
                                    type="text"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        name="createdby"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Created By"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="status"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Status"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        name="created"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Created On (Ex: 3rd Feb, 2023)"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="deadline"
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                        placeholder="Deadline (Ex: 8th Feb, 2023)"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    name="details"
                                    className="textarea w-full rounded-lg border-transparent p-3 text-sm bg-gray-900 placeholder:text-gray-600"
                                    placeholder="Details"
                                ></textarea>
                            </div>
                            <div className="modal-action justify-center">
                                <button className="px-3 py-2 rounded-lg bg-orange-600 text-white font-semibold" type="submit">Add Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;