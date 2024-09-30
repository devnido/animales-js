import { Aguila } from './clases/aguila.js'
import { Leon } from './clases/leon.js'
import { Lobo } from './clases/lobo.js'
import { Oso } from './clases/oso.js'
import { Serpiente } from './clases/serpiente.js'

const animalesAgregados = []

const loadJSON = async () => {
  const response = await fetch('/animales.json')
  const json = await response.json()
  return json
}


(async () => {

  const { animales } = await loadJSON()

  document.getElementById('animal').addEventListener("change", async (e) => {

    const animal = animales.find(animal => animal.name == e.target.value)
    const imagen = await obtenerImagenes(animal.imagen)

    document.getElementById('preview').innerHTML = `<div class="d-flex justify-content-center"><image class="img-fluid" src="${imagen}" style="display:block;width:auto;height:200px;" /></div>`

  })

  document.getElementById('btnRegistrar').addEventListener('click', clickAgregar)

})()

const validarDatosFormulario = () => {
  const nombre = document.getElementById('animal').value
  const edad = document.getElementById('edad').value
  const comentarios = document.getElementById('comentarios').value

  return nombre != '' && edad != '' && comentarios != ''
}

const limpiarCampos = () => {
  document.getElementById('animal').value = ''
  document.getElementById('edad').value = ''
  document.getElementById('comentarios').value = ''
}

// IIFE (Immediately Invoked Function Expression)
const clickAgregar = async () => {

  if (!validarDatosFormulario()) {
    alert('Debe llenar todos los campos')
    return
  }

  const { animales } = await loadJSON()

  console.log(animales);

  const nombre = document.getElementById('animal').value
  const edad = document.getElementById('edad').value
  const comentarios = document.getElementById('comentarios').value

  const { imagen, sonido } = animales.find(animal => animal.name == nombre)

  // animal 
  // {
  //   "name": "Lobo",
  //   "imagen": "Lobo.jpg",
  //   "sonido": "Aullido.mp3"
  // }

  let animal

  // switch case
  switch (nombre) {
    case 'Leon':
      animal = new Leon(nombre, edad, imagen, sonido)
      break
    case 'Lobo':
      animal = new Lobo(nombre, edad, imagen, sonido)
      break
    case 'Aguila':
      animal = new Aguila(nombre, edad, imagen, sonido)
      break
    case 'Serpiente':
      animal = new Serpiente(nombre, edad, imagen, sonido)
      break
    case 'Oso':
      animal = new Oso(nombre, edad, imagen, sonido)
      break
  }

  animal.comentarios = comentarios

  animalesAgregados.push(animal)

  console.log({ animalesAgregados });

  agregarAnimalesATabla()

  limpiarCampos()

}

const reproducirAudio = (sonido) => {

  const urlAudio = `assets/sounds/${sonido}`
  document.getElementById('player').setAttribute('src', urlAudio)
  document.getElementById('player').play()

}

const agregarAnimalesATabla = () => {

  document.getElementById('Animales').innerHTML =
    animalesAgregados.map(animal => {
      return `
      <div>
        <div class="d-flex justify-content-center" style="width:150px;height:200px;overflow:hidden;" >
          <image src="assets/imgs/${animal.img}" style="" />
        </div>
        <div class="audios d-flex justify-content-center w-full" style="height:30px;padding:8px;background-color:#777777;"">
          <img src="/assets/imgs/audio.svg" />
        </div>
      </div>
    `
    }).join('')

  document.getElementById('')


}

const obtenerImagenes = async (nombreImagen) => {

  // /assets/imgs/Aguila.png
  const urlImagen = `assets/imgs/${nombreImagen}`

  const response = await fetch(urlImagen)
  const body = await response.blob()

  const imagen = URL.createObjectURL(body)

  return imagen
}



