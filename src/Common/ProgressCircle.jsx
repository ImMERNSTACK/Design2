
const ProgressCircle = ({ percentage, title, description }) => {
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-4">
            <div className="relative w-28 h-28">
                <svg className="w-full h-full">
                    <circle
                        className="text-gray-200"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="transparent"
                        r="36"
                        cx="50%"
                        cy="50%"
                    />
                    <circle
                        className="text-teal-600"
                        strokeWidth="4"
                        strokeDasharray="226"
                        strokeDashoffset={226 - (226 * percentage) / 100}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="36"
                        cx="50%"
                        cy="50%"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-teal-800 chakra-petch-bold">
                    {percentage}%
                </div>
            </div>
            <div className="mt-4 text-center  md:mt-0 md:text-left">
                <h3 className="text-lg font-bold text-teal-800">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default ProgressCircle;