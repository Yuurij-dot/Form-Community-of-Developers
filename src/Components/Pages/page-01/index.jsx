import '../Pages.css'
import './page-01.css'

export function Page01(){
    return(
        <section id='page-01'>
            <div className="title-page">
                <h1>Personal Information</h1>
                <span>Please provide your personal details so we can get to know you better.</span>
            </div>

            <div className='form'>
                <div>
                    <span>Full Name</span>
                    <input type="text" placeholder="Your Name" />
                </div>

                <div>
                    <span>Email Address</span>
                    <input type="text" placeholder="Your Name" />
                </div>

                <div>
                    <span>Phone Number</span>
                    <input type="text" placeholder="Your Name" />
                </div>

            </div>

            <div className='div-bar'></div>

            <div className='button-div'>
                <button>Next Step</button>  
            </div>         
        </section>
    )
}