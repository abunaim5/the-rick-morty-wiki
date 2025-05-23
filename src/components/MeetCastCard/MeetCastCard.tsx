
const MeetCastCard = () => {
    return (
        <div className="relative w-[290px] h-[296px] clip-pentagon overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#84F729]/80 to-[#15BFFD]/80 p-[1px] rounded-[10px] clip-pentagon">
                <div className="h-full w-full p-4 bg-[#1e1f2f]/95 backdrop-blur-sm rounded-[10px] clip-pentagon font-medium text-white">
                    <span>Rick Sanchez</span>
                </div>
            </div>
        </div>
    );
};

export default MeetCastCard;