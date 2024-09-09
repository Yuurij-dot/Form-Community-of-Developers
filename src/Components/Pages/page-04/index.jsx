import { useContext } from "react"
import { MyContext } from "../../../Context/formValues"

import './styles.css'
import { backPage } from "./tooglePage"

export function Page04(){
    const {formValues, setFormValues} = useContext(MyContext)

    return(
        <section id="page-04">
            <div className="title-page">
                <h1>Review and Confirm</h1>
                <span>Please review your Information to make sure everything is accurate.</span>
            </div>

            <div className='content-confirm'>
                
                <div className="box-confirm">
                    <h1>Full Name</h1>
                    <span>{formValues.nome}</span>
                </div>

                <div className="box-confirm">
                    <h1>Email</h1>
                    <span>{formValues.email}</span>
                </div>

                <div className="box-confirm">
                    <h1>Phone number</h1>
                    <span>{formValues.phone}</span>
                </div>

                <div className="box-confirm">
                    <h1>Skill Level</h1>
                    <span>{formValues.skill}</span>
                </div>

                <div className="box-confirm">
                    <h1>Challenge Preference</h1>
                    <span>{formValues.chalenge}</span>
                </div>
            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button onClick={backPage}>Go Back</button>
                <button>Submit</button>  
                
            </div>         
        </section>
    )
}