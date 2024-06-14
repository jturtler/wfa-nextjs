"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as Utils from "@/app/lib/utils";
import * as api from '../lib/api';
import { JSONObject, ResponseData } from '../lib/definitions';

interface ClientContextProps {
	list: JSONObject | null;
    fetchClientList: () => Promise<void>;
    loading: boolean;
	error: string | null;
}

const ClientContext = createContext<ClientContextProps>({
	list: null,
    fetchClientList: async () => { },
    loading: false,
	error: null,
});

export const useClients = () => useContext(ClientContext);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
	const [list, setList] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchClientList = async () => {
		setLoading(true);
		setError(null);
		try {
			const responseData: ResponseData = await api.getClientList();
			if (responseData.success) {
                setList(list);
            }
            else {
                setList(null);
				setError(responseData.message!);
            }

		} catch (err) {
			setError(Utils.getErrMessage(err));
		} finally {
			setLoading(false);
		}
	};

	return (
		<ClientContext.Provider value={{ list, fetchClientList, loading, error  }}>
			{children}
		</ClientContext.Provider>
	);
};
