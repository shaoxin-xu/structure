import axios from 'axios';
import APP_CONST from './appConst';
import router from '@/router/index';

const post = (url, params, config = {}) => {
    let token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
            baseURL: APP_CONST.BASE_URL,
            headers: { 'Content-Type': 'application/json ' },
            transformRequest: [function (data = {}) {
                data.token = token;
                return JSON.stringify(data);
            }],
            ...config
        }).then(function (response) {
            resolve(response.data);
        }).catch(function (error) {
            if (error.response) {   // that falls out of the range of 2xx
                let { data, status, msg } = error.response;
                if (status == 401) {
                    if (router.app.$route.name != 'Login') router.app.$router.replace({ name: 'Login' });
                }
            }
        });
    });
};
export default { post };