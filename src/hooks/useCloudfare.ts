import {useEffect, useState} from "react";
import SpeedTestEngine from "@cloudflare/speedtest";

export const useCloudfare = () => {
    const [netInfo, setNetInfo] = useState({speed: 0, type: ""});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const speedtest = new SpeedTestEngine()
        speedtest.onResultsChange = ({type}) => {
            if (type === "download") {
                setNetInfo({
                    speed: speedtest.results.getSummary().download,
                    type: ""
                })
            }
            // console.log(, type)
        }
        speedtest.onFinish = (results) => {
            setIsLoading(false)
            console.log(results)
        }
        speedtest.play()

        return () => {
            speedtest.restart()
        }
    }, []);

    return {
        ...netInfo,
        isLoading
    }
}