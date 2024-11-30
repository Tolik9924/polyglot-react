import React from 'react';

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import styles from './Login.module.css';
import { Button, Input } from 'antd';

interface ILogin {
    username: string,
    password: string,
  }

const Login = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ILogin>({
        defaultValues: {
          username: "",
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
                <div className={styles.formItem}>
                    <p className={styles.nameOfItem}>Username: </p>
                    <Controller 
                        name="username"
                        control={control}
                        render={({ field }) => <Input 
                            size='large' 
                            {...field}
                            placeholder='Email or Phone'
                        />}
                    />
                </div>
                <div className={styles.formItem}>
                    <p className={styles.nameOfItem}>Password: </p>
                    <Controller 
                        name="password"
                        control={control}
                        render={({ field }) => <Input 
                            size='large' 
                            {...field} 
                            placeholder='Password'
                        />}
                    />
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