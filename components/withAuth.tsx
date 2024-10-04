import { useRouter } from 'next/router';
import { useEffect, ComponentType } from 'react';
import { useAuth } from '../lib/auth';

export function withAuth<T extends object>(WrappedComponent: ComponentType<T>) {
    return function WithAuth(props: T) {
        const router = useRouter();
        const { isAuthenticated } = useAuth();

        useEffect(() => {
            if (!isAuthenticated()) {
                router.push('/login');
            }
        }, [router]);

        if (!isAuthenticated()) {
            return null; // or a loading spinner
        }

        return <WrappedComponent {...props} />;
    };
}