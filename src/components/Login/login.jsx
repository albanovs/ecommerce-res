import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { NavLink, Navigate } from 'react-router-dom'; 


export const Login = () => {

    const [openEye, setOpenEye] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false) 

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            user: '',
            password: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data, 'login');
        if (data.loginUser === '123' && data.loginPassword === '123') {
            setIsLoggedIn(true); // устанавливаем isLoggedIn в true, если логин и пароль верны
        } else {
            alert('Неверный логин или пароль');
        }
        reset();
    }

    if (isLoggedIn) {
        return <Navigate to="/private-office" replace />; 
    }

    return (
        <div className="login">
            <div className='form'>
                <b>Авторизоваться</b>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='formInput'>
                        <div>
                            <div className='input'>
                                <input type="text" placeholder='Введите ваше имя'
                                    {...register('loginUser', {
                                        required: true
                                    })}
                                />
                            </div>
                            <div className='error'>
                                {errors?.loginUser && <p>Поле обязательно к заполнению</p>}
                            </div>
                        </div>
                        <div>
                            <Controller
                                name='loginPassword'
                                control={control}
                                render={({ field }) => (
                                    <div className='input'>
                                        <input type={openEye ? "text" : "password"}
                                            {...field}
                                            placeholder='Введите пароль'
                                        />
                                        <div className='eye' onClick={() => setOpenEye(!openEye)}>
                                            {
                                                openEye ? <IoMdEye /> : <IoMdEyeOff />
                                            }
                                        </div>
                                    </div>
                                )}
                                rules={{
                                    required: 'Поле обязательно к заполнению',
                                }}
                            />
                            <div className='error'>
                                {errors?.loginPassword && <p>{errors?.loginPassword?.message}</p>}
                            </div>
                        </div>
                        <a href="">Забыли пароль?</a>
                        <button>Войти</button>
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