import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Divider } from '@mui/material';

export default function Drawer({book}) {

    console.log(book);
    const { _id, image, name, category, price, author, description } = book;
    const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);

    const toggleBottomDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event.key === 'Tab') || (event.key === 'Shift'))
        ) {
            return;
        }
        setBottomDrawerOpen(open);
    };

    const list = (
        <Box
            role="presentation"
            onKeyDown={toggleBottomDrawer(false)}
        >
            <div className='w-full h-full bg-[#113f67] text-gray-300 flex items-center justify-center gap-10 p-16'>
                <div className='w-[40%] text-center border-r'>
                    <img className='h-[50vh] object-cover mx-auto shadow-lg shadow-[#e7eaf6]' src={image} alt="" />
                </div>
                <Divider sx={{backgroundColor: "white"}}/>
                <div className='w-[58%]'>
                    <p className='text-2xl font-semibold mb-4  text-gray-100'>{name}</p>
                    <p className='text-lg mb-3 '><span className=' font-semibold text-gray-100'>Category :</span> {category}</p>
                    <p className='text-lg mb-3'><span className=' font-semibold  text-gray-100'>Price :</span> {price} $</p>
                    <p className='text-lg mb-3'><span className=' font-semibold  text-gray-100'>Author :</span> {author}</p>
                    <p className='text-lg mb-3'><span className=' font-semibold  text-gray-100'>Description :</span> {description}</p>
                    <button className='px-10 py-3 rounded-3xl shadow-md shadow-gray-500 bg-green-400 mt-5 text-gray-700 font-semibold hover:bg-green-700 hover:text-white transition-all duration-300'>Buy Now!</button>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            <button
                className="text-[#38598b] bg-[#fbfcff] mx-auto border-[3px] text-sm border-[#38598b] w-[70%] py-1 hover:bg-[#23395a] hover:text-white transition-all duration-200"
                onClick={toggleBottomDrawer(true)}
            >
                Learn More
            </button>
            <SwipeableDrawer
                anchor="bottom"
                open={bottomDrawerOpen}
                onClose={toggleBottomDrawer(false)}
                onOpen={toggleBottomDrawer(true)}
            >
                {list}
            </SwipeableDrawer>
        </div>
    );
}
