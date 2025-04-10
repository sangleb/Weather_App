function TopRow(){
    return(
        <div className="flex justify-between items-center w-full px-12 py-2">
            <div className="flex items-center justify-center text-xl font-semibold">
                {/* Today and week */}
                <div className="mr-4">
                    today
                </div>

                <div className="ml-4 text-primary">
                    week
                </div>
            </div>

            <div className="flex items-center justify-between">
                {/* c or F */}
                <div className="mx-60 border rounded-[100%] bg-black text-white px-[14px] py-3">
                    °C
                </div>
                <div className="border rounded-[100%] bg-white text-black px-[14px] py-3">
                    °F
                </div>
            </div>
        </div>
    )
}

export default TopRow;