export const nextPage = (e) => {    
    const inputName = document.getElementById('input-name')
    const inputEmail = document.getElementById('input-email')
    const inputPhone = document.getElementById('input-phone')

    const nameFormSpan = document.getElementById('name-form-span')
    const emailFormSpan = document.getElementById('email-form-span')
    const phoneFormSpan = document.getElementById('phone-form-span')
    const erroSpan = document.getElementById('erro-span')

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const testEmail = regex.test(inputEmail.value)

    if(inputName.value.length > 0 && testEmail == true && inputPhone.value.length == 12){
        const page01 = document.getElementById('page-01')
        const page02 = document.getElementById('page-02')

        const contentLevel01 = document.getElementById('content-level-01')
        const button02 = document.getElementById('button02')


        page01.style.display = 'none'
        page02.style.display = 'block'

        contentLevel01.style.backgroundColor = '#fc6c4c'  
        button02.style.backgroundColor = '#fc6c4c'      
    }

    // Mostrar o span de erro
    if(inputName.value.length < 1 || testEmail !== true || inputPhone.value.length != 12){
        erroSpan.style.display = 'block'
    }else{
        erroSpan.style.display = 'none'
    }
    
    // Validação dos formularios
    if(inputName.value.length < 1){
        nameFormSpan.style.color = 'red'
    }else{
        nameFormSpan.style.color = '#111'
    }

    if(testEmail !== true){
        emailFormSpan.style.color = 'red'
    }else{
        emailFormSpan.style.color = '#111'
    }

    if(inputPhone.value.length != 12){
        phoneFormSpan.style.color = 'red'
    }else{
        phoneFormSpan.style.color = '#111'
    }

}