import React from 'react'

export default function OurProducts() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container p-3 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900 text-center capitalize">
                    our products
                </h1>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <ProductComponent heading="ClayQuit" description="Transform your life with ClayQuit - our revolutionary product craŌed to help you leave the habit of eating clay. Embrace a healthier lifestyle with confidence." />

                    <ProductComponent heading="Nuts NutriƟon" description="Discover the goodness of Nuts NutriƟon, a range that combines taste and health. Nutrient-rich snacks to fuel your daily adventures. " />

                    <ProductComponent heading="Chumantar Digestive Churan" description="Chumantar Unleash the power of Chumantar Digestive Churan for digestive wellness. A tradiƟonal remedy for modern living. " />

                    <ProductComponent heading="Belon Adult Diaper" description="Providing comfort and care, Belon Adult Diaper ensures dignity and ease for individuals with unique needs. " />
                </div>
            </div>
        </section>

    )
}


const ProductComponent = (props: any) => {
    return (
        <div className="border border-gray-200 rounded-lg p-3 flex-1 self-stretch flex flex-col min-w-[14rem] sm:min-w-[18rem] max-w-[30rem]">
            <img className='w-full aspect-video object-cover rounded-md mb-3' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg" alt="img" />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                {props.heading}
            </h2>
            <p className="leading-relaxed text-base flex-1">
                {props.description}
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
        </div>
    )
}