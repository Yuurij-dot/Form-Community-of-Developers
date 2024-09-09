
export const nextPage = (e) => {
        const page02 = document.getElementById('page-02')
        const page03 = document.getElementById('page-03')

        const contentLevel02 = document.getElementById('content-level-02')
        const button03 = document.getElementById('button03')

        const erroSpan = document.getElementById('erro-span-page2')

        page02.style.display = 'none'
        page03.style.display = 'block'

        contentLevel02.style.backgroundColor = '#fc6c4c'  
        button03.style.backgroundColor = '#fc6c4c'   

        erroSpan.style.display = 'none'
}

export const backPage = (e) => {
    const page01 = document.getElementById('page-01')
    const page02 = document.getElementById('page-02')

    const contentLevel01 = document.getElementById('content-level-01')
    const button02 = document.getElementById('button02')

    page02.style.display = 'none'
    page01.style.display = 'block'

    contentLevel01.style.backgroundColor = '#e5e7eb'  
    button02.style.backgroundColor = '#e5e7eb'  
}

export const erroPage = (e) => {
    const erroSpan = document.getElementById('erro-span-page2')

    erroSpan.style.display = 'block'
}