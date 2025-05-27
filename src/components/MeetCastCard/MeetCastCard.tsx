import { CharacterType } from "@/types/types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const MeetCastCard = ({ character }: { character: CharacterType }) => {
    const router = useRouter();
    const location = usePathname();

    return (
        <div onClick={() => router.push(`/cast/${character.id}`)} className={`relative w-full max-w-md clip-pentagon overflow-hidden ${location === '/casts' ? 'cursor-pointer' : 'pointer-events-none'}`}>
            <div className="p-[1px] rounded-lg clip-pentagon bg-gradient-to-br from-[#84F729]/35 to-[#15BFFD]/35">
                <div className="w-full flex flex-col items-start p-4 backdrop-blur-sm rounded-lg clip-pentagon font-medium text-white bg-[#1e1f2f]/80">
                    <div className='w-full max-h-[216px] mb-6'>
                        <Image className='w-full h-auto max-h-[216px] object-cover rounded-md' width={0} height={0} sizes='100vw' alt={`Image of ${character.name}`} src={character.image} />
                    </div>
                    <span className='text-[10px] md:text-base'>{character.name}</span>
                </div>
            </div>
        </div>
    );
};

export default MeetCastCard;