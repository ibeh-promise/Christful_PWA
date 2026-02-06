import useSWR, { SWRConfiguration } from 'swr';

const fetcher = async (url: string) => {
    const token = localStorage.getItem('auth_token');
    const response = await fetch(url, {
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the data.');
        // Attach extra info to the error object.
        (error as any).info = await response.json().catch(() => ({}));
        (error as any).status = response.status;
        throw error;
    }

    return response.json();
};

export function useApi<T>(url: string | null, config?: SWRConfiguration) {
    const { data, error, mutate, isLoading, isValidating } = useSWR<T>(url, fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        ...config,
    });

    return {
        data,
        error,
        mutate,
        isLoading,
        isValidating,
    };
}
