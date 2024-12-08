import React, { useState } from 'react';
import { Input } from 'antd';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Button from '../../ui-components/Button/Button.tsx';
import styles from './Profile.module.css';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatarOfUser}>
        <Upload
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          showUploadList={false}
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        <span className={styles.nickname}>Edogaru</span>
        <span className={styles.email}>Email</span>
      </div>
      <div className={styles.profileSettings}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>Profile Settings</h4>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>
            <label className={styles.labels}>Name: </label>
            <div className={styles.inputContainer}>
              <Input placeholder='First Name' />
            </div>
          </div>
          <div className={styles.name}>
            <label className={styles.labels}>Surname: </label>
            <div className={styles.inputContainer}>
              <Input placeholder='Surname' />
            </div>
          </div>
        </div>
        <div className={styles.emailContainer}>
          <label className={styles.labels}>Email: </label>
          <div className={styles.inputContainer}>
            <Input placeholder='Email' />
          </div>
        </div>
        <div className={styles.passwordContainer}>
          <label className={styles.labels}>Password: </label>
          <div className={styles.inputContainer}>
            <Input placeholder='Password' />
          </div>
        </div>
        <div className={styles.passwordContainer}>
          <label className={styles.labels}>Repeat Password: </label>
          <div className={styles.inputContainer}>
            <Input placeholder='Password' />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button size='large' type='primary'>Save Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;