import React from 'react';
import { Input } from 'antd';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Button from '../../ui-components/Button/Button.tsx';
import styles from './Registration.module.css';

interface IRegistration {
    email: string,
    password: string,
    repeatPassword: string
}

const Registration = () => {
    const { control, handleSubmit } = useForm<IRegistration>({
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: ''
        }
    });

    const onSubmit: SubmitHandler<IRegistration> = (data) => {
        console.log("Data: ", data)
    }

    return (
        <div className={styles.registrationFormContainer}>
            <h3 className={styles.registrationHeader}>Registration</h3>
            <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
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
                    <div className={styles.formItem}>
                        <p className={styles.nameOfItem}>Repeat Password: </p>
                        <Controller
                            name="repeatPassword"
                            control={control}
                            render={({ field }) => <Input.Password
                                size='large'
                                {...field}
                                placeholder='Repeat Password'
                            />}
                        />
                    </div>
                </div>
                <div className={styles.sendRegister}>
                    <Button
                        size="large"
                        type='primary'
                        htmlType='submit'
                        block
                    >
                        Register
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Registration;