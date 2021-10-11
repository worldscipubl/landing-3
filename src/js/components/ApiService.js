import axios from 'axios';
import HTTPError from './HTTPError';

class ApiService {
  constructor() {
    // this._API_BASE = 'https://worldscipubl.com/main';
    this._API_BASE = '/main';
    this.hasLogging = true;
    this.wspAxios = axios.create({
      baseURL: this._API_BASE,
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    });
  }

  async getResource({
    url = null,
    params = null,
    auth = null,
    responseType = null,
  }) {
    const config = {};
    params && (config.params = params);
    auth && (config.auth = auth);
    responseType && (config.responseType = responseType);

    try {
      const response = await this.wspAxios.get(url, config);
      this.logMessage('Response API', response);
      return response;
    } catch (error) {
      const handledError = new HTTPError(error);
      this.logMessage('Response Error', handledError);
      throw handledError;
    }
  }

  async setResource({
    url = null,
    data = null,
    params = null,
    auth = null,
  }) {
    const config = {};
    params && (config.params = params);
    auth && (config.auth = auth);

    try {
      const response = await this.wspAxios.post(url, data, config);
      this.logMessage('Response API', response);
      return response;
    } catch (error) {
      const handledError = new HTTPError(error);
      this.logMessage('Response Error', handledError);
      throw handledError;
    }
  }

  logMessage(msg, data) {
    if (!this.hasLogging) return;
    console.groupCollapsed(`${msg}`);
    console.table(data?.data || 'Empty response');
    console.log(data);
    console.groupEnd();
  }
}

export default ApiService;
