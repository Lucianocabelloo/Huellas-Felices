
export default className Usuario {
    #codigo;
    #nombre;
    #apellido;
    #email;
    #dni;

    constructor(codigo, nombre, apellido, email, dni){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
        this.#dni = dni
        
    }
    getCodigo(){ return this.#codigo;}

    getNombre() {
        return this.#nombre;
    }
    getApellido(){
        return this.#apellido;
    }
    getEmail(){
        return this.#email;
    }
    getDNI(){
        return this.#dni;
    }

    setCodigo(codigo){
        this.#codigo = codigo
    }
    setNombre(nombre){
        this.#nombre = nombre
    }
    setApellido(apellido){
        this.#apellido = apellido
    }    
    setEmail(email){
        this.#email = email
    }
    setDNI(dni){
        this.#dni = dni
    }

    toJSON(){
        return{
            codigo: this.#codigo,
            nombre :this.#nombre,
            apellido: this.#apellido,
            email: this.#email,
            dni: this.#dni
        }
    }
}