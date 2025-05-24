import { useEffect, useState } from "react";

const locationsApi = 'https://rickandmortyapi.com/api/location';

const useLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const res = await fetch(locationsApi)
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await res.json();
                setLocations(data.results);
            } catch (err) {
                console.error('Error', err);
            }
        }

        fetchLocations();
    }, []);

    return locations;
};

export default useLocations;