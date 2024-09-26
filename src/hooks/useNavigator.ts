import {useEffect, useState} from "react";

export const useNavigator = () => {

    const [netInfo, setNetInfo] = useState({speed: 0, type: ""});

    useEffect(() => {

        setNetInfo({
            speed: navigator.connection?.downlink,
            type: navigator.connection?.effectiveType
        })

        navigator.connection.onchange = () => {
            setNetInfo({
                speed: navigator.connection?.downlink,
                type: navigator.connection?.effectiveType
            })
        }

        return () => {
            navigator.connection.onchange = undefined
        }

    }, []);

    return {
        ...netInfo,
        isLoading: false
    }
}