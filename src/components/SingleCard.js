'use client';
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineHeart, } from "react-icons/ai";
import Link from "next/link";
const SingleCard = ({item}) => {
    return (
        <div className="flex flex-col gap-1 justify-between shadow hover:shadow-lg rounded">
            {/* Card Top */}
            <div className="flex flex-col justify-between h-full ">
                <div className="relative h-full w-full">
                    {/* Only for singleData */}
                    {/* Favorite & share button */}
                    <div className="flex justify-between items-center absolute top-2 right-2">
                        <AiOutlineHeart className="text-2xl cursor-pointer" />
                    </div>
                    {/* Card image */}
                    <img
                        src={item?.img_url}
                        className="w-full object-cover object-center rounded-t"
                    />
                </div>
                {/* Card Bottom details */}
                <div className="flex flex-col gap-3 p-4">
                    {/* Card heading */}
                    <h4 className="font-bold text-lg">{item?.Recipe_title}</h4>
                </div>
            </div>
            {/* Read more link */}
            <Link href={`/recipes/1726`} className="max-w-max">
                <a className="flex gap-2 items-center p-4 mt-4 hover:border-primary hover:text-primary">
                    Read more
                    <BsArrowUpRight />
                </a>
            </Link>
        </div>
    );
};

export default SingleCard;