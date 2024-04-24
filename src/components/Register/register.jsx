import React, { useState } from 'react'
import styles from './register.module.scss'
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form'

export function Register() {

    const [openEye1, setOpenEye1] = useState(false)
    const [openEye2, setOpenEye2] = useState(false)

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control,
        watch,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            user: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data, 'register');
        reset();
    }

    return (
        <div className={styles.register}>
            <div className={styles.form}>
                <b>Зарегистрироваться</b>
                <form className={styles.formForm} action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formInput}>
                        <div>
                            <div className={styles.input}>
                                <input type="text" placeholder='Введите ваше имя'
                                    {...register('user', {
                                        required: true
                                    })}
                                />
                            </div>
                            <div className={styles.error}>
                                {errors?.user && <p>Поле обязательно к заполнению</p>}
                            </div>
                        </div>
                        <div>
                            <div className={styles.input}>
                                <input type="email" placeholder='Введите электронную почту'
                                    {...register('email', {
                                        required: true
                                    })}
                                />
                            </div>
                            <div className={styles.error}>
                                {errors?.email && <p>Поле обязательно к заполнению</p>}
                            </div>
                        </div>
                        <div>
                            <Controller
                                name='password'
                                control={control}
                                render={({ field }) => (
                                    <div className={styles.input}>
                                        <input type={openEye1 ? "text" : "password"}
                                            {...field}
                                            placeholder='Введите пароль'
                                        />
                                        <div className={styles.eye} onClick={() => setOpenEye1(!openEye1)}>
                                            {
                                                openEye1 ? <IoMdEye /> : <IoMdEyeOff />
                                            }
                                        </div>
                                    </div>
                                )}
                                rules={{
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 6,
                                        message: 'Минимальная длина пароля 6 символов'
                                    }
                                }}
                            />
                            <div className={styles.error}>
                                {errors?.password && <p>{errors?.password?.message}</p>}
                            </div>
                        </div>
                        <div>
                            <Controller
                                name='confirmPassword'
                                control={control}
                                render={({ field }) => (
                                    <div className={styles.input}>
                                        <input type={openEye2 ? "text" : "password"}
                                            {...field}
                                            placeholder='Повторно введите пароль'
                                        />
                                        <div className={styles.eye} onClick={() => setOpenEye2(!openEye2)}>
                                            {
                                                openEye2 ? <IoMdEye /> : <IoMdEyeOff />
                                            }
                                        </div>
                                    </div>
                                )}
                                rules={{
                                    required: 'Поле обязательно к заполнению',
                                    minLength: {
                                        value: 6,
                                        message: 'Минимальная длина пароля 6 символов'
                                    },
                                    validate: (value) => value === watch('password') || 'Пароли не совпадают'
                                }}
                            />
                            <div className={styles.error}>
                                {errors?.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}
                            </div>
                        </div>
                        <a href="">Забыли пароль?</a>
                        <button>Зарегистрироваться</button>
                    </div>
                    <div className={styles.text}>
                        <p>У вас уже есть аккаунт?</p>
                        <NavLink to="/login" >Войдите</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

