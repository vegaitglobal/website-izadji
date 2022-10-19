import { ReactNode, useEffect, useState } from 'react';
import donatePageService from "../../services/donatePageService";

const DonatePage = () => {
    const [components, setComponents] = useState<ReactNode[]>([]);
    const [workPrograms, setWorkPrograms] = useState({});

    useEffect(() => {
        donatePageService.getDonatePage().then((response) => {
            console.log('donate page', response);
        });
    }, [workPrograms]);

    return <>{components}</>;
};
