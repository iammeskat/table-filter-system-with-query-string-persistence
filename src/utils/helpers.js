export const toQueryStrings = (object) => {
	if (!object) return "";
	else
		return (
			"?" +
			Object.keys(object)
				.map((key) => `${key}=${object[key].toString()}`)
				.join("&")
		);
};

export const shallowRoute = (path) => {
	if (typeof window !== "undefined") {
		window.history.replaceState({}, undefined, path);
	}
};