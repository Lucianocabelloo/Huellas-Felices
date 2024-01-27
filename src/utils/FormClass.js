export default class Veterinary {
    #codigo;
    #nombre;
    #apellido;
    #email;
    #dni;
    #especialidad;
    #turnosLibres;
    #turnosAgendados;
    #consultas;
    #imagen;


    constructor(codigo, nombre, apellido, email, dni, especialidad, turnosLibres, turnosAgendados, consultas,imagen) {
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#email = email;
        this.#dni = dni;
        this.#especialidad = especialidad;
        this.#turnosLibres = turnosLibres;
        this.#turnosAgendados = turnosAgendados;
        this.#consultas = consultas;
        this.#imagen = imagen; // Inicialización de la nueva propiedad

        
    }

    getCodigo() {
        return this.#codigo;
    }

    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido;
    }

    getEmail() {
        return this.#email;
    }

    getDNI() {
        return this.#dni;
    }

    getEspecialidad() {
        return this.#especialidad;
    }

    getTurnosLibres() {
        return this.#turnosLibres;
    }

    getTurnosAgendados() {
        return this.#turnosAgendados;
    }

    getConsultas() {
        return this.#consultas;
    }
    getImagen() {
        return this.#imagen;
    }

    setImagen(imagen) {
        this.#imagen = imagen;
    }


    setCodigo(codigo) {
        this.#codigo = codigo;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setApellido(apellido) {
        this.#apellido = apellido;
    }

    setEmail(email) {
        this.#email = email;
    }

    setDNI(dni) {
        this.#dni = dni;
    }

    setEspecialidad(especialidad) {
        this.#especialidad = especialidad;
    }

    setTurnosLibres(turnosLibres) {
        this.#turnosLibres = turnosLibres;
    }

    setTurnosAgendados(turnosAgendados) {
        this.#turnosAgendados = turnosAgendados;
    }

    setConsultas(consultas) {
        this.#consultas = consultas;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nombre: this.#nombre,
            apellido: this.#apellido,
            email: this.#email,
            dni: this.#dni,
            especialidad: this.#especialidad,
            turnosLibres: this.#turnosLibres,
            turnosAgendados: this.#turnosAgendados,
            consultas: this.#consultas,
            imagen: this.#imagen

        };
    }
}
