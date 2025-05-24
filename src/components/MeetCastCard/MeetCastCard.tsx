import { CharacterType } from "@/types/types";
import Image from "next/image";

const MeetCastCard = ({character}: {character: CharacterType}) => {
    return (
        <div className="relative w-[290px] h-[296px] clip-pentagon overflow-hidden inline-block snap-start">
            <div className="absolute inset-0 bg-gradient-to-br from-[#84F729]/80 to-[#15BFFD]/80 p-[1px] rounded-[10px] clip-pentagon">
                <div className="h-full w-full p-4 bg-[#1e1f2f]/95 backdrop-blur-sm rounded-[10px] clip-pentagon font-medium text-white">
                    <Image className='w-[258px] h-[216px] rounded-[3.7px] mb-6' width={300} height={300} alt={`Image of ${character.name}`} src={character.image} />
                    <span>{character.name}</span>
                </div>
            </div>
        </div>
    );
};

export default MeetCastCard;