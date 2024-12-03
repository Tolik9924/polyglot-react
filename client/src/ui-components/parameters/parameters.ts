export const Color = {
  'default': 'default',
  'primary': 'primary',
  'danger': 'danger'
};

export const HTMLType = {
  'submit': 'submit',
  'reset': 'reset',
  'button': 'button'
};

export const IconPosition = {
  'start': 'start',
  'end': 'end'
};

export const Shape = {
  'default': 'default',
  'circle': 'circle',
  'round': 'round'
};

export const Size = {
  'large': 'large',
  'middle': 'middle',
  'small': 'small'
};

export const Type = {
  'primary': 'primary',
  'dashed': 'dashed',
  'link': 'link',
  'text': 'text',
  'default': 'default'
};

export const Variant = {
  'outlined': 'outlined',
  'dashed': 'dashed',
  'solid': 'solid',
  'filled': 'filled',
  'text': 'text',
  'link': 'link'
};

export const Status = {
  'error': 'error',
  'warning': 'warning'
};

export type ColorType = keyof typeof Color;
export type HTMLTypeType = keyof typeof HTMLType;
export type IconPositionType = keyof typeof IconPosition;
export type ShapeType = keyof typeof Shape;
export type SizeType = keyof typeof Size;
export type TypeType = keyof typeof Type;
export type VariantType = keyof typeof Variant;
export type StatusType = keyof typeof Status;