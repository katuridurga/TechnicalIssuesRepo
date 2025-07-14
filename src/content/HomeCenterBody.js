import React from "react";
import Icon1 from "../assets/img/1.svg";
import Icon2 from "../assets/img/2.svg";
import Icon3 from "../assets/img/3.svg";
import Icon8 from "../assets/img/8.svg";
import Icon11 from "../assets/img/11.svg";
import Icon14 from "../assets/img/14.svg";
import Icon16 from "../assets/img/16.svg";
import Icon19 from "../assets/img/19.svg";
import history from "../history"

import { useDispatch } from "react-redux"
import { selectedTab } from "../redux/actions/tabAction";
import LazyLoad from "react-lazyload";

import "./HomeCenterBody.css";

function HomeCenterBody() {

  const dispatch = useDispatch()

 

  const selectTab = index => {
    dispatch(selectedTab(index))
    history.push("/tipos-de-seguros/");
  }

  return (
    <>
      <div className="body-container insurance-types">
        <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
          <h3 className="body-title fadeInUp anime-delay">Seleccione un Producto</h3>
        </LazyLoad>
        <div className="body-wrapper">
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon1} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Vida</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Protección familiar, generación de ahorros, cubrir hipotecas, protección ante incapacidades totales y permanente por enfermedades, adelantos de suma asegurada en vida por enfermedades terminales. Protección en negocios para los socios de la empresa.
              </p>
              <button onClick={() => selectTab(0)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon8} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Automóvil</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Seguro obligatorio y/o cobertura completa para su vehículo, ya sea individual o en flota para más de 10 unidades.
              </p>
              <button onClick={() => selectTab(2)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon16} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Seguros para Pyme</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Póliza paquete diseñada especialmente para los requerimientos de una Pequeña y Mediana Empresa, protegiendo su contenido a primas muy atractivas.
              </p>
              <button onClick={() => selectTab(2)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon11} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Póliza de Contenido Residencial</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Póliza paquete con variadas coberturas como incendio, robo responsabilidad civil, inundación, daños por aguas, accidente a mascotas, terremoto , vendaval, huracán, sepelio, etc.
              </p>
              <button onClick={() => selectTab(2)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon2} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Accidente</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Beneficio extra para los colaboradores que le cubra en caso de muerte accidental , gastos médicos , desmembramientos, mientras se trasladan hacia y desde su centro de trabajo a sus casas y durante sus labores.
              </p>
              <button onClick={() => selectTab(1)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon3} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Salud</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Protección ante eventos que afecten la salud, consultas médicas, hospitalizaciones, tratamientos, embarazos, enfermedades catastróficas, medicamentos, laboratorios, exámenes especiales.
              </p>
              <button onClick={() => selectTab(0)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon19} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Colectivos</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Para colaboradores de empresas o asociaciones con 10 personas en adelante.
              </p>
              <button onClick={() => selectTab(1)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
          <LazyLoad height={100} offset={[-100, 0]} fadein={true}>
            <div className="product-wrapper">
              <div className="product-inner-wrapper fadeInUp anime-delay1">
                <img className="product-img fadeInUp anime-delay1" src={Icon14} alt="Producto" />
                <h5 className="mtproduct-title fadeInUp anime-delay2 fadeInUp anime-delay2">Póliza de Contenido Comercial</h5>
              </div>
              <p className="product-desc fadeInUp anime-delay3 fadeInUp anime-delay3">
                Póliza paquete con variadas coberturas como incendio, robo , responsabilidad civil, inundación, daños por aguas, terremoto , vendaval, huracán, transporte de mercancía, remoción de escombros, etc.
              </p>
              <button onClick={() => selectTab(2)} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                Más información
              </button>
            </div>
          </LazyLoad>
        </div>
      </div>
    </>
  );
}

export default HomeCenterBody;
