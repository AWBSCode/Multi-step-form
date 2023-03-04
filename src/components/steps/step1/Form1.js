import { FormPart } from "./FormPart";
import Next from '../../global/Next'

export function Form({goForward, submitIt}) {
    return ( <form className="from1" onSubmit={submitIt} >
        <FormPart type="text" label="Name" holder="e.g Stephen King" />
        <br />
        <FormPart type="email" label="Email Address" holder="e.g. stephenking@lorem.com" />
        <br />
        <FormPart type="number" label="Phone Number" holder="e.g. +1 234 567 890" />

        <Next text="Next Step" clickHandler={goForward}  />
    </form> )
}