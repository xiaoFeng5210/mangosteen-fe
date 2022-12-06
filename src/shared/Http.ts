import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export class Http {
	instance: AxiosInstance
	constructor(baseURL: string) {
		this.instance = axios.create({
			baseURL
		})
	}
	
	
}