
interface props {
    name: string
    department: string
    status: string
}

type dict = {
    [key: string]: string
}

const EmployeesOnSite = (props:props) => {
    const color:dict = {
        "Vaccinated ": "green", 
        "ART Tested": "blue",
        "PCR Tested": "indigo", 
        "Not Tested": "red"
    }
    return (
        <div className="grid grid-cols-3 py-3 hover:bg-blue-200 rounded-md px-2 cursor-pointer transform hover:scale-105 transition duration-150 ease-in-out">
            <div>
                { props.name }
            </div>

            <div>
                { props.department }
            </div>

            <div className="flex flex-row gap-2 items-center">
                <span className={ `p-1 bg-${color[props.status]}-500 rounded-full` }></span>
                <span>{ props.status }</span>
            </div>
        </div>
    )
}
export default EmployeesOnSite