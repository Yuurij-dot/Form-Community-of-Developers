export const nextPage = (e) => {
    const page03 = document.getElementById('page-03')
    const page04 = document.getElementById('page-04')

    const contentLevel03 = document.getElementById('content-level-03')
    const button04 = document.getElementById('button04')


    page03.style.display = 'none'
    page04.style.display = 'block'

    contentLevel03.style.backgroundColor = '#fc6c4c'  
    button04.style.backgroundColor = '#fc6c4c'          
}

export const backPage = (e) => {
    const page03 = document.getElementById('page-03')
    const page02 = document.getElementById('page-02')

    const contentLevel02 = document.getElementById('content-level-02')
    const button03 = document.getElementById('button03')


    page03.style.display = 'none'
    page02.style.display = 'block'

    contentLevel02.style.backgroundColor = '#e5e7eb'  
    button03.style.backgroundColor = '#e5e7eb'          
}