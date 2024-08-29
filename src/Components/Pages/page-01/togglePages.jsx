export const nextPage = (e) => {
    const page01 = document.getElementById('page-01')
    const page02 = document.getElementById('page-02')

    const contentLevel01 = document.getElementById('content-level-01')
    const button02 = document.getElementById('button02')


    page01.style.display = 'none'
    page02.style.display = 'block'

    contentLevel01.style.backgroundColor = '#fc6c4c'  
    button02.style.backgroundColor = '#fc6c4c'          
}