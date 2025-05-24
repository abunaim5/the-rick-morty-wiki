type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
    image: string;
};

type EpisodeType = {
    id: number;
    name: string;
    episode: string;
};

type LocationType = {
    id: number;
    name: string;
    // episode: string;
};

export type { CharacterType, EpisodeType, LocationType }