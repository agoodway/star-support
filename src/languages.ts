const allLanguages = {
	en: 'English',
} as const;

/**
 * Map of language codes to a written out language name.
 * Used to populate the language switcher in the navbar.
 */
export default allLanguages;

export const rtlLanguages = new Set([]);
