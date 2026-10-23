import React from 'react';
import { createComponent } from '@lit/react';
import { NtCabinet } from './nt-cabinet.ts';

export const NtCabinetReact = createComponent({
  react: React,
  tagName: 'nt-cabinet',
  elementClass: NtCabinet,
  events: {},
});
