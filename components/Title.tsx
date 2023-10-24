import { TbSquareRotatedFilled } from "react-icons/tb"

export const Title: React.FC<{ title: string }> = ({ title }) => {
    const iconStyle = {
        display: 'inline',
        verticalAlign: 'middle', // This property ensures vertical alignment with the text
        marginRight: '5px' // Add spacing between the icon and the text
    };

    return (
        <div className="inline-flex text-center mx-auto text-primary" data-aos="zoom-out">
            <h1 className="text-center font-extrabold text-4xl">
                <TbSquareRotatedFilled size={15} style={iconStyle} /> {title} <TbSquareRotatedFilled size={15} style={iconStyle} />
            </h1>
        </div>
    )
}
