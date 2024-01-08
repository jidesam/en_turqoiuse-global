import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  animateChild,
} from '@angular/animations';


export const slider= [
  trigger('slideAnimation', [
    transition(':increment', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
    ]),
    transition(':decrement', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
    ]),
  ]),
]