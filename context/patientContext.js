import { createContext, useState } from "react";
export const PatientContext = createContext();
const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState({});
  const setPatientInfo = (patient) => {
    const newInfo = {
      id: patient._id,
      name: patient.name,
      age: patient.age,
      typeOfCancer: patient.typeOfCancer,
      services: patient.services,
      palliative: patient.palliative,
      idNurse: patient.idNurse,
    };
    setPatient({ ...newInfo });
  };
  return (
    <PatientContext.Provider value={{ patient, setPatientInfo }}>
      {children}
    </PatientContext.Provider>
  );
};
export default PatientProvider;