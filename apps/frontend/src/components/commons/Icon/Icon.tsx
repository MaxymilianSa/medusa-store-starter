'use client';
import React from 'react';
import SVG from 'react-inlinesvg';

import { IconProps } from './IconModel';

export const Icon = ({ name, className, ...delegated }: IconProps) => (
  <SVG
    {...{
      ...delegated,
      src: `/svg/${name}.svg`,
      height: 'auto',
      className,
    }}
  />
);
