export class Animal {
  #nombre
  #edad
  #img
  #comentarios
  #sonido

  constructor(nombre, edad, img, sonido) {
    this.#nombre = nombre
    this.#edad = edad
    this.#img = img
    this.#sonido = sonido
  }

  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get img() {
    return this.#img;
  }

  get comentarios() {
    return this.#comentarios;
  }

  set comentarios(comentarios) {
    this.#comentarios = comentarios;
  }

  get sonido() {
    return this.#sonido;
  }

}