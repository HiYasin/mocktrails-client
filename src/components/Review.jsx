import React from 'react';
const GradientStyle = () => ({
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(0deg, rgba(2,0,36,1) 18%, rgba(50,50,87,1) 60%, rgba(74,80,121,1) 78%, rgba(115,125,156,1) 100%)'
});
const Review = () => {
    return (
        <main className="w-full my-14 lg:my-24">
            <section className='pb-4 text-center text-2xl lg:text-4xl lg:pb-8 font-bold'>
                <h3 >Intervieew's Feedbacks</h3>
            </section>
            <section className="rounded-xl flex" style={GradientStyle()}>
                <div className="py-10 px-6 md:px-24 lg:py-16 lg:px-40">
                    <figure className="bg-white pb-4 px-3 text-center md:">
                        <svg
                            className="h-8 mb- text-white dark:text-gray-600"
                            viewBox="0 0 24 27"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="black"
                            ></path>
                        </svg>
                        <blockquote >
                            <p className="text-[10px] font-medium text-gray-900 md:text-lg md:p-16 ">
                                "Landwind is just awesome. It contains tons of predesigned components and pages,
                                starting from a login screen to a complex dashboard. Perfect choice for your next SaaS
                                application."
                            </p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center mt-6">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                alt="Profile of Sakib"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="px-2 text-[9px] lg:text-sm">Sakib Wahid</div>
                                <div className="pl-3 text-[8px] lg:text-xs font-light text-gray-500 dark:text-gray-400">
                                    Undergraduate at IIUC
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </main>
    );
};

export default Review;
