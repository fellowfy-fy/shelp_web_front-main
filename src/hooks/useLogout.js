import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { useState } from "react";

const useLogout = () => {
	const [isLoggingOut, setLoggingOut] = useState(false);
	const [errorObj, setError] = useState(null)
	const showToast = useShowToast();
	const logoutUser = useAuthStore((state) => state.logout);

	const handleLogout = async () => {
		setLoggingOut(true)
		try {
			localStorage.removeItem("user-info");
			logoutUser();
		} catch (error) {
			showToast("Error", error.message, "error");
			setError(error)
		}
		finally{
			setLoggingOut(false)
		}
	};

	return { handleLogout, isLoggingOut, errorObj };
};

export default useLogout;
