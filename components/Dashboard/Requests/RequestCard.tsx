import RequestItem from "./RequestItem"

const RequestCard = () => {
    const data = [
        {
            type: "ART test",
            number: 12,
        },
        {
            type: "PCR test",
            number: 4,
        },
        {
            type: "Vaccination Report",
            number: 5,
        },
        {
            type: "Stay Home Notice",
            number: 2,
        },
    ]
    return (
        <div className="card bg-white flex flex-col overflow-auto">
            <h1 className="text-xl font-bold">
                Requests
            </h1>
            <div className="flex flex-col">
                {
                    data.map((item, index) => {
                        return (
                            <RequestItem key={index} type={item.type} number={item.number} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default RequestCard