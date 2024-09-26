import {useCloudfare} from "@/hooks";
import {SpinnerCircular} from 'spinners-react';
import {formatSpeed} from "@/utils";

function ByCloudfare() {
    const {speed, isLoading} = useCloudfare()
    return (
        <div className="flex justify-center gap-1.5">
            <p className="text-lg">Internet Speed: {formatSpeed(speed)}</p>
            {isLoading ? <SpinnerCircular className="!w-5"/> : null}
        </div>
    );
}

export default ByCloudfare;