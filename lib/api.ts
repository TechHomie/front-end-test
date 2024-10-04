import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'https://dummyjson.com';

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const useApi = () => {
    const get = async <T>(url: string, config?: AxiosRequestConfig) => {
        try {
            const response = await api.get<T>(url, config);
            return response.data;
        } catch (error) {
            console.error('API GET Error:', error);
            throw error;
        }
    };

    const post = async <T>(url: string, data: any, config?: AxiosRequestConfig) => {
        try {
            const response = await api.post<T>(url, data, config);
            return response.data;
        } catch (error) {
            console.error('API POST Error:', error);
            throw error;
        }
    };

    return { get, post };
};