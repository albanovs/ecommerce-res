import React, { useState } from 'react'
import './register.css'

function Register() {


    const [inputValue, setInputValue] = useState({
        user: '',
        email: '',
        password1: '',
        password2: ''
    })

    const  handleRegister = (e) => {
        e.preventDefault();
        if(inputValue.user === '' || inputValue.email === '' || inputValue.password1 === '' || inputValue.password2 === '') {
            alert('Заполните все поля')
        } else if(inputValue.password1 !== inputValue.password2) {
            alert('Пароли не совпадают')
        }else {
            console.log(inputValue);
        }
    }

    return (
        <div className='register'>
            <b>Login</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="">
                <div className='formInput'>
                    <input type="text" placeholder='Введите ваше имя' onChange={(e) => setInputValue({ ...inputValue, user: e.target.value })} />
                    <input type="email" placeholder='Введите электроннуюпочту' onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })} />
                    <input type="password" placeholder='Введите пароль' onChange={(e) => setInputValue({ ...inputValue, password1: e.target.value })} />
                    <input type="password" placeholder='Повторно введите пароль' onChange={(e) => setInputValue({ ...inputValue, password2: e.target.value })} />
                    <a href="">Забыли пароль?</a>
                    <button onClick={handleRegister}>Зарегистрироваться</button>
                </div>
                <div className='text'>
                    <p>У вас уже есть аккаунт?</p>
                    <a>Войдите</a>
                </div>
            </form>
        </div>
    )
}

export default Register