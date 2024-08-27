import './page-02.css'
import '../Pages.css'

export function Page02(){
    return(
        <section id="page-02">
            <div className="title-page">
                <h1>Skill Level</h1>
                <span>Please tell us about your skill level in frontend development.</span>
            </div>

            <div className='form'>
                <button>Beginner</button>
                <button>Intermediate</button>
                <button>Advanced</button>
                <button>Expert</button>
            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button>Go Back</button>
                <button>Next Step</button>  
            </div> 
        </section>
    )
}