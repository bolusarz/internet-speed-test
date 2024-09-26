import {useEffect, useState} from "react";

export const useNavigator = () => {

    const [netInfo, setNetInfo] = useState({speed: 0, type: ""});

    useEffect(() => {

        const _navigator = navigator  as any

        if ((navigator as any).connection) {
            setNetInfo({
                speed: _navigator?.["connection"]?.downlink,
                type: _navigator?.["connection"]?.effectiveType
            })

            _navigator["connection"].onchange = () => {
                setNetInfo({
                    speed: _navigator?.["connection"]?.downlink,
                    type: _navigator?.["connection"]?.effectiveType
                })
            }
        }

        setNetInfo({
            speed: _navigator?.["connection"]?.downlink,
            type: _navigator?.["connection"]?.effectiveType
        })

        _navigator["connection"].onchange = () => {
            setNetInfo({
                speed: _navigator?.["connection"]?.downlink,
                type: _navigator?.["connection"]?.effectiveType
            })
        }

        return () => {
            if (_navigator["connection"]) {
                _navigator["connection"].onchange = undefined
            }
        }

    }, []);

    return {
        ...netInfo,
        isLoading: false
    }
}