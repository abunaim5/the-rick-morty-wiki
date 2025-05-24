import { useEffect, useState } from "react";

const episodesApi = 'https://rickandmortyapi.com/api/episode';

const useEpisodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const res = await fetch(episodesApi)
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setEpisodes(data.results);
            } catch (err) {
                console.error('Error', err);
            }
        }

        fetchEpisodes();
    }, []);

    return episodes;
};

export default useEpisodes;