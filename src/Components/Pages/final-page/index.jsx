import './final-page.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function FinalPage() {
    return(
        <div id='final-page' className='final-page'>
            <div className='check'>
                <FontAwesomeIcon className='icon-check' icon={faCheck} />
            </div>

            <div className='span-final'> 
                <span>Congratulations, your registration has been successfully completed.</span>
            </div>
        </div>
    )
}