import React from 'react'

const WhyUs = () => {
    return (
        <section className="text-gray-600 body-font my-10">
            <div className="container p-3 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900 text-center">
                    Why choose Belon ??
                </h1>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <WhyUsComponent heading="Quality Assurance" description=" Our rigorous quality control measures guarantee a product that meets internaƟonal standards, making BELON Banshlochan a symbol of reliability." />
                    <WhyUsComponent heading="Bulk Supply" description=" Whether you're a retailer, distributor, or a wellness brand, BELON is your trusted partner for bulk Banshlochan supply. We cater to your needs with efficiency and consistency. " />
                    <WhyUsComponent heading="Global Export" description="Elevate your market presence internaƟonally with BELON. We facilitate the export of Banshlochan to various regions, ensuring that the world experiences the profound benefits of this herbal marvel. " />
                </div>
            </div>
        </section>

    )
}

export default WhyUs


const WhyUsComponent = (props: any) => {
    return (
        <div className="border border-gray-200 rounded-lg p-3 flex-1 self-stretch flex flex-col min-w-[12rem] sm:min-w-[16rem] max-w-[30rem]">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                {props.heading}
            </h2>
            <p className="leading-relaxed text-base">
                {props.description}
            </p>
        </div>
    )
}