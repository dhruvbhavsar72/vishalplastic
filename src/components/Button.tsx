import { Link } from "react-router-dom";

interface ButtonProps {
    productId: string | number;
}

const Button: React.FC<ButtonProps> = ({ productId }) => {
    return (
        <Link to={`/${productId}`} className="explore-btn !no-underline inline-flex items-center font-semibold text-lg !rounded-[50px] bg-[#CC3232] gap-2.5 py-2 overflow-hidden pr-2 pl-4 text-white">
            <span>
                Explore More
            </span>
            <img src="img/btn-icon.png" alt="Button Icon" />
        </Link>
    );
};

export default Button;



// import { Link } from "react-router-dom";

// interface ButtonProps {
//     productId: string | number;
//     useButton?: boolean;          // Optional click handler for <button>
//     imageUrl?: string;              // Optional image URL
//     imageAlt?: string;              // Optional alt text
// }

// const Button: React.FC<ButtonProps> = ({
//     productId,
//     useButton = false,
//     imageUrl,
//     imageAlt = "Button Icon",
// }) => {
//     const commonClasses =
//         "explore-btn inline-flex items-center font-semibold text-lg !rounded-[50px] bg-[#CC3232] gap-2.5 py-2 overflow-hidden pr-2 pl-4 text-white";

//     const content = (
//         <>
//             <span>Explore More</span>
//             {imageUrl && <img src={imageUrl} alt={imageAlt} />}
//         </>
//     );

//     return useButton ? (
//         <button className={commonClasses}>
//             {content}
//         </button>
//     ) : (
//         <Link to={`/${productId}`} className={commonClasses}>
//             {content}
//         </Link>
//     );
// };

// export default Button;

