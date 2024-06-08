import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Spinner = ({ className = "" } : { className: string }) => {
    return <AiOutlineLoading3Quarters className={`animate-spin ${className}`} />
}

export default Spinner;