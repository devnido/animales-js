import { Animal } from './animal.js';

export class Lobo extends Animal {

  constructor(nombre, edad, img, sonido) {
    super(nombre, edad, img, sonido)
  }
  aullar() {
    // reproducir sonido de chillar en HTML
  }
}