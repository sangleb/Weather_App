function HighlightCard({footer, data, title} : {footer: string, data: string, title: string}) {
    return(
        <div className="flex flex-col justify-between items-center border bg-white rounded-3xl p-2 h-[12rem] w-[20rem]">
            <div className="font-semibold ml-8 mt-2 text-lg w-full text-left text-gray-400">
                {title}
            </div>
            <div className="text-3xl font-semibold">
                {data}
            </div>
            <div className="ml-8 mb-2 w-full text-left">
                {footer}
            </div>
        </div>
    )
};

export default HighlightCard;