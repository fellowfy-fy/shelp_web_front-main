import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { useState } from "react";

const useSignUpWithEmailAndPassword = () => {
	const [loading, setLoading] = useState(false);
	const showToast = useShowToast();
	const loginUser = useAuthStore((state) => state.login);
	const[error, setError] = useState("");

	const signup = async (inputs) => {
		if (!inputs.email || !inputs.password || !inputs.username || !inputs.fname) {
			showToast("Error", "Please fill all the fields", "error");
			return;
		}

		const formDetails = new URLSearchParams();
		formDetails.append('email', inputs.email);
		formDetails.append('username', inputs.username);
		formDetails.append('fname', inputs.fname);
		formDetails.append('password', inputs.password);

		try {
			const response = await fetch('http://0.0.0.0:1234/v1/u/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formDetails,
			});

			console.log(response)
			setLoading(false);

			if (response.ok) {
				const data = await response.json();
				localStorage.setItem('token', data.access_token);
				//navigate('/protected');
			} else {
				const errorData = await response.json();
				setError(errorData.detail || 'Authentication failed!');
			}
		} catch (error) {
			showToast("Error", error.message, "error");
			console.log("fake")
			setLoading(false);
			setError('An error occurred. Please try again later.');
		}

/*
			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.username,
					fullName: inputs.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				//loginUser(userDoc);
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
		*/
	};

	return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
