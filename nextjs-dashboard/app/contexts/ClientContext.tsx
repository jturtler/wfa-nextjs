"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import * as Utils from "@/app/lib/utils";
import * as api from '../lib/api';
import { JSONObject, ResponseData } from '../lib/definitions';

interface ClientContextProps {
	list: JSONObject[] | null;
    // fetchClientList: () => Promise<void>;
    saveClient: (client: JSONObject) => Promise<void>;
    loading: boolean;
	error: string | null;
}

const ClientContext = createContext<ClientContextProps>({
	list: null,
    // fetchClientList: async () => { },
    saveClient: async () => { },
    loading: false,
	error: null,
});

export const useClients = () => useContext(ClientContext);

export const ClientProvider = ({ children }: { children: ReactNode }) => {
	const [list, setList] = useState<JSONObject[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchClientList()
	  }, []);

	const fetchClientList = async () => {
		setLoading(true);
		setError(null);
		try {
			const responseData: ResponseData = await api.getClientList();
			if (responseData.success) {
                setList(responseData.data);
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

	const saveClient = async(clientData: JSONObject) => {
		try {
			const responseData: ResponseData = await api.saveClientData(clientData);
			console.log(responseData);
			const tempList = Utils.cloneJSONObject(list!);
			const found = Utils.findItemFromList(tempList, clientData._id, "_id");
			if( !found ) {
				tempList.push(clientData);
			}
			else {
				Utils.findAndReplaceItemFromList( tempList, clientData._id, "_id", clientData );
			}
			
			if (responseData.success) {
                setList(tempList);
				setError(null);
            }
            else {
				setError(responseData.message!);
            }

		} catch (err) {
			setError(Utils.getErrMessage(err));
		} finally {
			setLoading(false);
		}
	}

	return (
		<ClientContext.Provider value={{ list, saveClient, loading, error  }}>
			{children}
		</ClientContext.Provider>
	);
};
