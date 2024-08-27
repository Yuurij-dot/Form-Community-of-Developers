import '../Pages.css'
import './page-01.css'

import { useContext } from 'react'
import { MyContext } from '../../../Context/formValues'

export function Page01(){
    const {formValues, setFormValues} = useContext(MyContext)

    const handleNome = (e) => {
        setFormValues({...formValues, nome: e.target.value})
    }

    const handleEmail = (e) => {
        setFormValues({...formValues, email: e.target.value})
    }

    const handlePhone = (e) => {
        setFormValues({...formValues, phone: e.target.value})
    }

    return(
        <section id='page-01'>
            <div className="title-page">
                <h1>Personal Information</h1>
                <span>Please provide your personal details so we can get to know you better.</span>
            </div>

            <div className='form'>
                <div>
                    <span>Full Name</span>
                    <input type="text" placeholder="Your Name" onChange={handleNome} />
                </div>

                <div>
                    <span>Email Address</span>
                    <input type="text" placeholder="Your Name" onChange={handleEmail}/>
                </div>

                <div>
                    <span>Phone Number</span>
                    <input type="text" placeholder="Your Name" onChange={handlePhone}/>
                </div>

            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button>Next Step</button>  
            </div>         
        </section>
    )
}