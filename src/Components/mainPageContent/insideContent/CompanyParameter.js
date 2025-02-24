
import './companyParameter.css'
import { useState, useRef, useEffect } from 'react';
import wallpaperThired from '../../../images/wallpaperThired.png'
import imgOfProductOffering from '../../../images/imgOfProductOffering.png'
import imgOfPriceAndPromotions from '../../../images/imgOfPriceAndPromotions.png'
const CompanyParameter = () => {
    const imgOfStoreOverView = useRef(null);
    const imgOfproductOfferings = useRef(null);
    const imgOfPricingandPromotions = useRef(null);
    const [storeVisible, setStoreVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);
    const [pricingVisible, setPricingVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target === imgOfStoreOverView.current) {
                        setStoreVisible(entry.isIntersecting);
                    }
                    if (entry.target === imgOfproductOfferings.current) {
                        setProductVisible(entry.isIntersecting);
                    }
                    if (entry.target === imgOfPricingandPromotions.current) {
                        setPricingVisible(entry.isIntersecting);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );
        if (imgOfStoreOverView.current) observer.observe(imgOfStoreOverView.current);
        if (imgOfproductOfferings.current) observer.observe(imgOfproductOfferings.current);
        if (imgOfPricingandPromotions.current) observer.observe(imgOfPricingandPromotions.current);
    }, []);

    return (
        <div className='companyParameter'>
            <div className="storeOverView companyParameter__item">
                <div className={`storeOverView__content mainContent storeOverView__content ${storeVisible ? 'animate' : ''}`}>
                    <h1>Store Overview</h1>
                    <figure>
                        <img
                            ref={imgOfStoreOverView}
                            className={`storeOverView__img ${storeVisible ? 'animate' : ''}`}
                            src={wallpaperThired}
                            alt="classic"
                            title="classic"
                            height='200px'
                            width='100%'
                        />
                    </figure>
                    <h2>Wide Range of Mobile Brands || Exclusive Deals</h2>
                </div>
            </div>

            <div className="productOfferings companyParameter__item">
                <div className={`productOfferings__content mainContent productOfferings__content ${productVisible ? 'animate' : ''}`}>
                    <h1>Product Offerings</h1>
                    <figure>
                        <img
                            ref={imgOfproductOfferings}
                            className={`productOfferings__img ${productVisible ? 'animate' : ''}`}
                            src={imgOfProductOffering}
                            alt="classic"
                            title="classic"
                            height='270px'
                            width='100%'
                        />
                    </figure>
                    <h2>Brand Variety || Latest Models</h2>
                </div>
            </div>

            <div className="PricingandPromotions companyParameter__item">
                <div className={`PricingandPromotions__content mainContent PricingandPromotions__content ${pricingVisible ? 'animate' : ''}`}>
                    <h1>Pricing and Promotions</h1>
                    <figure>
                        <img
                            ref={imgOfPricingandPromotions}
                            className={`PricingandPromotions__img ${pricingVisible ? 'animate' : ''}`}
                            src={imgOfPriceAndPromotions}
                            alt="classic"
                            title="classic"
                            height='200px'
                            width='200px'
                        />
                    </figure>
                    <h2>Discounts & Offers || Trade-In Offers || Cashback</h2>
                </div>
            </div>
        </div>
    );
};

export default CompanyParameter