import { useEffect, useState } from "react";
import { useGetCompaQuery, useGetFarmacosQuery } from "../../store/apis/checkApi"
import { FarmaLayout } from "../layout/FarmaLayout"
import { MedicamentComponent } from "../components/MedicamentComponent";
import { PopUp } from "../components/PopUp";
import { ResultadoComparacion } from "../components/ResultadoComparacion";
import { useDispatch } from "react-redux";
import { setHistorial } from "../../store/slices/ui/thunks";
import { PopUpAlert } from "../components/PopUpAlert";

export const CompatibilidadPage = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [farmacos, setFarmacos] = useState([])
  const [inputValue] = useState(null)
  const [skip, setskip] = useState(true)
  const [onPopUpAlert, setOnPopUpAlert] = useState(false);

  const firstMedicament = farmacos.length > 0 ? farmacos[0] : null;
  const secondMedicament = farmacos.length > 1 ? farmacos[1] : null;

  const dispatch = useDispatch();
  const { data } = useGetFarmacosQuery();
  const { data: compa, isFetching, isError,error } = useGetCompaQuery(farmacos, { skip: skip});

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const updateSkip = (shouldSkip) => {
    setskip(shouldSkip);
  }
 
  const loadOptions = async(searchValue, callback) => {

    const filterOptions = data.farmacos.filter(farmaco => farmaco.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

    callback(filterOptions)

  }

  const onSelect = (value) => {

    if(farmacos.length <= 1) {
      setFarmacos([...farmacos, value])
      closePopup();
    }

  }

  const handleDelete = (id) => {

      setFarmacos(farmacos.filter(farmaco => farmaco.id !== id))

  }

  const handleCompa = () => {

    if(farmacos.length < 2) return 
    
    setskip(false);

  }

  const onClosePopUpAlert = () =>{
    setOnPopUpAlert(false)
    setskip(true)
    setFarmacos([])
  }

  useEffect(() => {

      if(!skip && !isFetching && compa) {
        dispatch(setHistorial(compa));
      }

      if(isError) {
        setOnPopUpAlert(true)
      }

  }, [isFetching, compa, skip, dispatch, isError])

  useEffect(() => {


    const handleEscape = (event) => {
      if(event.key === 'Escape' ) {
        closePopup();
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
        window.removeEventListener('keydown', handleEscape)
    }

  }, [])


  return (
    <FarmaLayout>
      <>
      
          <div className="search">

            <h1>Compatibilidad</h1>
          </div>
          
          <div className="prueba">

            <div className="insights">

              <MedicamentComponent 
              openPopup={openPopup}
              medicament={firstMedicament}
              handleDelete={handleDelete}
              updateSkip={updateSkip}
              
              />

              <MedicamentComponent 
              openPopup={openPopup}
              medicament={secondMedicament}
              handleDelete={handleDelete}
              updateSkip={updateSkip}

              />

            </div>


            <div className="buscar">
            <button onClick={handleCompa}>
              {
                isFetching ? <div className="spinner"></div> : <span className="btn-text">Comparar</span>
              }
            </button>
          </div>
          {
            isFetching ? '' : compa ? <ResultadoComparacion compa={compa.compatibilidad} /> : null
          }
          </div>

          {isPopupOpen && <PopUp farmacos={farmacos} inputValue={inputValue} loadOptions={loadOptions} onClose={closePopup} onSelect={onSelect} />}
          <PopUpAlert isOpen={onPopUpAlert} onClose={onClosePopUpAlert} title={error?.data?.message} body='Por favor contacte con soporte para mas informacion.'/>
      </>
    </FarmaLayout>
  )
}
