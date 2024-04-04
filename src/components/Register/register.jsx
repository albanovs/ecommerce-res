import React, { useState } from 'react'
import './register.css'
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { NavLink } from 'react-router-dom';


function Register() {

    const [openEye1, setOpenEye1] = useState(false)
    const [openEye2, setOpenEye2] = useState(false)
    const [inputValue, setInputValue] = useState({
        user: '',
        email: '',
        password1: '',
        password2: ''
    })

    const handleRegister = (e) => {
        e.preventDefault();
        if (inputValue.user === '' || inputValue.email === '' || inputValue.password1 === '' || inputValue.password2 === '') {
            alert('Заполните все поля')
        } else if (inputValue.password1 !== inputValue.password2) {
            alert('Пароли не совпадают')
        } else {
            console.log(inputValue);
            alert('Регистрация прошла успешно')
            setInputValue({
                user: '',
                email: '',
                password1: '',
                password2: ''
            })
        }
    }

    return (
        <div className='register'>
            <div className='form'>
                <b>Зарегистрироваться</b>
                <form action="">
                    <div className='formInput'>
                        <div className='input'>
                            <input type="text" placeholder='Введите ваше имя'
                                onChange={(e) => setInputValue({ ...inputValue, user: e.target.value })}
                                value={inputValue.user}
                            />
                        </div>
                        <div className='input'>
                            <input type="email" placeholder='Введите электронную почту'
                                onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                                value={inputValue.email}
                            />
                        </div>
                        <div className='input'>
                            <input type={openEye1 ? "text" : "password"}
                                placeholder='Введите пароль'
                                onChange={(e) => setInputValue({ ...inputValue, password1: e.target.value })}
                                value={inputValue.password1}
                            />
                            <div className='eye' onClick={() => setOpenEye1(!openEye1)}>
                                {
                                    openEye1 ? <IoMdEye /> : <IoMdEyeOff /> 
                                }
                            </div>
                        </div>
                        <div className='input'>
                            <input type={openEye2 ? "text" : "password"}
                                placeholder='Повторно введите пароль'
                                onChange={(e) => setInputValue({ ...inputValue, password2: e.target.value })}
                                value={inputValue.password2}
                            />
                            <div className='eye' onClick={() => setOpenEye2(!openEye2)}>
                                {
                                    openEye2 ? <IoMdEye /> : <IoMdEyeOff />
                                }
                            </div>
                        </div>
                        <a href="">Забыли пароль?</a>
                        <button onClick={handleRegister}>Зарегистрироваться</button>
                    </div>
                    <div className='text'>
                        <p>У вас уже есть аккаунт?</p>
                        <NavLink to="/login" >Войдите</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register