import { ReactNode, useEffect, useState } from 'react';
import donatePageService from "../../services/donatePageService";

const DonatePage = () => {
    const [components, setComponents] = useState<ReactNode[]>([]);
    const [workPrograms, setWorkPrograms] = useState({});

    useEffect(() => {
    }, []);

    useEffect(() => {
        donatePageService.getDonatePage().then((response) => {
            console.log('donate page', response);
            setComponents(getHomePageComponents(response, workPrograms));
        });
    }, [workPrograms]);

    return <>{components}</>;
};
