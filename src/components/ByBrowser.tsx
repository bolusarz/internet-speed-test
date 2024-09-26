import {useNavigator} from "@/hooks";

function ByBrowser() {
    const {speed, type} = useNavigator()
    return (
        <div>
            <p>Internet Speed: {speed}mbps</p>
            <p>Internet Type: {type}</p>
        </div>
    );
}

export default ByBrowser;