"use server";

import { JSONObject, ResponseData } from "@/app/lib/definitions";
import * as Utils from '../utils';
import { findDocument, addDocument, updateDocument } from "../db";


export const getClientList = async(): Promise<ResponseData> => {
    return await findDocument("clients", {});
}

export const saveClient = async(clientData: JSONObject): Promise<ResponseData> => {
  
    if( clientData._id ) { // for update case
        return await addDocument("clients", clientData);
    }
    
    // new case
    return await updateDocument("clients", clientData);
}

