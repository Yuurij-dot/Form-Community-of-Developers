import '../Pages.css'
import './page-01.css'


import { useContext } from 'react'
import { MyContext } from '../../../Context/formValues'

import { nextPage } from './togglePages'

export function Page01(){

    const {formValues, setFormValues} = useContext(MyContext)

    const handleNome = (e) => {
        setFormValues({...formValues, nome: e.target.value})
    }

    const handleEmail = (e) => {
        setFormValues({...formValues, email: e.target.value})
    }

    const handlePhone = (e) => {
        let input = e.target.value;

        // Remove tudo o que não é número
        input = input.replace(/\D/g, '');

        // Aplica a máscara
        if (input.length > 0) {
            input = '(' + input;
        }
        if (input.length > 3) {
            input = input.slice(0, 3) + ') ' + input.slice(3);
        }
        if (input.length > 10) {
            input = input.slice(0, 10) + '-' + input.slice(9, 13);
        }

        setFormValues({...formValues, phone: input})
    }

    // 

    return(
        <section id='page-01'>
            <div className="title-page">
                <h1>Personal Information</h1>
                <span>Please provide your personal details so we can get to know you better.</span>
                <br />
                <span id='erro-span'>Please fill in all fields correctly.</span>
            </div>

            <div className='form'>
                <div>
                    <span id='name-form-span'>* Full Name</span>
                    <input id='input-name' required type="text" placeholder="Your Name" onChange={handleNome} />
                </div>

                <div>
                    <span id='email-form-span'>* Email Address</span>
                    <input id='input-email' required type="email" placeholder="Your Email" onChange={handleEmail}/>
                </div>

                <div>
                    <span id='phone-form-span'>* Phone Number</span>
                    <input maxLength={12} id='input-phone' required type="tel" placeholder="(XX) XXXXX-XXXX" onChange={handlePhone}/>
                </div>

            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <div></div>
                <button onClick={nextPage}>Next Step</button>  
            </div>        

        </section>
    )
}