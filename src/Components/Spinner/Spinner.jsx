import { ClipLoader } from 'react-spinners'
import './Spinner.scss'

export const Spinner = () => {
    return(
        <div className="Spinner">
            <ClipLoader 
                color="#36d7b7"
                // loading={loading}
                // cssOverride={override}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1}
            />
        </div>
    )
}