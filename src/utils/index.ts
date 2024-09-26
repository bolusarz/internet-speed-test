
export const formatSpeed = (speed: number) => {
    if (speed >= 1024 * 1024) {
        return `${(speed/(1024*1024)).toFixed(2)}Mbps`
    } else if (speed >= 1024) {
        return `${(speed/1024).toFixed(2)}Kbps`
    }
    return `${(speed).toFixed(2)}bps`
}

export const options = [
    {label: "Use Browser", value: "browser"},
    {label: "Use Image", value: "image"},
    {label: "Use Cloudfare", value: "cloudfare"},
]