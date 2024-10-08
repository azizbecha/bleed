import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export const ScrollToTopButton: React.FC = () => {

    const [showButton, setShowBtn] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    return (
        <>
            <div className="top-to-btm">
                {" "}
                {showButton && (
                    <FaAngleUp
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                )}{" "}
            </div>
        </>
    )
}