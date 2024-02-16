import React from 'react'

export default function Foodtruck() {
    return (
        <div id="foodtruck">
            <p className="titulo_anexo derecha">Apoya al</p>
            <h2 className="otros_titulos derecha">FOOD TRUCK</h2>
            <div className="foodtruck_contenedor">
                <div className="contenedorUnoFoodTruck">
                    <img
                        src="imagenes/elipseVerde.png"
                        alt="Elipse verde"
                        className="elipseVerde"
                    />
                    <img
                        src="./imagenes/fotoFoodTruck.png"
                        alt="Food Truck"
                        className="fotoFoodTruck"
                    />
                    <p className="foodtruck_texto">
                        Por medio del Food Truck comercializamos alimentos tradicionales de
                        nuestra América en espacios públicos. Ofrecemos a las empresas
                        turísticas, culturales y gastronómicas de la región una alternativa
                        ingeniosa y creativa para apoyar proyectos sociales. <br /> Tu
                        aporte, ya sea monetario o en forma de materiales, es fundamental
                        para el desarrollo de nuestros proyectos.
                    </p>
                </div>
                <div className="contenedorDosFoodTruck">
                    <h2 className="empresaFoodTruck">
                        ¿Cómo tu empresa puede ayudarnos?
                    </h2>
                    <p>
                        Únete a nuestra causa colaborando con
                        <strong> donaciones de descartables y alimentos</strong> para
                        comercializar en diversas exposiciones, ferias y festivales durante
                        todo el año. <br /> <br /> Te invitamos a participar destinando un
                        <strong> porcentaje de tu recaudación</strong>. Además, te
                        proponemos fechas importantes en las cuales nuestro food truck
                        estará presente para acompañar esta acción.
                        <strong>
                            {" "}
                            Juntos, podemos hacer una diferencia significativa.
                            <br />
                            <br />
                            Eventos:
                        </strong>
                        <br />
                    </p>
                    <div className="eventos">
                        <p>
                            - Carnavales (Febrero)
                            <br />
                            <br />- Vendimias
                            <br />
                            <br />- Día Internacional Contra el Maltrato Infantil (25 de
                            Abril)
                            <br />
                            <br />- Fechas patrias
                        </p>
                        <p>
                            - Dia de la niñez (Agosto)
                            <br />
                            <br />- Aniversario Generando Puentes (17 de Agosto)
                            <br />
                            <br />- Día de los Derechos del Niño (20 de Noviembre)
                            <br />
                            <br />- Cierre del año (Diciembre)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
