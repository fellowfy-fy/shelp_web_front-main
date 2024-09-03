import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const showToast = useShowToast();
	const [error, setError] = useState('');
	const loginUser = useAuthStore((state) => state.login);
	const [isLoading, setLoading] = useState(false);
	const url = 'http://0.0.0.0:1234/v1/u/login'

	const login = async (inputs) => {
		if (!inputs.username || !inputs.password) {
			return showToast("Error", "Please fill all the fields", "error");
		}
		
		const formDetails = new URLSearchParams();
		formDetails.append('username', inputs.username);
		formDetails.append('password', inputs.password);

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formDetails,
			});
			
			setLoading(false);

			if (response.ok) {
				const data = await response.json();
				localStorage.setItem('token', data.access_token);
				loginUser(data.access_token);
				//navigate('/protected');
			} else {
				const errorData = await response.json();
				console.log(errorData)
				setError(errorData.detail || 'Authentication failed!');
			}
		} catch (error) {
			showToast("Error", error.message, "error");
			setLoading(false);
			setError('An error occurred. Please try again later.');
		}
	};

	return { isLoading, error, login };
};

export default useLogin;
