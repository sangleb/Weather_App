import HighlightCard from "../HighlightCards";


function HighlightRow(){
    return(
        <div className="flex flex-wrap  gap-10 px-12 py-2">
            <HighlightCard title="UV Index" data="2.0" footer="low" />
            <HighlightCard title="UV Index" data="2.0" footer="low" />
            <HighlightCard title="UV Index" data="2.0" footer="low"/>
            <HighlightCard title="UV Index" data="2.0" footer="low"/>
            <HighlightCard title="UV Index" data="2.0" footer="low"/>
            <HighlightCard title="UV Index" data="2.0" footer="low"/>            
        </div>
    )
}

export default HighlightRow;