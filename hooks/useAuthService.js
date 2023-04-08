import useAlert from "./useAlert";
import useFetch from "./useFetch";
import { useContext }  from "react"
import { UserContext } from "../context/useContext"

const useAuthService = () => {
  const { loginRequest } = useFetch();
  const waitingResponse = useAlert();
  const { setUserInfo } = useContext(UserContext);

  const signIn = waitingResponse(async (email, password, navigation) => {
    const user = await loginRequest({ email, password });
    setUserInfo (user)
    navigation.navigate("Home");
  });

  const signOut = () => {
    throw new Error("Method not implemented");
  };

  return { signIn, signOut };
};

export default useAuthService;
