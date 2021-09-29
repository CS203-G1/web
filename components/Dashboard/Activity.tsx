import ActivityCard from "./ActivityCard"

const Activity = () => {
    const mockData = [
        {
            value: 1472,
            type: "Active Alert",
            change: 2.36
        },
        {
            value: 1472,
            type: "Active Alert",
            change: 2.36
        },
        {
            value: 1472,
            type: "Active Alert",
            change: 2.36
        },
        {
            value: 1472,
            type: "Active Alert",
            change: 2.36
        },
    ]
    return (
        <div className="p-4 flex-1">
            <h1 className="text-xl font-semibold mb-2">
                Activity
            </h1>
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