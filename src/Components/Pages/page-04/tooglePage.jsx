
export const backPage = (e) => {
    const page03 = document.getElementById('page-03')
    const page04 = document.getElementById('page-04')

    const contentLevel03 = document.getElementById('content-level-03')
    const button04 = document.getElementById('button04')


    page03.style.display = 'block'
    page04.style.display = 'none'

    contentLevel03.style.backgroundColor = '#e5e7eb'  
    button04.style.backgroundColor = '#e5e7eb'          
}


export const submitForm = (e) => {
    const page04 = document.getElementById('page-04')
    const finalPage = document.getElementById('final-page')

    const levelForm = document.getElementById('level-form')
    const divBar = document.getElementById('div-bar')

    page04.style.display = 'none'
    finalPage.style.display = 'flex'

    levelForm.style.display = 'none'
    divBar.style.display = 'none'
}