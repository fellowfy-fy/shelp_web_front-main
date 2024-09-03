import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useLikePost = (post) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const [likes, setLikes] = useState(post.likes_num);
	const [isLiked, setIsLiked] = useState(post.liked);
	const showToast = useShowToast();
	const urlLike = 'http://0.0.0.0:1234/v1/u/like/'
	const urlUnlike = 'http://0.0.0.0:1234/v1/u/unlike/'

	const handleLikePost = async (inputs) => {
		if (isUpdating) return;
		if (!authUser) return showToast("Error", "You must be logged in to like a post", "error");
		setIsUpdating(true);

		const formDetails = new URLSearchParams();
		formDetails.append('username', inputs.username);
		formDetails.append('password', inputs.password);

		try {
			const response = await fetch(urlLike+inputs.post_uid, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formDetails,
			});
			if (response.ok) {
				const data = await response.json();
			}

			setIsLiked(!isLiked);
			isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsUpdating(false);
		}
	};

	return { isLiked, likes, handleLikePost, isUpdating };
};

export default useLikePost;
