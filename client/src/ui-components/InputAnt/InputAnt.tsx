import React, { ReactNode } from 'react';

import { Input } from 'antd';
import { SizeType, StatusType } from '../parameters/parameters';

export const VariantInput = {
  'outlined': 'outlined',
  'borderless': 'borderless',
  'filled': 'filled',
};

export type VariantInputType = keyof typeof VariantInput;

type Props = {
  size: SizeType;
  variant: VariantInputType,
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  addonAfter?: ReactNode;
  addonBefore?: ReactNode;
  allowClear?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  prefix?: ReactNode;
  showCount?: boolean;
  status?: StatusType;
  suffix?: ReactNode;
  type?: string;
  value: string;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder: string;
};

const InputAnt = ({ 
  addonAfter,
  addonBefore,
  allowClear=false,
  defaultValue,
  disabled=false,
  size='middle',
  type='text',
  variant='outlined',
  onChange,
  id,
  maxLength,
  prefix,
  showCount,
  status,
  suffix,
  value,
  onPressEnter,
  onClear,
  placeholder,
  ...rest
 }: Props) => {
  return (
    <Input
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      allowClear={allowClear}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      maxLength={maxLength}
      size={size}
      variant={variant}
      onChange={onChange}
      prefix={prefix}
      type={type}
      showCount={showCount}
      status={status}
      suffix={suffix}
      value={value}
      onPressEnter={onPressEnter}
      onClear={onClear}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputAnt;