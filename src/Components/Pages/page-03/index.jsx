import './page-03.css'
import '../Pages.css'

export function Page03(){
    return(
        <section id="page-03">
            <div className="title-page">
                <h1>Chalenge Preference</h1>
                <span>Please tell us which frontend challeges you would like to participate in.</span>
            </div>

            <div className='form'>
                <div className='page-03-form' id='html'>
                    <input type="checkbox" name="html"/>
                    <span>HTML/CSS/JS</span>
                </div>

                <div className='page-03-form'  id='react'>
                    <input type="checkbox" name="react"/>
                    <span>React JS</span>
                </div>

                <div className='page-03-form'  id='angular'>
                    <input type="checkbox" name="angular"/>
                    <span>Angular JS</span>
                </div>

                <div className='page-03-form'  id='vue'>
                    <input type="checkbox" name="vue"/>
                    <span>Vue JS</span>
                </div>
            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button>Go Back</button>
                <button>Next Step</button>  
            </div> 
        </section>
    )
}