import React from 'react'
import LazyLoad from "react-lazyload";
import "./News.css";
import HomeContent from "../../../content/HomeContent";

import { Helmet } from "react-helmet";

function News(props) {
    return (
        <>
            <div className="news-container">
                <Helmet>
                    <title>Sabías que</title>
                    <meta  property="og:description" content="Sabías que" />
                </Helmet>
                <div className="news-wrapper">
                    <h3 className="news-title fadeInUp anime-delay">Sabías que</h3>
                    <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
                        <div className="news-wrapper-inner">
                            <h5 className="news-subtitle fadeInUp anime-delay1">Suma asegurada en incendio</h5>
                            <p className="news-desc fadeInUp anime-delay2">
                                Al momento de asegurar la estructura de su vivienda o su negocio es importante
                                hacerlo a la suma asegurada actual que cueste reemplazar el bien. De esta forma
                                se evita estar infra asegurado y que al momento de la indemnización no se reciba
                                el monto requerido para reemplazar el bien.
                                Cada 5 años al menos debe revisar su suma asegurada y actualizarla, idealmente
                                a través de un avalúo.
                            </p>
                        </div>
                    </LazyLoad>
                    <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
                        <div className="news-wrapper-inner">
                            <h5 className="news-subtitle fadeInUp anime-delay1">Seguro de Automóvil</h5>
                            <p className="news-desc fadeInUp anime-delay2">
                                Cada vez que incluya algún accesorio extra que no venga de fábrica con el auto,
                                debe reportarlo a través de la factura e inspección para que quede asegurado. No
                                hacerlo implica que no está cubierto.
                            </p>
                        </div>
                    </LazyLoad>
                    <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
                        <div className="news-wrapper-inner">
                            <h5 className="news-subtitle fadeInUp anime-delay1">Seguros de contenido</h5>
                            <p className="news-desc fadeInUp anime-delay2">
                                Guarde sus facturas de compra, o archívelas en algún dispositivo, al igual que es
                                de mucha ayuda tomar fotos a sus principales bienes para que en caso de robo
                                pueda hacer de manera más efectiva su reclamo en caso de robo.
                            </p>
                        </div>
                    </LazyLoad>
                    <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
                        <div className="news-wrapper-inner">
                            <h5 className="news-subtitle fadeInUp anime-delay1">Seguros de Salud</h5>
                            <p className="news-desc fadeInUp anime-delay2">
                                Si su bebé nace dentro de la póliza, ya que la madre estaba asegurada y el parto
                                está cubierto, avise a su corredor para que revise las cláusulas de inclusión de
                                recién nacido. Usualmente varían de 9 a 10 día para incluir al recién nacido sin
                                mayor trámite y con continuidad de cobertura.No hacerlo puede significar un
                                período de espera para incluirlo y que pierda la cobertura que den por
                                enfermedades congénitas.
                            </p>
                        </div>
                    </LazyLoad>
                    <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
                        <div className="news-wrapper-inner">
                            <h5 className="news-subtitle fadeInUp anime-delay1">¿Cómo afecta a los automóviles estar parados en cuarentena?</h5>
                            <p className="news-desc fadeInUp anime-delay2">
                                Debido a la pandemia que estamos viviendo es bueno seguir algunos consejos para proteger nuestros automóviles. ANPanama nos brinda este interesante artículo.
                                {" "}
                                <a
                                    href="https://anpanama.com/10130-Como-afecta-a-los-automoviles-estar-parados-en-cuarentena.note.aspx?&sent=4232&sentu=19415&utm_source=Newsletter&utm_medium=Email&utm_campaign=2020-06-23%20%7C%20Angelica,%20Pymes%20incrementar%C3%A1n%20teletrabajo,%20piden%20apoyo%20al%20gobierno%20e%20invertir%C3%A1n%20m%C3%A1s%20en%20tecnolog%C3%ADa"
                                    target="_blank"
                                     rel="noopener noreferrer"
                                    className="quote-link"
                                >
                                     Leer más...
                                </a>
                            </p>
                        </div>
                    </LazyLoad>
                </div>
            </div>
            <HomeContent />
        </>
    )
}

News.propTypes = {

}

export default News;

