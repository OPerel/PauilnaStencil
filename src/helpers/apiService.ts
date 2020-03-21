import { Auth } from './oktaAuth';

class ApiService {

  constructor() {}

  async getUserFlows(): Promise<any> {
    const url = `http://localhost:8000/api/getuserflows?SessionId=dslf546khds$GgGfhsdfdfsd`;
    const accessToken = await Auth.getAccessToken();
    console.log('send getuserflows req with accessToken: ' + accessToken.accessToken + '\nAnd static SessionId');
    try {
      return await fetch(url, {
        method: 'get',
        headers: {
          authorization: accessToken.accessToken
        },
      })
    } catch (err) {
      console.warn('Error fetching user flows: ', err);
      return err;
    }
  }
}

export const Api = new ApiService();