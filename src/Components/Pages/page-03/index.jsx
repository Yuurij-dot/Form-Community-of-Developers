import './page-03.css'
import '../Pages.css'

import { useContext } from 'react'
import { MyContext } from '../../../Context/formValues'

import { backPage, nextPage } from './togglePage'

export function Page03(){
    const {formValues, setFormValues} = useContext(MyContext)
    
    const toggleButton = (e) => {
        const htmlCheckbox = document.getElementById('html-checkbox')
        const reactCheckbox = document.getElementById('react-checkbox')
        const vueCheckbox = document.getElementById('vue-checkbox')
        const angularCheckbox = document.getElementById('angular-checkbox')

        if(e.target.id == 'html-box'){
            htmlCheckbox.checked = !htmlCheckbox.checked
            
            // setFormValues(prevState => ({
            //     ...prevState,
            //     chalenges: 'HTML/CSS/JS'
            // }))
            // console.log(formValues.chalenges)


            // Adicionar os arrays
            // Criar uma validacao
        }
        
        if(e.target.id == 'react-box'){
            reactCheckbox.checked = !reactCheckbox.checked
        }

        if(e.target.id == 'algular-box'){
            angularCheckbox.checked = !angularCheckbox.checked
        }

        if(e.target.id == 'vue-box'){
            vueCheckbox.checked = !vueCheckbox.checked
        }

        console.log(formValues.chalenge)

    }
    return(
        <section id="page-03">
            <div className="title-page">
                <h1>Chalenge Preference</h1>
                <span>Please tell us which frontend challeges you would like to participate in.</span>
            </div>

            <div className='form'>
                <div onClick={toggleButton} id="html-box" className='page-03-form'>
                    <input id='html-checkbox' type="checkbox" name="html"/>
                    <span>HTML/CSS/JS</span>
                </div>

                <div onClick={toggleButton} id="react-box" className='page-03-form' >
                    <input id='react-checkbox' type="checkbox" name="react"/>
                    <span>React JS</span>
                </div>

                <div className='page-03-form'  onClick={toggleButton} id="algular-box">
                    <input id='angular-checkbox' type="checkbox" name="angular"/>
                    <span>Angular JS</span>
                </div>

                <div className='page-03-form'  onClick={toggleButton} id="vue-box">
                    <input id='vue-checkbox' type="checkbox" name="vue"/>
                    <span>Vue JS</span>
                </div>
            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button onClick={backPage}>Go Back</button>
                <button onClick={nextPage}>Next Step</button>  
            </div> 
        </section>
    )
}