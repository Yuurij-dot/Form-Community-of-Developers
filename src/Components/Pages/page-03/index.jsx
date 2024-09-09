import './page-03.css'
import '../Pages.css'

import { useContext } from 'react'
import { MyContext } from '../../../Context/formValues'

import { backPage, nextPage, erroPage } from './togglePage'

export function Page03(){
    const {formValues, setFormValues} = useContext(MyContext)
    
    const selectButton = (e) => {

        setFormValues({...formValues, chalenge: e.target.name})
        // console.log(e.target.name)

        const html = document.getElementById('html')
        const react = document.getElementById('react')
        const angular = document.getElementById('angular')
        const vue = document.getElementById('vue')

        if( e.target.id == 'html'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            react.style.backgroundColor = '#fff'
            react.style.color = '#111'
            angular.style.backgroundColor = '#fff'
            angular.style.color = '#111'
            vue.style.backgroundColor = '#fff'
            vue.style.color = '#111'
        }

        if( e.target.id == 'react'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            html.style.backgroundColor = '#fff'
            html.style.color = '#111'
            angular.style.backgroundColor = '#fff'
            angular.style.color = '#111'
            vue.style.backgroundColor = '#fff'
            vue.style.color = '#111'
        }

        if( e.target.id == 'angular'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            react.style.backgroundColor = '#fff'
            react.style.color = '#111'
            html.style.backgroundColor = '#fff'
            html.style.color = '#111'
            vue.style.backgroundColor = '#fff'
            vue.style.color = '#111'
        }

        if( e.target.id == 'vue'){
            e.target.style.backgroundColor = '#fc6c4c'
            e.target.style.color = '#fff'

            react.style.backgroundColor = '#fff'
            react.style.color = '#111'
            angular.style.backgroundColor = '#fff'
            angular.style.color = '#111'
            html.style.backgroundColor = '#fff'
            html.style.color = '#111'
        }

    }

    return(
        <section id="page-03">
            <div className="title-page">
                <h1>Chalenge Preference</h1>
                <span>Please tell us which frontend challeges you would like to participate in.</span>
                <span id='erro-span-page3'>Please select your chalenge</span>
            </div>

            <div className='form'>
                <button id='html' name='HTML/CSS/JS' onClick={selectButton}>HTML/CSS/JS</button>
                <button id='react' name='React JS' onClick={selectButton}>React JS</button>
                <button id='angular' name='Angular' onClick={selectButton}>Angular</button>
                <button id='vue' name='Vue' onClick={selectButton}>Vue</button>
            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button onClick={backPage}>Go Back</button>
                <button onClick= {() => (formValues.chalenge != '') ? nextPage() : erroPage()}>Next Step</button>  
            </div> 
        </section>
    )
}