import axios from 'axios'
import router from '@/router'

const instance = axios.create();

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

instance.interceptors.response.use(
    response => {
        const { status } = response;
        
        if (status == 200 && ('message' in response.data)) {
            Bus.$emit('success', response.data.message);
        }
        
        return Promise.resolve(response);
    },
    error => {
        const { status } = error.response;

        if (status >= 500) {
            Bus.$emit('error', error.response.data.message);
        }

        if (status === 401 || status === 419) {
            localStorage.clear();
            router.push({name: 'login' });
            Bus.$emit('error', 'Sua sessão expirou, acesse novamente');
        }

        return Promise.reject(error)
    }
)

export default instance