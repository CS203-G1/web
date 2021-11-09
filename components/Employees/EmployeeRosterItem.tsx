import { DateTime } from 'luxon'
import { useState } from 'react';
import moment, { Moment } from 'moment'

interface props {
    date: string
    from: string
    to: string
    setDate : (date: Moment) => void
}

const EmployeeRosterItem = (props: props) => {
    const [calander, setCalander] = useState(false)
    return (
        <div className="w-48 shadow-md bg-white p-2 flex flex-col gap-4 rounded-md relative cursor-pointer"
        onMouseEnter={() => {props.setDate(moment(props.date))}}
        onMouseLeave={() => {setCalander(false)}}>
            <h1 className="text-lg font-semibold">
                {DateTime.fromISO(props.date).toFormat('cccc')}
            </h1>
            <div>
                <h2 className="text-gray-500 tracking-tight">
                    {DateTime.fromISO(props.date).toLocaleString(DateTime.DATE_SHORT)}
                </h2>
                <h2 className="text-gray-500 tracking-tight">
                    {DateTime.fromISO(props.from).toLocaleString(DateTime.TIME_24_SIMPLE)} - {DateTime.fromISO(props.to).toLocaleString(DateTime.TIME_24_SIMPLE)}
                </h2>
            </div>
        </div>
    )
}

export default EmployeeRosterItem