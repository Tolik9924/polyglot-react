import React, { ReactNode } from 'react';

import { Button } from 'antd';
import { 
  ColorType, 
  HTMLTypeType, 
  IconPositionType, 
  ShapeType, 
  SizeType, 
  TypeType, 
  VariantType 
} from '../parameters/parameters';

type Props = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  autoInsertSpace?: boolean;
  block?: boolean;
  color?: ColorType;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: HTMLTypeType;
  icon?: ReactNode;
  iconPosition?: IconPositionType;
  loading?: boolean;
  shape?: ShapeType;
  size?: SizeType;
  target?: string;
  type?: TypeType;
  variant?: VariantType;
};

const ButtonAnt = ({
  children,
  onClick = () => {},
  autoInsertSpace = true,
  block = false,
  color = 'default',
  danger = false,
  disabled = false ,
  ghost = false,
  htmlType = 'button',
  iconPosition = 'start',
  loading = false,
  shape = 'default',
  size = 'middle',
  type = 'default',
  href,
  icon,
  target,
  variant
}: Props) => {
  return (
    <Button
      onClick={onClick}
      autoInsertSpace={autoInsertSpace}
      block={block}
      color={color}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      htmlType={htmlType}
      iconPosition={iconPosition}
      loading={loading}
      shape={shape}
      size={size}
      type={type}
      href={href}
      icon={icon}
      target={target}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default ButtonAnt;