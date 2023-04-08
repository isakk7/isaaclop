import { Alert } from "react-native";

const useAlert = () => {
  /**
   * @description
   * Handle the possible errors during the execution of a function
   * setting the error message.
   *
   * @param {Function} func
   * @returns Return the result of the function provided as a parameter
   */
  const waitingResponse = func => {
    return async (...args) => {
      try {
        return await func(...args);
      } catch (error) {
        Alert.alert(error.message);
        console.log(error.message)
      }
    };
  };

  return waitingResponse;
};

export default useAlert;
