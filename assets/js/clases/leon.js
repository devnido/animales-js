import { Animal } from './animal.js';

export class Leon extends Animal {

  constructor(nombre, edad, img, sonido) {
    super(nombre, edad, img, sonido)
  }
  rugir() {
    // reproducir sonido de chillar en HTML
  }
}