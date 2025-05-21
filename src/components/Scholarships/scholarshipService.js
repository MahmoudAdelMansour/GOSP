import {useEffect, useState} from "react";
import {getScholarships} from "./api.js";

export const  useScholarships = () => {
    // State for storing scholarships data
    const  [scholarships, setScholarships] = useState([]);

    // state for loading status
    const [isLoading, setIsLoading] = useState(true);
    // state for error
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScholarships = async () => {
            try {
                const data = await getScholarships();
                setScholarships(data);

            }catch (error) {
                setError(error.message || "Something went wrong");
            } finally {
                setIsLoading(false);
            }
        };
        fetchScholarships();
    }, []);
    return { scholarships, isLoading, error };
}