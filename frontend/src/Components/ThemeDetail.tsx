import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
interface ThemeDetailProps { }

const ThemeDetail: React.FC<ThemeDetailProps> = () => {
    const location = useLocation();
    const { index } = useParams();
    const selectedImage = location.state?.selectedImage || '';
    const selectedDescription = location.state?.selectedDescription || '';
    //   const selectedDescription = descriptions[parseInt(index || '0', 10)];

    return (
        <div>
            <Navbar />

            <div className=' w-[26%] ml-[35%] mt-3'>
                <p className='text-center'>{selectedDescription}</p>
                <img src={selectedImage} alt={selectedImage} />
            </div>
            <Footer />
        </div>
    );
};

export default ThemeDetail;
