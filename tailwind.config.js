module.exports = {
	mode: "jit",
	purge: ["./*.html"],
	content: [],
	theme: {
		extend: {
			colors: {
				primaryColor: "var(--primary-color)",
				textDarkColor: "var(--text-dark-color)",
				textLightColor: "var(--text-light-color)",
				textHighlightColor: "var(--text-highlight-color)",
			},
		},
	},
	plugins: [],
};
