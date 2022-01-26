import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto py-4">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                        <p className="text-lg text-gray-300 pb-8 leading-relaxed lg:pr-4 text-left">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
                        <div className="flex pb-4 items-center">
                            <i className="fas fa-phone-alt text-white"></i>
                            <p className="pl-4 text-white text-base">+88 01974-238487</p>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-white"></i>
                            <p className="pl-4 text-white text-base">contact.ashraful1@gmail.com</p>
                        </div>
                        <p className="text-lg text-white pt-10 tracking-wide">
                            545, Street 11, Block F
                            <br />
                            Jhenaidah, Bangladesh
                        </p>
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    <form className="bg-white py-4 px-8">
                        <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Drop a Message</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label 
                                        htmlFor="full_name" 
                                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required 
                                        name="full_name" 
                                        type="text" 
                                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Full Name"/>
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label 
                                        htmlFor="email" 
                                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required 
                                        name="email" 
                                        type="email" 
                                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="example@email.com"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label 
                                        htmlFor="phone" 
                                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                            Phone
                                    </label>
                                    <input required
                                        name="phone" 
                                        type="tel" 
                                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="+88 0123456789"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label 
                                    className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                                        Message
                                </label>
                                <textarea 
                                    placeholder="Your Message" 
                                    name="message" 
                                    className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" 
                                    rows="8">
                                </textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;