import React from 'react';

import { Input } from 'antd';
import Button from '../../ui-components/Button/Button.tsx';
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import styles from './Login.module.css';

interface ILogin {
    email: string,
    password: string,
}

const Login = () => {
    const { control, handleSubmit } = useForm<ILogin>({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<ILogin> = (data) => {
        console.log("Data: ", data)
    }

    return (
        <div className={styles.loginFormContainer}>
            <h3 className={styles.loginHeader}>Login</h3>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formItems}>
                    <div className={styles.formItem}>
                        <p className={styles.nameOfItem}>Email: </p>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <Input
                                size='large'
                                {...field}
                                placeholder='Email'
                            />}
                        />
                    </div>
                    <div className={styles.formItem}>
                        <p className={styles.nameOfItem}>Password: </p>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <Input.Password
                                size='large'
                                {...field}
                                placeholder='Password'
                            />}
                        />
                    </div>
                </div>
                <div className={styles.sendLogin}>
                    <Button
                        size="large"
                        type='primary'
                        htmlType='submit'
                        block
                    >
                        Log In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;