import React from 'react'

export default function Nosotros() {
    return (
        <div>
            <h2 className="otros_titulos derecha">NOSOTROS</h2>
            <div className="nosotros_contenedor">
                <img
                    src="/imagenes/que-es-una-ong.jpg"
                    alt="Foto ilustrativa"
                    className="fotoManos"
                />
                <p className="nosotros_parrafo">
                    El <strong>Food Truck</strong> es una propuesta para generar ingresos
                    con el fin de <br />
                    sostener económicamente los proyectos activos de{" "}
                    <strong>Generando Puentes</strong>. <br />
                    La ONG constituye una <strong>iniciativa social</strong> concebida con
                    el propósito de <br />
                    instaurar procesos de autonomía y asegurar el acceso a oportunidades{" "}
                    <br />
                    para comunidades situadas en condiciones de pobreza extrema, <br />
                    exclusión y vulnerabilidad social. <br />
                    <br />
                    Generando Puentes busca fomentar la creación de redes de organización{" "}
                    <br />y participación entre residentes de barrios populares, entidades{" "}
                    <br />
                    gubernamentales, organizaciones sociales y otras instituciones en{" "}
                    <br />
                    <strong>Mendoza, Argentina</strong>.
                </p>
            </div>
        </div>
    )
}
