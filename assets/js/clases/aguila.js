import { Animal } from './animal.js';

export class Aguila extends Animal {

  constructor(nombre, edad, img, sonido) {
    super(nombre, edad, img, sonido)
  }
  chillar() {
    // reproducir sonido de chillar en HTML
  }
}