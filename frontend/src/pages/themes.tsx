import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/images/halloween-theme.jpg";
import city2 from "../assets/images/dino-theme.jpg";
import city3 from "../assets/images/enchanted-forest-theme.jpg";
import planet1 from "../assets/images/classic-theme.jpg";
import planet2 from "../assets/images/enchanted-forest-theme.jpg";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useNavigate } from "react-router-dom";
const Themes = () => {
    const navigate = useNavigate();
    // ... (existing code)

    const handleImageClick = (index) => {
        // Replace this with your actual redirection logic
        console.log(`Clicked on image ${index}`);
        // Navigate to the next page
        navigate("/next-page"); // Replace "/next-page" with your actual route
    };

    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const images = [city1, city2, city3, planet1, planet2];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5, transition: { duration: 0.5 } },
        left1: { x: "-50%", scale: 0.7, zIndex: 3, transition: { duration: 0.5 } },
        left: { x: "-90%", scale: 0.5, zIndex: 2, transition: { duration: 0.5 } },
        right: { x: "90%", scale: 0.5, zIndex: 1, transition: { duration: 0.5 } },
        right1: { x: "50%", scale: 0.7, zIndex: 3, transition: { duration: 0.5 } },
    };

    const descriptions = [
        "Halloween Theme",
        "Dino Theme",
        "Enchanted Forest Theme",
        "Classic Theme",
        "Enchanted Forest Theme",
    ];
    return (
        <>
            <Navbar />
            <div className="bg-black">
                <div className="flex  mr-[37.5rem] items-center flex-col justify-center bg-black h-screen">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageClick(index)}
                        // className="image-button"
                        // style={{ width: "40%", position: "absolute", border: "none", padding: 0, background: "none" }}
                        >
                            <motion.img
                                key={index}
                                src={image}
                                alt={image}

                                className="rounded-[12px]"
                                initial="center"
                                animate={positions[positionIndexes[index]]}
                                variants={imageVariants}
                                whileHover={{ scale: 1.0 }}
                                transition={{ duration: 0.5 }}
                                style={{ width: "40%", position: "absolute" }}
                            />
                        </button>
                    ))}

                    <button
                        className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                    <button
                        className="text-white mt-[207px] ml-[56%] bg-indigo-400 rounded-md py-2 px-4"
                        onClick={handleNext}
                    >
                        Next
                    </button>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Themes;