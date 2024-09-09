import './style.css'

export default function LevelForm(){
    const changePage  = (e) =>{
        console.log(e.target.id)

        const button02 = document.getElementById('button02')
        const button03 = document.getElementById('button03')
        const button04 = document.getElementById('button04')

        const page01 = document.getElementById('page-01')
        const page02 = document.getElementById('page-02')
        const page03 = document.getElementById('page-03')
        const page04 = document.getElementById('page-04')

        const contentLevel01 = document.getElementById('content-level-01')
        const contentLevel02 = document.getElementById('content-level-02')
        const contentLevel03 = document.getElementById('content-level-03')

        if( e.target.id == 'button01'){
            e.target.style.backgroundColor = '#fc6c4c'
            button02.style.backgroundColor = '#e5e7eb'
            button03.style.backgroundColor = '#e5e7eb'
            button04.style.backgroundColor = '#e5e7eb'

            contentLevel01.style.backgroundColor = '#e5e7eb'            
            contentLevel02.style.backgroundColor = '#e5e7eb'            
            contentLevel03.style.backgroundColor = '#e5e7eb'            

            page01.style.display = 'block'
            page02.style.display = 'none'
            page03.style.display = 'none'
            page04.style.display = 'none'
        }

        if( e.target.id == 'button02'){
            e.target.style.backgroundColor = '#fc6c4c'
            button03.style.backgroundColor = '#e5e7eb'
            button04.style.backgroundColor = '#e5e7eb'

            contentLevel01.style.backgroundColor = '#fc6c4c'
            contentLevel02.style.backgroundColor = '#e5e7eb'
            contentLevel03.style.backgroundColor = '#e5e7eb'
            

            page02.style.display = 'block'
            page01.style.display = 'none'
            page03.style.display = 'none'
            page04.style.display = 'none'
        }

        if( e.target.id == 'button03'){
            e.target.style.backgroundColor = '#fc6c4c'
            button02.style.backgroundColor = '#fc6c4c'
            button04.style.backgroundColor = '#e5e7eb'

            contentLevel01.style.backgroundColor = '#fc6c4c'
            contentLevel02.style.backgroundColor = '#fc6c4c'
            contentLevel03.style.backgroundColor = '#e5e7eb'

            page03.style.display = 'block'
            page02.style.display = 'none'
            page01.style.display = 'none'
            page04.style.display = 'none'
        }

        if( e.target.id == 'button04'){
            e.target.style.backgroundColor = '#fc6c4c'
            button03.style.backgroundColor = '#fc6c4c'
            button02.style.backgroundColor = '#fc6c4c'

            contentLevel01.style.backgroundColor = '#fc6c4c'
            contentLevel02.style.backgroundColor = '#fc6c4c'
            contentLevel03.style.backgroundColor = '#fc6c4c'


            page04.style.display = 'block'
            page02.style.display = 'none'
            page03.style.display = 'none'
            page01.style.display = 'none'
        }
    }


    return(
        <div className='level-form'>
            <div className="level level-01">
                <button id='button01'>1</button>
            </div>

            <div id='content-level-01' className="content-level content-level-01"></div>

            <div className="level level-02">
                <button id='button02'>2</button>
            </div>

            <div id='content-level-02' className="content-level content-level-02"></div>

            <div className="level level-03">
                <button id='button03'>3</button>
            </div>
            
            <div id='content-level-03' className="content-level content-level-03"></div>

            <div className="level level-04">
                <button id='button04'>4</button>
            </div>
        </div>
    )
}