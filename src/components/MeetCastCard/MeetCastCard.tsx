import { CharacterType } from "@/types/types";
import Image from "next/image";

const MeetCastCard = ({ character }: { character: CharacterType }) => {
    return (
        <div className="relative w-full max-w-md clip-pentagon overflow-hidden">
            <div className="bg-gradient-to-br from-[#84F729]/80 to-[#15BFFD]/80 p-[1px] rounded-[10px] clip-pentagon">
                <div className="w-full p-4 bg-[#1e1f2f]/95 backdrop-blur-sm rounded-[10px] clip-pentagon font-medium text-white flex flex-col items-start">
                    <div className='w-full max-h-[216px] mb-6'>
                        <Image className='w-full h-auto max-h-[216px] object-cover rounded-[3.7px]' width={0} height={0} sizes='100vw' alt={`Image of ${character.name}`} src={character.image} />
                    </div>
                    <span>{character.name}</span>
                </div>
            </div>
        </div>
    );
};

export default MeetCastCard;