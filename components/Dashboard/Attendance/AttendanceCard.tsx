import AttendanceChart from "./AttendanceChart"

const AttendanceCard = () => {
    return (
        <div className="card bg-white">
            <h1 className="text-xl font-bold mb-3">
                Working History
            </h1>
            <AttendanceChart />
        </div>
    )
}

export default AttendanceCard