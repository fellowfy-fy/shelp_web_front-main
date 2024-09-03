export const timeAgo = (timestamp) => {
	const now = Date.now();
	const secondsAgo = Math.floor((now - timestamp) / 1000);

	console.log(secondsAgo)

	if (secondsAgo < 60) {
		return `${secondsAgo}s ago`;
	} else if (secondsAgo < 3600) {
		const minutesAgo = Math.floor(secondsAgo / 60);
		return `${minutesAgo}m ago`;
	} else if (secondsAgo < 86400) {
		const hoursAgo = Math.floor(secondsAgo / 3600);
		return `${hoursAgo}h ago`;
	} else if (secondsAgo < 604800) {
		const daysAgo = Math.floor(secondsAgo / 86400);
		return `${daysAgo}d ago`;
	} else if (secondsAgo < 31536000) {
		const monthsAgo = Math.floor(secondsAgo / 604800);
		return `${monthsAgo}w ago`;
	} else {
		const yearsAgo = Math.floor(secondsAgo / 31536000); 
		return `${yearsAgo}y ago`;
	}
};
