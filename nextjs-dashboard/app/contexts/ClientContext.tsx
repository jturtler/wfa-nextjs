"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import * as Utils from "@/app/lib/utils";
import * as api from '../lib/api';
import * as Constant from '../lib/constants';
import { JSONObject, ResponseData } from '../lib/definitions';

interface ClientContextProps {
	clientList: JSONObject[] | null;
    processing: string;
    saveClient: (client: JSONObject) => Promise<void>;
	error: string | null;
}

const ClientContext = createContext<ClientContextProps>({
	clientList: null,
    saveClient: async () => { },
    processing: "",
	error: null,
});

export const useClients = (): ClientContextProps => {
	const context = useContext(ClientContext);
	if (!context) {
	  throw new Error('useClients must be used within a ClientProvider');
	}
	return context;
};

export const ClientProvider = ({ children }: { children: ReactNode }) => {
	const [clientList, setClientList] = useState<JSONObject[] | null>(null);
	const [processing, setProcessing] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchClientList()
	  }, []);

	const fetchClientList = async () => {
		setProcessing(Constant.PROCESSING_CLIENT_LIST_LOADING);
		setError(null);
		try {
			const responseData: ResponseData = await api.getClientList();
			if (responseData.success) {
                setClientList(responseData.data);
            }
            else {
                setClientList(null);
				setError(responseData.message!);
            }

		} catch (err) {
			setError(Utils.getErrMessage(err));
		} finally {
			setProcessing(Constant.PROCESSING_CLIENT_LIST_LOADED);
		}
	};

	const saveClient = async(clientData: JSONObject) => {
		try {
			setProcessing(Constant.PROCESSING_CLIENT_DATA_SAVING);

			const responseData: ResponseData = await api.saveClientData(clientData);

			const tempList = Utils.cloneJSONObject(clientList!);
			const found = Utils.findItemFromList(tempList, clientData._id, "_id");
			if( !found ) {
				tempList.push(clientData);
			}
			else {
				Utils.findAndReplaceItemFromList( tempList, clientData._id, "_id", clientData );
			}
			
			if (responseData.success) {
                setClientList(tempList);
				setError(null);
            }
            else {
				setError(responseData.message!);
            }

		} catch (err) {
			setError(Utils.getErrMessage(err));
		} finally {
			setProcessing(Constant.PROCESSING_CLIENT_DATA_SAVED);
		}
	}

	return (
		<ClientContext.Provider value={{ clientList, saveClient, processing, error }}>
			{children}
		</ClientContext.Provider>
	);
};
