import React from 'react'

const Formulario = () => {
    //hooks
    const [nombre,setNombre]=React.useState('')
    const [apellido,setApellido]=React.useState('')
    const [lista,setLista]=React.useState([])
    const [editIndex, setEditIndex]=React.useState(-1)

    const registrarDato=(e)=>{
        e.preventDefault()
        
        if (!nombre.trim()) {
            alert('Ingrese Nombre')
            return
        }
        if (!apellido.trim()) {
            alert('Ingrese Apellido')
            return
        }
        //agregar nuevo usuario
        // Si editIndex es -1, entonces agregamos un nuevo elemento a la lista
    // de lo contrario, actualizamos el elemento existente en esa posición
         if (editIndex === -1) {
      setLista([...lista, { nombre, apellido }])
    } else {
      const newList = [...lista]
      newList[editIndex] = { nombre, apellido }
      setLista(newList)
      setEditIndex(-1)
    }
        //limpiar inputs
        e.target.reset()
        //limpiar los estados
        setNombre('')
        setApellido('')
    }
    const handleEdit = (index) => {
        // Setear los valores del usuario correspondiente en los campos de entrada
        setNombre(lista[index].nombre)
        setApellido(lista[index].apellido)
    
        // Setear el índice del usuario que se está editando
        setEditIndex(index)
      }
    
      const handleDelete = (index) => {
        // Eliminar el elemento en la posición index de la lista
        const newList = [...lista]
        newList.splice(index, 1)
        setLista(newList)
      }
  return (
    <div className='container'>
        <h2>Formulario de Registro</h2>
        <form onSubmit={registrarDato}>
            
            <input type="text" 
            placeholder='Ingrese su Nombre'
            className='form-control mb-3'
            onChange={(e)=>setNombre(e.target.value.trim())}
            />
            <input type="text" 
            placeholder='Ingrese su Apellido'
            className='form-control mb-3'
            onChange={(e)=>setApellido(e.target.value.trim())}
            />
            <div className='d-grid gap-2'>
          <button className='btn btn-outline-primary' type='submit'>
            {editIndex === -1 ? 'Registrar' : 'Actualizar'}
          </button>
        </div>
      </form>
      <hr />
      <h2>Listado de usuarios registrados</h2>
      <ol>
        {lista.map((elemento, index) => (
          <li key={index}>
            {elemento.nombre} {elemento.apellido}{' '}
            <button onClick={() => handleEdit(index)}>Editar</button>{' '}
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Formulario