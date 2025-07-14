import React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import "./InsuranceTypes.css"
import { transparent } from 'material-ui/styles/colors';
import { Helmet } from "react-helmet";

import Icon1 from "../../../assets/img/1.svg";
import Icon2 from "../../../assets/img/2.svg";
import Icon3 from "../../../assets/img/3.svg";
import Icon4 from "../../../assets/img/4.svg";
import Icon5 from "../../../assets/img/5.svg";
import Icon6 from "../../../assets/img/6.svg";
import Icon7 from "../../../assets/img/7.svg";
import Icon8 from "../../../assets/img/8.svg";
import Icon9 from "../../../assets/img/9.svg";
import Icon10 from "../../../assets/img/10.svg";
import Icon12 from "../../../assets/img/12.svg";
import Icon14 from "../../../assets/img/14.svg";
import Icon16 from "../../../assets/img/16.svg";
import Icon17 from "../../../assets/img/17.svg";
import Icon18 from "../../../assets/img/18.svg";

import history from "../../../history"

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { selectedQuote } from "../../../redux/actions/quotesAction";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: transparent,
    width: 500,
  },
}));

function InsuraceTypes() {

  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const selectedTab = useSelector(
    state => state.tabReducer.selectedTab,
    shallowEqual
  )

  const [value, setValue] = React.useState(selectedTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const selectQuote = quote => {
    dispatch(selectedQuote(quote))
    history.push("/cotice/");
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  return (
    <div className="seguros-container seguros">
      <Helmet>
        <title>Tipos de Seguros</title>
        <meta name="description" content="Tipos de Seguros" />
      </Helmet>
      <h3 className="seguros-title fadeInUp anime-delay">Seleccione un Seguro</h3>
      <div className={classes.root} style={{ width: '100%' }}>
        <AppBar position="static" color="default">
          <Tabs
TabIndicatorProps={{style: {background:'#ed1923'}}}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Planes Individuales" {...a11yProps(0)} />
            <Tab label="Planes Colectivos" {...a11yProps(1)} />
            <Tab label="Ramos Generales" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="seguros-wrapper">
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1 fadeInUp anime-delay1" src={Icon1} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2 fadeInUp anime-delay2">Vida</h5>
                <p className="seguros-text fadeInUp anime-delay3 fadeInUp anime-delay3">Protección familiar, generación de  ahorros, cubrir hipotecas, protección ante incapacidades totales y permanente por enfermedades, adelantos de suma asegurada en vida por enfermedades terminales. Protección en negocios para los socios de la empresa.</p>
                <button onClick={() => selectQuote("panel1")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4 fadeInUp anime-delay4">
                   Cotice
                </button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon2} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Accidente</h5>
                <p className="seguros-text fadeInUp anime-delay3">Protección familiar, indemnización al asegurado por desmembramiento, gastos médicos, incapacidades totales debido a hechos accidentales.</p>
                <button onClick={() => selectQuote("panel2")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4">
                   Cotice
                </button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon3} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Salud</h5>
                <p className="seguros-text fadeInUp anime-delay3">Protección ante eventos que afecten la salud, consultas médicas, hospitalizaciones, tratamientos, embarazos, enfermedades catastróficas, medicamentos, laboratorios, exámenes especiales.</p>
                <button onClick={() => selectQuote("panel3")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon4} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Viaje</h5>
                <p className="seguros-text fadeInUp anime-delay3">Protección durante la duración del viaje tanto en caso de accidentes, enfermedades no pre existentes, accidentes, pérdida de equipaje, repatriación, etc.</p>
                <button onClick={() => selectQuote("panel4")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="seguros-wrapper">
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon5} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Vida</h5>
                <p className="seguros-text fadeInUp anime-delay3">Beneficio extra para los colaboradores como protección a sus familias en caso de fallecimiento por causa natural o accidental .</p>
                <button onClick={() => selectQuote("panel5")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon6} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Salud</h5>
                <p className="seguros-text fadeInUp anime-delay3">Beneficio extra a los colaboradores para atender su salud en centros privados.</p>
                <button onClick={() => selectQuote("panel5")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon7} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Accidente</h5>
                <p className="seguros-text fadeInUp anime-delay3">Beneficio extra para los colaboradores que le cubra en caso de muerte accidental , gastos médicos , desmembramientos, mientras se trasladan hacia y desde su centro de trabajo a sus casas y durante sus labores.</p>
                <button onClick={() => selectQuote("panel5")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="seguros-wrapper">
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon8} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Automóvil</h5>
                <p className="seguros-text fadeInUp anime-delay3">Seguro obligatorio y/o  cobertura completa para su vehículo, ya sea individual o en flota para más de 10 unidades</p>
                <button onClick={() => selectQuote("panel6")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon9} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Incendio</h5>
                <p className="seguros-text fadeInUp anime-delay3">Indemnización en caso de Incendio, terremoto, vendaval, huracán, caída de aviones, inundación, daños por agua, daños por humo y más coberturas a elección para la estructura de su vivienda o negocio</p>
                <button onClick={() => selectQuote("panel7")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon10} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Póliza de Contenido Residencial</h5>
                <p className="seguros-text fadeInUp anime-delay3"> Póliza paquete con variadas coberturas como incendio, robo responsabilidad civil, inundación, daños por aguas, accidente a mascotas, terremoto , vendaval, huracán, sepelio, etc.</p>
                <button onClick={() => selectQuote("panel8")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon12} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Responsabilidad Civil</h5>
                <p className="seguros-text fadeInUp anime-delay3">Responde ante  la obligación de pagar por los daños y perjuicios que se causen a terceros, a su persona o a su patrimonio por parte del asegurado y sus dependientes.</p>
                <button onClick={() => selectQuote("panel11")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon14} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Póliza de Contenido Comercial</h5>
                <p className="seguros-text fadeInUp anime-delay3">Póliza paquete con variadas coberturas como incendio, robo , responsabilidad civil, inundación, daños por aguas, terremoto , vendaval, huracán, transporte de mercancía, remoción de escombros, etc.</p>
                <button onClick={() => selectQuote("panel9")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon16} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Seguros para Pyme</h5>
                <p className="seguros-text fadeInUp anime-delay3">Póliza paquete diseñada especialmente para los requerimientos de una Pequeña y Mediana Empresa, protegiendo su contenido a primas muy atractivas.</p>
                <button onClick={() => selectQuote("panel10")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon17} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">Fianzas</h5>
                <p className="seguros-text fadeInUp anime-delay3">Contrato de garantía que se otorga para cubrir, hasta la suma máxima estipulada en las condiciones particulares, los perjuicios producidos por el incumplimiento de ciertas obligaciones.</p>
                <button onClick={() => selectQuote("panel11")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
              <div className="seguros-item">
                <img className="seguros-img fadeInUp anime-delay1" src={Icon18} alt="Seguros" />
                <h5 className="seguros-title-item fadeInUp anime-delay2">C.A.R.</h5>
                <p className="seguros-text fadeInUp anime-delay3">Todo Riesgo para construcciones.</p>
                <button onClick={() => selectQuote("panel11")} className="btnmt btn-1 btn-1c fadeInUp anime-delay4"> Cotice</button>
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  )
}

export default InsuraceTypes;
