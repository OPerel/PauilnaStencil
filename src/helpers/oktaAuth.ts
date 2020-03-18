declare const OktaAuth: any;

class OktaAuthService {
  authClient: any;

  constructor() {
    this.authClient = new OktaAuth({
    url: 'https://dev-662113.okta.com',
    clientId: '0oa38buw1cW33DAUq357',
    redirectUri: 'http://localhost:3333'
    });
    console.log('Okta init');
  }

  isAuthenticated = async (): Promise<boolean> => {
    return await this.authClient.session.exists();
  }

  login = (): void => {
    console.log('logging in');
  }

  logout = (): void => {
    console.log('logging out');
  }

  getUser = async (): Promise<any> => {
    try {
      return await this.authClient.session.get();
    } catch (err) {
      return err;
    }
  }
}

export const Auth = new OktaAuthService();