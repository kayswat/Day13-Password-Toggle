

function checkPassword(){
    let eyeIcon = document.getElementById('eyeIcon');
    let password = document.getElementById('password');

    if (password.type == 'password'){
        password.type = 'text';
        eyeIcon.src = 'icon-preview.svg'
    }else{
        password.type = 'password';
        eyeIcon.src = 'icons8-closed-eye-16.png';
    }
}



eyeIcon.addEventListener('click', checkPassword);