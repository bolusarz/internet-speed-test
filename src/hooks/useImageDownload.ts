import {useEffect, useState} from "react";

// Add more images for accuracy
const tests = [
    {
        // A small image less than 1mb
        link: "https://images.pexels.com/photos/27565122/pexels-photo-27565122/free-photo-of-a-black-and-white-photo-of-a-building-with-windows.jpeg",
        frequency: 10
    },
    {
        // An Image greater than 3mb
        link: "https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg",
        frequency: 2
    },
    {
        // An Image between 1mb - 3mb
        link: "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg",
        frequency: 5
    },
    {
        // An Image greater than 3mb
        link: "https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg",
        frequency: 3
    },
]
export const useImageDownload = () => {
    const [netInfo, setNetInfo] = useState({speed: 0, type: ""});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        runTest()
    }, []);

    const runTest = async () => {
        setIsLoading(true)
        const totals = []
        for (const test of tests) {
            let total = 0
            for (let i = 0; i < test.frequency; i++) {
                const startTime = Date.now()
                const response = await fetch(tests[2].link)
                const size = (await response.blob()).size
                const endTime = Date.now()
                const duration = (endTime - startTime) / 1000
                total += size * 8 / duration
            }
            const avg = total / test.frequency
            setNetInfo({
                speed: avg,
                type: ""
            })
            totals.push(avg)
        }


        const avgTotal = totals.reduce((prev, next) => prev + next, 0) / totals.length
        setNetInfo({
            speed: avgTotal,
            type: ""
        })
        setIsLoading(false)
    }

    return {
        ...netInfo,
        isLoading
    }
}