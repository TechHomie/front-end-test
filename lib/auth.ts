import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useApi } from './api';

interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

export const useAuth = () => {
    const router = useRouter();
    const { post } = useApi();

    const login = async (credentials: LoginCredentials) => {
        try {
            const response = await post<LoginResponse>('/auth/login', credentials);
            Cookies.set('token', response.token, { secure: true, sameSite: 'strict' });
            router.push('/products');
            return response;
        } catch (error) {
            console.error('Login Error:', error);
            throw error;
        }
    };

    const logout = () => {
        Cookies.remove('token');
        router.push('/login');
    };

    const isAuthenticated = () => {
        return !!Cookies.get('token');
    };

    return { login, logout, isAuthenticated };
};
