import EmployeeShiftItem from "./EmployeeShiftItem"
import Image from 'next/image'

interface props {
    photoUrl: string
    name: string
}

const EmployeeRosterItem = (props: props) => {
    const days = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="grid grid-cols-8 bg-white border border-gray-300">
            <div className="flex-1 flex flex-row pl-4 gap-2 border border-gray-300 items-center">
                <Image className="rounded-full object-cover" src={props.photoUrl} alt="image" height={64} width={64} />


                <p className="font-semibold text-gray-500">
                    { props.name }
                </p>
            </div>
            {
                days.map((item, index) => {
                    return (
                        <EmployeeShiftItem key={ index}  />
                    )
                })
            }
        </div>
    )
}

export default EmployeeRosterItem