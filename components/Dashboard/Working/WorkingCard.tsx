import React from "react"
import CardLayout from "../CardLayout"
import WorkingChart from "./WorkingChart"


const WorkingCard = () => {
    return (
        <CardLayout header="Working Statistics">
            <div className="h-full flex xl:flex-col flex-row xl:justify-around">
                <div className="relative flex flex-col gap-3 items-center">
                    <WorkingChart />
                    <div className="h-10 w-10 absolute mx-auto my-auto text-center left-0 right-0 top-0 bottom-0">
                        <div className="text-md">
                            Total
                            </div>
                        <div className="font-bold text-xl">
                            13
                            </div>
                    </div>
                </div>

                <div className="flex xl:flex-row flex-col justify-center gap-10 items-center px-5">
                    <div className="flex gap-1 items-center">
                        <div className="p-1 bg-purple-400 rounded-full" />
                        <div className="text-xs">
                            Remote
                            </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="p-1 bg-purple-500 rounded-full" />
                        <div className="text-xs">
                            On-Site
                            </div>
                    </div>
                </div>
            </div>
        </CardLayout>
    )
}
export default WorkingCard