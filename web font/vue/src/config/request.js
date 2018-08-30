import axios from 'axios';
axios.interceptors.response.use(function (response) {
    console.log(response);
    return response;
}, function (error) {
    console.log(error);
    return Promise.reject('titititi');
});
const post = (url, params, config = {}) => {
    let token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
            ...config,
            baseURL: 'http://localhost:3000',
            headers: { 'Content-Type': 'application/json ' },
            // transformRequest: [function (data = {}) {
            //     data.token = token;
            //     return JSON.stringify(data);
            // }],
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    });
};
export default { post };