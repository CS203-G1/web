import React from "react"
import Layout from "../components/Common/Layout"
import EmployeeRosterItem from "../components/Roster/EmployeeRosterItem"

const Roster = () => {
    return (
        <Layout header="Roster Imum Occupancy 150">
            <div className="flex flex-col">
                <div className="grid grid-cols-6">
                    <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                    </div>
                    <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                        Mon
                    </div>
                    <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                        Tues
                    </div>
                    <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                        Wed
                    </div>
                    <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                        Thurs
                    </div>
                    <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                        Fri
                    </div>
                </div>

                <EmployeeRosterItem name="Bing Yu Ling Yu" photoUrl="https://picsum.photos/200" />
                <EmployeeRosterItem name="Yoghurt Dog" photoUrl="https://picsum.photos/200" />
                <EmployeeRosterItem name="Rui Xian" photoUrl="https://picsum.photos/200" />
                <EmployeeRosterItem name="Arvin Aik" photoUrl="https://picsum.photos/200" />
            </div>
        </Layout>
    )
}
export default Roster