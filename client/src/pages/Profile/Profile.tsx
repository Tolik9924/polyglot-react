import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from 'antd';
import Button from '../../ui-components/Button/Button.tsx';
import Upload from '../../ui-components/Upload/Upload.tsx';
import styles from './Profile.module.css';

interface SaveProfile {
  name: string,
  surname: string,
  email: string,
  password: string,
  repeatPassword: string
}

const Profile = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<SaveProfile>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: ""
    }
  });

  const onSubmit: SubmitHandler<SaveProfile> = (data) => {
    console.log("Data: ", data)
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatarOfUser}>
        <Upload
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          showUploadList={false}
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        />
        <span className={styles.nickname}>Edogaru</span>
        <span className={styles.email}>Email</span>
      </div>
      <form className={styles.profileSettings} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>Profile Settings</h4>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>
            <label className={styles.labels}>Name: </label>
            <div className={styles.inputContainer}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input
                  size='large'
                  {...field}
                  placeholder='Name'
                />}
              />
            </div>
          </div>
          <div className={styles.name}>
            <label className={styles.labels}>Surname: </label>
            <div className={styles.inputContainer}>
              <Controller
                name="surname"
                control={control}
                render={({ field }) => <Input
                  size='large'
                  {...field}
                  placeholder='Surname'
                />}
              />
            </div>
          </div>
        </div>
        <div className={styles.emailContainer}>
          <label className={styles.labels}>Email: </label>
          <div className={styles.inputContainer}>
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
        </div>
        <div className={styles.passwordContainer}>
          <label className={styles.labels}>Password: </label>
          <div className={styles.inputContainer}>
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
        <div className={styles.passwordContainer}>
          <label className={styles.labels}>Repeat Password: </label>
          <div className={styles.inputContainer}>
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
        <div className={styles.buttonContainer}>
          <Button 
            size='large' 
            type='primary' 
            htmlType='submit'
          >
            Save Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;