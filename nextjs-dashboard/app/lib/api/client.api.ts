"use server";

import { JSONObject, ResponseData } from "@/app/lib/definitions";
import * as Utils from '../utils';
import { findDocument, addDocument, updateDocument } from "../db";


export const getClientList = async(): Promise<ResponseData> => {
    return await findDocument("clients", {});
}

export const saveClientData = async(clientData: JSONObject): Promise<ResponseData> => {
  console.log("====================== API saveClientDataa");
    if( clientData._id ) { // for update case
        console.log("----------- Update");
        return await updateDocument("clients", clientData);
    }
    
    // new case
        console.log("----------- Add new");
    return await addDocument("clients", clientData);
}

