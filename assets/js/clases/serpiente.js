import { Animal } from './animal.js';

export class Serpiente extends Animal {

  constructor(nombre, edad, img, sonido) {
    super(nombre, edad, img, sonido)
  }
  sisear() {
    // reproducir sonido de chillar en HTML
  }
}