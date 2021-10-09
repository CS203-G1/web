import React, { useState } from "react"
import Layout from "../components/Common/Layout"
import EmployeeRosterItem from "../components/Roster/EmployeeRosterItem"
import { Button, DatePicker, Dropdown, Menu } from 'antd'
import { Moment } from "moment"
import moment from "moment"
// @ts-ignore
import { UilAngleDown, UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
import RosterScheduling from "../components/Roster/RosterScheduling"

const Roster = () => {

    const [date, setDate] = useState<string>(moment().format("LL"))

    const dateOnChange = (date: Moment | null, dateString: string) => {
        setDate(dateString)
    }

    const menu = (<Menu>
        <Menu.Item>
            <div>
                Tampines
                    </div>
        </Menu.Item>
        <Menu.Item>
            <div>
                Tampines
                    </div>
        </Menu.Item>
    </Menu>)

    return (
        <Layout header="Roster Imum Occupancy 120">
            <div className="flex flex-col gap-10">

                <div>
                    <div className="flex flex-row gap-2 items-center">
                        <DatePicker onChange={dateOnChange} />
                        <Dropdown overlay={menu} placement="bottomLeft">
                            <button className="flex gap-1 h-full items-center bg-white">
                                <span>
                                    Work Location
                                </span>
                                <UilAngleDown />
                            </button>
                        </Dropdown>
                    </div>
                    <div>
                        <div className="grid grid-cols-8">
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
                            <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                                Sat
                        </div>
                            <div className="flex-1 bg-white border border-gray-300 py-4 text-center font-bold text-indigo-500">
                                Sun
                        </div>
                        </div>
                        <EmployeeRosterItem name="Bing Yu Ling Yu" photoUrl="https://picsum.photos/200" />
                        <EmployeeRosterItem name="Yoghurt Dog" photoUrl="https://picsum.photos/200" />
                        <EmployeeRosterItem name="Rui Xian" photoUrl="https://picsum.photos/200" />
                        <EmployeeRosterItem name="Arvin Aik" photoUrl="https://picsum.photos/200" />
                    </div>
                </div>

                <RosterScheduling />
            </div>
        </Layout>
    )
}
export default Roster