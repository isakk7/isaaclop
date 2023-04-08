const useErrorHandler = () => {
    /**
     * @description
     * Handle the possible erros during the executio no the function passed as a
     * parameter, in case of a error the function will take the error message and
     * will throw it.
     *
     * @param {Function} func
     * @returns Return the result of the function provided as a parameter
     * @throws Returns the error resulted of the execution of the function
     */
    const funcErrorWrapper = func => {
      return async (...args) => {
        try {
          return await func(...args);
        } catch (error) {
          const errMsg =
            error?.response?.data.msg || "Something went wrong, try again later.";
          throw new Error(errMsg);
        }
      };
    };
  
    return funcErrorWrapper;
  };
  
  export default useErrorHandler;
  
  
  