import { Animal } from './animal.js';

export class Oso extends Animal {

  constructor(nombre, edad, img, sonido) {
    super(nombre, edad, img, sonido)
  }
  grunir() {
    // reproducir sonido de chillar en HTML
  }
}