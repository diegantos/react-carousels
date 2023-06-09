import { ClipLoader } from 'react-spinners'
import './Spinner.scss'

export const Spinner = () => {
    return(
        <div className="Spinner">
            <ClipLoader
                color="#36d7b7"
                loading={true}
                // cssOverride={override}
                size={80}
                speedMultiplier={1}
            />
        </div>
    )
}