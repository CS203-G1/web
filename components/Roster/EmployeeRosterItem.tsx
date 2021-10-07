import EmployeeShiftItem from "./EmployeeShiftItem"

interface props {
    photoUrl: string
    name: string
}

const EmployeeRosterItem = (props: props) => {
    const days = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="grid grid-cols-8 bg-white border border-gray-300">
            <div className="flex-1 flex flex-row pl-4 gap-2 border border-gray-300 items-center">
                <div className="h-10 w-10">
                    <img className="rounded-full object-cover" src={props.photoUrl} alt=""/>
                </div>

                <p className="font-semibold text-gray-500">
                    {props.name}
                </p>
            </div>
            {
                days.map((item, index) => {
                    return (
                        <EmployeeShiftItem />
                    )
                })
            }
        </div>
    )
}

export default EmployeeRosterItem