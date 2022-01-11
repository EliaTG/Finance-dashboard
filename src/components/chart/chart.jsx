import './chart.css'
import {Timeline, InsertChart} from '@material-ui/icons/';
export default function Chart() {
    return (
        <div className='activitybox'>
            <h3>Activities</h3>
            <Timeline/>
            <InsertChart/>
        </div>
    )
}
