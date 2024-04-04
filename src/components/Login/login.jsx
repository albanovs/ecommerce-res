import React, { useState } from 'react'
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export const Login = () => {

    const [openEye, setOpenEye] = useState(false)
    const [inputValue, setInputValue] = useState({
        user: '',
        password: ''
    })

    const handleRegister = (e) => {
        e.preventDefault();
        if (inputValue.user === '' || inputValue.password === '') {
            alert('Заполните все поля')
        } 
         else {
            console.log(inputValue);
            alert('Вы вошли в аккаунт')
            setInputValue({
                user: '',
                password: ''
            })
        }
    }

    return (
        <div className="login">
            <div className='form'>
                <b>Авторизоваться</b>
                <form action="">
                    <div className='formInput'>
                        <div className='input'>
                            <input type="text" placeholder='Введите ваше имя'
                                onChange={(e) => setInputValue({ ...inputValue, user: e.target.value })}
                                value={inputValue.user}
                            />
                        </div>
                        <div className='input'>
                            <input type={openEye ? "text" : "password"}
                                placeholder='Введите пароль'
                                onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
                                value={inputValue.password}
                            />
                            <div className='eye' onClick={() => setOpenEye(!openEye)}>
                                {
                                    openEye ? <IoMdEye /> : <IoMdEyeOff /> 
                                }
                            </div>
                        </div>
                        <a href="">Забыли пароль?</a>
                        <button onClick={handleRegister}>Войти</button>
                    </div>
                    <div className='text'>
                        <p>У вас нет учетной записи?</p>
                        <NavLink to="/register">Создайте</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}