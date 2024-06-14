export default interface ResponseData {
    success: boolean;
    message?: string;
    data?: any;
}

export const getErrMessage = (ex: any) => {
    if (ex instanceof Error) {
        return `An error occurred: ${ex.message}`;
    } 
    
    return `An unexpected error occurred: ${ex}`;
}