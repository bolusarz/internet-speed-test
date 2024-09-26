import './App.css'
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {Label} from "@/components/ui/label.tsx";
import {options} from "@/utils";
import {FC, useState} from "react";
import ByBrowser from "@/components/ByBrowser.tsx";
import ByImage from "@/components/ByImage.tsx";
import ByCloudfare from "@/components/ByCloudfare.tsx";


const InternetSpeedComp: FC<{ value: string }> = ({value}) => {

    switch (value) {
        case "browser":
            return <ByBrowser/>

        case "image":
            return <ByImage/>

        case "cloudfare":
            return <ByCloudfare/>

        default:
            return <p>Do not support component of type {value}</p>
    }

}


function App() {

    const [selectedValue, setSelectedValue] = useState<string>(options[0].value);

    return (
        <main>
            <header className="bg-secondary py-10 mb-20">
                <h1 className="font-bold text-2xl">Internet Speed detector</h1>
            </header>
            <RadioGroup className="flex justify-center mb-10" value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
                {options.map(option => (
                    <div key={option.label} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={option.value}/>
                        <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                ))}
            </RadioGroup>
            <InternetSpeedComp value={selectedValue} />
        </main>
    )
}

export default App
