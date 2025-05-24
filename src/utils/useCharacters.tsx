import { useEffect, useState } from "react";

const charactersApi = 'https://rickandmortyapi.com/api/character';

const useCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await fetch(charactersApi)
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setCharacters(data.results);
            } catch (err) {
                console.error('Error', err);
            }
        }

        fetchCharacters();
    }, []);

    return characters;
};

export default useCharacters;