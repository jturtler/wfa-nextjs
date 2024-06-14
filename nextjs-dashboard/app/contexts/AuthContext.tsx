"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import * as Utils from "@/app/lib/utils";
import { checkLogin } from '../lib/api';
import { JSONObject } from '../lib/definitions';

interface AuthContextProps {
	isAuthenticated: boolean;
	user: JSONObject | null;
	login: (username: string, pin: string) => Promise<void>;
	loading: boolean;
	error: string | null;
}

const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: false,
	user: null,
	login: async () => { },
	loading: false,
	error: null,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const login = async (username: string, pin: string) => {
		setLoading(true);
		setError(null);
		try {
			const userData = await checkLogin(username, pin);
			console.log(userData);
			if (userData) { // Login successfully
				setIsAuthenticated(true);
                setUser(userData);
            }
            else {
                setIsAuthenticated(false);
				setError("Login failed");
            }

		} catch (err) {
			setError(Utils.getErrMessage(err));
		} finally {
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login, loading, error }}>
			{children}
		</AuthContext.Provider>
	);
};
