import { Heading } from "../../global/Heading";
import { PlansOptions } from './options/PlansOptions'

export default function Step2() {
    return (
        <div className="step-2">
            <div className="step-container-content">
                {/* Header */}
                <Heading h1="Select your plan" p="You have the option of monthly or yearly billing." />

                {/* options */}
                <PlansOptions />
            </div>
        </div>
    )
}