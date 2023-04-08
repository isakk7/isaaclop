const DAILY_FORM_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/medical-daily-form/";
const PATIENT_EVAT_FORMS =
  process.env.REACT_APP_URL + "/api/v1/medical-daily-form/patient-evat-form/";
const RED_EVAT_REQUEST = process.env.REACT_APP_URL + "/api/v1/red-evat/";
const RECORD_REQUEST = process.env.REACT_APP_URL + "/api/v1/record/";
const LOGIN_REQUEST = process.env.REACT_APP_URL + "/api/v1/auth/";
const PATIENT_REQUEST = process.env.REACT_APP_URL + "/api/v1/patient/";
const PATIENT_FILTER_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/patient/filter?";
const PATIENT_ASSIGN_NURSE =
  process.env.REACT_APP_URL + "/api/v1/patient/asign-nurse/";
const EMPLOYEE_FILTER_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/employee/filter?";
const EMPLOYEE_REQUEST = process.env.REACT_APP_URL + "/api/v1/employee/";
const EMPLOYEE_NURSES_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/employee/nurses";
const EMPLOYEE_NURSE_PATIENTS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/patient/nurse-patients/";
const EMPLOYEE_DOCTORS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/employee/doctors";
const CHANGE_PASSWORD =
  process.env.REACT_APP_URL + "/api/v1/employee/change-password/";
const NOTIFICATION_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/";
const PATIENT_NOTIFICATIONS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/patient-notifications/";
const NURSE_NOTIFICATIONS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/nurse-notifications/";
const DOCTOR_NOTIFICATIONS_REQUEST =
  process.env.REACT_APP_URL + "/api/v1/notification/doctor-notifications/";
const NEW_DOCTOR_NOTIFICATIONS =
  process.env.REACT_APP_URL + "/api/v1/notification/new-doctor-notifications/";
const NEW_REGISTER_REQUEST = 
  process.env.REACT_APP_URL + "/api/v1/register"

  const NEW_EMPLOYEES_REQUEST = 
  process.env.REACT_APP_URL + "/api/v1/register"

const Requests = {
  DAILY_FORM_REQUEST,
  RED_EVAT_REQUEST,
  PATIENT_FILTER_REQUEST,
  RECORD_REQUEST,
  PATIENT_REQUEST,
  EMPLOYEE_FILTER_REQUEST,
  EMPLOYEE_REQUEST,
  PATIENT_ASSIGN_NURSE,
  LOGIN_REQUEST,
  EMPLOYEE_NURSES_REQUEST,
  EMPLOYEE_NURSE_PATIENTS_REQUEST,
  EMPLOYEE_DOCTORS_REQUEST,
  NOTIFICATION_REQUEST,
  PATIENT_NOTIFICATIONS_REQUEST,
  DOCTOR_NOTIFICATIONS_REQUEST,
  NURSE_NOTIFICATIONS_REQUEST,
  PATIENT_EVAT_FORMS,
  NEW_DOCTOR_NOTIFICATIONS,
  CHANGE_PASSWORD,
  NEW_REGISTER_REQUEST,
  NEW_EMPLOYEES_REQUEST
};
export default Requests;




