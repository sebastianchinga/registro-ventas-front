const extraerIniciales = (nombre) => {
    return nombre.split(" ").slice(0, 2).map(name => name[0]).join("");
}

export default extraerIniciales