import './page-02.css'
import '../Pages.css'

import { useContext } from 'react'
import { MyContext } from '../../../Context/formValues'

import { backPage, nextPage, erroPage} from './togglePages'

export function Page02(){
    const {formValues, setFormValues} = useContext(MyContext)

    const selectButton = (e) => {
        setFormValues({...formValues, skill: e.target.id})

        const beginner = document.getElementById('Beginner')
        const intermediate = document.getElementById('Intermediate')
        const advanced = document.getElementById('Advanced')
        const expert = document.getElementById('Expert')

        if( e.target.id == 'Beginner'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            intermediate.style.backgroundColor = '#fff'
            intermediate.style.color = '#111'
            advanced.style.backgroundColor = '#fff'
            advanced.style.color = '#111'
            expert.style.backgroundColor = '#fff'
            expert.style.color = '#111'
        }

        if( e.target.id == 'Intermediate'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            beginner.style.backgroundColor = '#fff'
            beginner.style.color = '#111'
            advanced.style.backgroundColor = '#fff'
            advanced.style.color = '#111'
            expert.style.backgroundColor = '#fff'
            expert.style.color = '#111'
        }

        if( e.target.id == 'Advanced'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            intermediate.style.backgroundColor = '#fff'
            intermediate.style.color = '#111'
            beginner.style.backgroundColor = '#fff'
            beginner.style.color = '#111'
            expert.style.backgroundColor = '#fff'
            expert.style.color = '#111'
        }

        if( e.target.id == 'Expert'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            intermediate.style.backgroundColor = '#fff'
            intermediate.style.color = '#111'
            advanced.style.backgroundColor = '#fff'
            advanced.style.color = '#111'
            beginner.style.backgroundColor = '#fff'
            beginner.style.color = '#111'
        }
    }
    return(
        <section id="page-02">
            <div className="title-page">
                <h1></h1>
                <h1>Skill Level</h1>
                <span>Please tell us about your skill level in frontend development.</span>
                <br />
                <span id='erro-span-page2'>Please select your level in front end development</span>
            </div>

            <div className='form'>
                <button id='Beginner' onClick={selectButton}>Beginner</button>
                <button id='Intermediate' onClick={selectButton}>Intermediate</button>
                <button id='Advanced' onClick={selectButton}>Advanced</button>
                <button id='Expert' onClick={selectButton}>Expert</button>
            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button onClick={backPage}>Go Back</button>
                <button onClick={() => (formValues.skill != '') ? nextPage() : erroPage('Erro')} >Next Step</button>  
            </div> 
        </section>
    )
}