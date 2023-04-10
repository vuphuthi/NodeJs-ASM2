
import React, { useEffect } from "react"
import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from 'react-icons/rx'
import Product from "./product"
import { IProduct } from "../interfaces/product"
import { getProduct, addProduct } from '../api/product'

const HomePage = () => {
    const slides = [
        {
            url: 'https://www.thuengay.vn/uploads/1200x630/39c2920b81c180d3cfbcc8a8842d71132a6236de0.jpg'
        },
        {
            url: 'https://i.ytimg.com/vi/36HnmEcKDJk/maxresdefault.jpg'
        },
        {
            url: 'https://img4.thuthuatphanmem.vn/uploads/2020/06/26/hinh-anh-banner-dien-may-thong-minh_033705387.png'
        }
        , {
            url: 'https://cdn.tgdd.vn/Files/2015/08/13/684283/tgdd-tragopoppo-800-300.jpg'
        },
        {
            url: 'https://cdn.shopify.com/s/files/1/0046/7887/7256/files/samsung-banner.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(1)
    const prevSlide = () => {
        const isFistSlide = currentIndex === 0;
        const newIndex = isFistSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlice = (slideIndex: any) => {
        setCurrentIndex(slideIndex)
    }
    //product
    const [products, setProducts] = useState<IProduct[]>([])
    console.log(products);
    const { product }: any = products
    useEffect(() => {
        async function fetchProduct() {
            const { data } = await getProduct();
            setProducts(data);
        }
        fetchProduct()
    }, [])


    return <div className="my-[30px] px-[100px]">
        <div className="content">
            <div className="slider max-w-[1800px] h-[400px] w-full m-auto px-2 relative group">
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
                <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate--y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20
                 text-white cursor-pointer">
                    <BsChevronCompactLeft size={30} onClick={prevSlide} />
                </div>
                <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate--y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20
                 text-white cursor-pointer">
                    <BsChevronCompactRight size={30} onClick={nextSlide} />
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlice(slideIndex)} className="text-2xl cursor-pointer">
                            <RxDotFilled />
                        </div>

                    ))}
                </div>

            </div>

            <div className="title my-[30px]">
                <h1 className=" text-start">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
            </div>
            <div className="products">
                <div className="grid grid-cols-4 gap-[55px]">
                    {product?.map((item: IProduct) => (<Product
                        data={item}
                        key={item._id} />))}

                </div>
            </div>
        </div>


    </div>
}

export default HomePage