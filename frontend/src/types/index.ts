export type AuthorizationParameters = {
	username: string;
	password: string;
};

export type UserParameters = {
	username: string;
};

export type User = {
	user?: UserParameters;
	login(data: UserParameters): void;
	logout(): void;
};

export type LoginParameters = {
	username?: string;
	password?: string;
};
