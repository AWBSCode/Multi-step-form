import {Form} from './Form1'
import { Heading } from '../../global/Heading'

export default function Step1({goForward, submitIt}) {
    return <div className="step-1">
        <div className="step-container-content">
        <Heading h1="Presonal Info" p="Please provide your name, email address, and phone number." />

            <div className="step-body">
                <Form goForward={goForward} submitIt={submitIt} />
            </div>

        </div>
    </div>
}