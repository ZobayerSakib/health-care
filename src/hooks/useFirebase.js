import { useEffect, useState } from "react";

const useFirebase = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `services.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return {
        services
    }

}
export default useFirebase;