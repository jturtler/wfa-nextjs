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
	setSelectedClient: (clientId: string) => void;
    saveActivity: (client: JSONObject, activity: JSONObject) => Promise<void>;
	clientError: string | null;
	selectedClient: JSONObject | null;
}

const ClientContext = createContext<ClientContextProps>({
	clientList: null,
    saveClient: async () => { },
    setSelectedClient: () => { },
    saveActivity: async () => { },
    processing: "",
	clientError: null,
	selectedClient: null
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
	const [selectedClientData, setSelectedClientData] = useState<JSONObject | null>(null);
	const [processing, setProcessing] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	console.log("--------------ClientProvider ");
	console.log (clientList);
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
	
	const setSelectedClient = (clientId: string) => {
		const found = Utils.findItemFromList(clientList!, clientId, "_id");
		setSelectedClientData(found);
	}

	const saveActivity = async(clientData: JSONObject, activityData: JSONObject) => {
		console.log(" =========== saveActivity ");
		setProcessing(Constant.PROCESSING_ACTIVITY_SAVING);
		
		console.log(" ----------- processing 1 : " + processing);

		try {
			const responseData: ResponseData = await api.saveActivityData(clientData, activityData);
			
			console.log(" ----------- processing 2 : " + processing);
			const tempList = Utils.cloneJSONObject(clientList!);

			if (responseData.success) {
				Utils.findAndReplaceItemFromList( tempList, clientData._id, "_id", responseData.data );
                setClientList(tempList);
				console.log(tempList);
				setError(null);
            }
            else {
				setError(responseData.message!);
            }

		} catch (err) {
			setError(Utils.getErrMessage(err));
		} finally {
			console.log(" ----------- processing 3 : " + processing);
			setProcessing(Constant.PROCESSING_ACTIVITY_SAVED);
			console.log(" ----------- processing 4 : " + processing);
		}
	}

	return (
		<ClientContext.Provider value={{ clientList, selectedClient: selectedClientData, setSelectedClient, saveClient, saveActivity, processing, clientError: error }}>
			{children}
		</ClientContext.Provider>
	);
};
