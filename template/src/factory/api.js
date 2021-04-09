import axios from 'axios';
import env from '../config/appsettings.json';

const HEADER_TYPE = 'Content-Type';
const TYPE_JSON = 'application/json; charset=utf-8';

const API = () => {
    const api = axios.create({ baseURL: env.api_url });

    api.interceptors.request.use(async (config) => {
        const headerConfig = config;
        headerConfig.headers.post[HEADER_TYPE] = TYPE_JSON;
        return headerConfig;
    });

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return api;
};

export default API();
