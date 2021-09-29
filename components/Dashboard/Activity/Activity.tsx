import ActivityCard from "./ActivityCard"

const Activity = () => {
    const mockData = [
        {
            value: 1472,
            type: "Total Employees",
            change: 2.36
        },
        {
            value: 1472,
            type: "Number on leave",
            change: -22.36
        },
        {
            value: 1472,
            type: "New Employee",
            change: 2.36
        },
        {
            value: 1472,
            type: "Covid Rate",
            change: 7.36
        },
    ]
    return (
        <div>
            <div className="flex flex-wrap gap-2">
                {
                    mockData.map((item, index) => {
                        return (
                            <ActivityCard value={item.value} type={item.type} change={item.change} key={index} index={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Activity