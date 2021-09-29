import WorkingChart from "./WorkingChart"


const WorkingCard = () => {
    return (
        <div className="card bg-white flex flex-col justify-between">
            <h1 className="text-xl font-bold">
                Working Format
            </h1>
            <div className="relative flex flex-col gap-3">
                <WorkingChart />
                <div className="h-10 w-10 absolute mx-auto my-auto text-center left-0 right-0 top-0 bottom-0">
                    <div className="text-md">
                        Total
                    </div>
                    <div className="font-bold text-xl">
                        123
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center px-5">
                <div className="flex gap-1 items-center">
                    <div className="p-1 bg-purple-400 rounded-full"/>
                    <div className="text-xs">
                        Remote
                    </div>
                </div>

                <div className="flex gap-1 items-center">
                    <div className="p-1 bg-purple-500 rounded-full"/>
                    <div className="text-xs">
                        On-Site
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkingCard