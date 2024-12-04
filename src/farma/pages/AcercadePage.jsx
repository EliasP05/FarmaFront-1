import { FarmaLayout } from "../layout/FarmaLayout";

export const AcercadePage = () => {
  return (
    <FarmaLayout>
      <>
        <h1 className="acercadeTitulo">Acerca de</h1>
        <div className="acercadeText">
          <p>
            <b>Enfar-MedGuide</b> tiene como objetivo proporcionar información
            confiable y precisa sobre la compatibilidad entre diferentes
            medicamentos. Esta herramienta está diseñada tanto para
            profesionales de la salud como para usuarios en general, ayudando a
            tomar decisiones informadas acerca del uso de fármacos. La
            información que ofrecemos está basada en estudios clínicos revisados
            y extraída de fuentes científicas de confianza, incluyendo bases de
            datos oficiales de interacciones farmacológicas como : 
            </p>

            <ul >
              <li>
                <a
                  href="http://revistapediatria.com.ar/wp-content/uploads/2021/04/GuiaAdministracionMedicamentos_3ED.-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="farmaLink"
                >
                  Guia para la Administación parental de medicamentos.
                </a>
              </li>
              <li>
                <a
                  href=" https://www.garrahan.gov.ar/PDFS/medicamentos/tablas/Compatibilidad_en_Y.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="farmaLink"
                >
                  Hospital Garrahan - Compatibilidad de medicamentos
                  administrados. en Y.
                </a>
              </li>
              <li>
                <a
                  href="https://farmacia.garrahan.gov.ar/Vademecum/Busqueda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="farmaLink"
                >
                  Hospital Garrahan - Vademecum.
                </a>
              </li>
            </ul>

          <p>
            Nuestro equipo se compromete a actualizar regularmente estos datos,
            manteniendo la información vigente de acuerdo con las últimas
            investigaciones. Es importante destacar que el contenido de este
            sistema es de carácter orientativo y no sustituye el consejo médico
            profesional. Recomendamos que cualquier decisión relacionada con
            tratamientos o uso de fármacos se tome siempre bajo la supervisión
            de un especialista.
          </p>
          <p>
            Este proyecto fue originalmente concebido por{" "}
            <span>Mgs. Saavedra Victor Hugo,</span> <i>Licenciado en enfermeria, Profesor de la carrera de enfermeria en la Universidad Nacional de Salta</i> ; y ha sido desarrollado por{" "}
            <span>
              {" "}
              <a href="" className="farmaLink">
                AwareWeb
              </a>
            </span>
            , quienes han trabajado en conjunto para llevar esta idea a la
            realidad. Si tienes alguna pregunta, sugerencia o deseas más
            información, puedes contactarnos a través de nuestro correo
            electrónico: info@Enfar-MedGuide.com. Nos esforzamos por ofrecer un
            servicio de calidad que facilite el acceso a información valiosa
            para mejorar la seguridad y efectividad en el uso de medicamentos.
          </p>
        </div>
      </>
    </FarmaLayout>
  );
};
