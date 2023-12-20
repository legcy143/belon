import React from 'react'

export default function OurProducts() {
  return (
    <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-5 text-gray-900 text-center">
                    our products
                </h1>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <ProductComponent heading="Quality Assurance" description=" Our rigorous quality control measures guarantee a product that meets internaƟonal standards, making BELON Banshlochan a symbol of reliability." />
                    <ProductComponent heading="Bulk Supply" description=" Whether you're a retailer, distributor, or a wellness brand, BELON is your trusted partner for bulk Banshlochan supply. We cater to your needs with efficiency and consistency. " />
                    <ProductComponent heading="Global Export" description="Elevate your market presence internaƟonally with BELON. We facilitate the export of Banshlochan to various regions, ensuring that the world experiences the profound benefits of this herbal marvel. " />
                </div>
            </div>
        </section>

    )
}


const ProductComponent = (props: any) => {
    return (
        <div className="border border-gray-200 rounded-lg p-5 flex-1 self-stretch">
          
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                {props.heading}
            </h2>
            <p className="leading-relaxed text-base">
                {props.description}
            </p>
            
        </div>
    )
}