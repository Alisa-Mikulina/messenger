export const bem = (...styles: (string | boolean | null | undefined)[]): string => {
	return styles.filter((style) => typeof style === 'string').join(' ');
};

export const noop: () => void = () => null;
