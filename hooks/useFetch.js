import axios from "axios";
import Requests from "../constants/requests";
import useErrorHandler from "./useErrorHandler";

const useFetch = () => {
  const funcErrorWrapper = useErrorHandler();
  /**
   *  GET REQUESTS
   */

  // GET request to get all patients specified by the query
  const getPatientsFilter = funcErrorWrapper(async query => {
    const { data } = await axios.get(Requests.PATIENT_FILTER_REQUEST + query);
    return data.result;
  });

  // GET request to get the patient by the ID provided
  const getPatientById = funcErrorWrapper(async id => {
    const { data } = await axios.get(Requests.PATIENT_REQUEST + id);
    return data.result;
  });

  // GET request to get all employees specified by the query
  const getEmployeesFilter = funcErrorWrapper(async query => {
    const { data } = await axios.get(Requests.EMPLOYEE_FILTER_REQUEST + query);
    return data.result;
  });

  // GET request to return all the nurses in the system
  const getAllNurses = funcErrorWrapper(async () => {
    const { data } = await axios.get(Requests.EMPLOYEE_NURSES_REQUEST);
    return data.result;
  });

  // GET request to get one employee by id
  const getEmployeeById = funcErrorWrapper(async id => {
    const { data } = await axios.get(Requests.EMPLOYEE_REQUEST + id);
    return data.result;
  });

  // Get request to get all patients from a nurse
  const getAllPatientsNurse = funcErrorWrapper(async idNurse => {
    const { data } = await axios.get(
      Requests.EMPLOYEE_NURSE_PATIENTS_REQUEST + idNurse,
    );
    return data.result;
  });

  // GET request to get all doctors
  const getDoctors = funcErrorWrapper(async () => {
    const { data } = await axios.get(Requests.EMPLOYEE_DOCTORS_REQUEST);
    return data.result;
  });

  // Get all patient notifications
  const patientNotifications = funcErrorWrapper(async idPatient => {
    const { data } = await axios.get(
      Requests.PATIENT_NOTIFICATIONS_REQUEST + idPatient,
    );
    return data.result;
  });

  // Get all doctor notifications
  const doctorNotifications = funcErrorWrapper(async idDoctor => {
    const { data } = await axios.get(
      Requests.DOCTOR_NOTIFICATIONS_REQUEST + idDoctor,
    );
    return data.result;
  });

  // Get all new doctor notifications
  const newDoctorNotifications = funcErrorWrapper(async idDoctor => {
    const { data } = await axios.get(
      Requests.NEW_DOCTOR_NOTIFICATIONS + idDoctor,
    );
    return data.result;
  });

  // GET all patient notifications
  const nurseNotifications = funcErrorWrapper(async idTransmitter => {
    const { data } = await axios.get(
      Requests.NURSE_NOTIFICATIONS_REQUEST + idTransmitter,
    );
    return data.result;
  });

  // GET all patient records
  const patientRecords = funcErrorWrapper(async idPatient => {
    const { data } = await axios.get(Requests.PATIENT_EVAT_FORMS + idPatient);
    return data.result;
  });

  /**
   *  POST REQUESTS
   */

  // POST request to log into the application
  const loginRequest = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.LOGIN_REQUEST, {
      ...info,
    });
    return data.result;
  });

  // POST request to add a member of the staff in the hospital
  const AddPatientRequest = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.PATIENT_REQUEST, { ...info });
    return data.result;
  });

  const AddUserRequest = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.NEW_REGISTER_REQUEST, { ...info });
    return data.result;
  });
  const AddEmployeesRequest = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.NEW_EMPLOYEES_REQUEST, { ...info });
    return data.result;
  });

  // POST request to add a member of the staff in the hospital
  const AddStaff = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.EMPLOYEE_REQUEST, {
      ...info,
    });
    return data.result;
  });

  // POST REQUEST to assign nurse to a patient
  const setPatientNurse = funcErrorWrapper(async (id, idNurse) => {
    const { data } = await axios.post(Requests.PATIENT_ASSIGN_NURSE + id, {
      idNurse,
    });
    return data.result;
  });

  // POST request to register evat form
  const postEvatForm = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.DAILY_FORM_REQUEST, { ...info });
    return data.result;
  });

  //POST request to register RedEvat form
  const postRedEvatForm = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.RED_EVAT_REQUEST, { ...info });
    return data.result;
  });

  // POST request to create notification
  const postNotification = funcErrorWrapper(async info => {
    const { data } = await axios.post(Requests.NOTIFICATION_REQUEST, {
      ...info,
    });
    return data.result;
  });

  // POST request to change password
  const changePassword = funcErrorWrapper(async (info, id) => {
    const { data } = await axios.post(Requests.CHANGE_PASSWORD + id, {
      ...info,
    });
    return data.result;
  });

  /*
   *  UPDATE REQUESTS
   */

  // Update request to update patient
  const updatePatientRequest = funcErrorWrapper(async (id, newPatientInfo) => {
    const { data } = await axios.patch(Requests.PATIENT_REQUEST + id, {
      ...newPatientInfo,
    });
    return data.result;
  });

  // Update request to remove the current nurse of a patient
  const deletePatientNurse = funcErrorWrapper(async id => {
    const { data } = await axios.patch(Requests.PATIENT_ASSIGN_NURSE + id);
    return data.result;
  });

  // UPDATE the employee information
  const updateEmployee = funcErrorWrapper(async (id, info) => {
    const { data } = await axios.patch(Requests.EMPLOYEE_REQUEST + id, {
      ...info,
    });
    return data.result;
  });

  // UPDATE the notification as confirmed by the doctor
  const confirmNotification = funcErrorWrapper(async id => {
    const { data } = await axios.patch(Requests.CONFIRM_NOTIFICATION + id);
    return data.result;
  });

  // UPDATE the notification as not confirmed by the doctor
  const notSeenNotification = funcErrorWrapper(async id => {
    const { data } = await axios.patch(Requests.NOT_SEEN_NOTIFICATION + id);
    return data.result;
  });
  /**
   *  DELETE REQUESTS
   */

  // DELETE request to delete one patient
  const deletePatient = funcErrorWrapper(async id => {
    const { data } = await axios.delete(Requests.PATIENT_REQUEST + id);
    return data.result;
  });

  // DELETE request to remove one employee
  const deleteEmployee = funcErrorWrapper(async id => {
    const { data } = await axios.delete(Requests.EMPLOYEE_REQUEST + id);
    return data.result;
  });

  // DELETE a single notification
  const deleteNotification = funcErrorWrapper(async id => {
    const { data } = await axios.delete(Requests.NOTIFICATION_REQUEST + id);
    return data.result;
  });

  // Delete a evat form
  const deleteEvatForm = funcErrorWrapper(async id => {
    const { data } = await axios.delete(Requests.DAILY_FORM_REQUEST + id);
    return data.result;
  });

  // Delete all patient evat forms
  const deletePatientEvatForms = funcErrorWrapper(async idPatient => {
    const { data } = await axios.delete(
      Requests.PATIENT_EVAT_FORMS + idPatient,
    );
    return data.result;
  });

  return {
    loginRequest,
    AddPatientRequest,
    AddStaff,
    getPatientsFilter,
    getEmployeesFilter,
    deletePatient,
    updatePatientRequest,
    getPatientById,
    deletePatientNurse,
    setPatientNurse,
    getAllNurses,
    deleteEmployee,
    updateEmployee,
    getEmployeeById,
    getAllPatientsNurse,
    postEvatForm,
    postRedEvatForm,
    getDoctors,
    postNotification,
    patientNotifications,
    doctorNotifications,
    nurseNotifications,
    patientRecords,
    deleteNotification,
    newDoctorNotifications,
    confirmNotification,
    notSeenNotification,
    changePassword,
    deleteEvatForm,
    deletePatientEvatForms,
    AddUserRequest,
    AddEmployeesRequest
    
  };
};

export default useFetch;
