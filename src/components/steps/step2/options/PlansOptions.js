import {Plan} from './Plan'
import arcade from '../../../../images/icon-arcade.svg'
import advanced from '../../../../images/icon-advanced.svg'
import pro from '../../../../images/icon-pro.svg'

export function PlansOptions(props) {
    return (
        <form className='flex'>
            <Plan heading="Arcade" pricing="9$/mo" name="month" icon={arcade}  />
            <Plan heading="Advanced" pricing="12$/mo" name="month" icon={advanced} />
            <Plan heading="Pro" pricing="15$/mo" name="month" icon={pro}/>
        </form>
    )
}