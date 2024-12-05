import React from 'react';
import { Input as InputAnt } from 'antd';
import type { InputProps } from 'antd';

export const VariantInput = {
  'outlined': 'outlined',
  'borderless': 'borderless',
  'filled': 'filled',
};

export type VariantInputType = keyof typeof VariantInput;

const Input = ({ ...props }: InputProps) => {
  return (
    <InputAnt { ...props } />
  );
};

export default Input;