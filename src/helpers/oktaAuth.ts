declare const OktaAuth: any;

class OktaAuthService {
  private authClient: any;

  constructor() {
    this.authClient = new OktaAuth({
    url: 'https://dev-662113.okta.com',
    clientId: '0oa38buw1cW33DAUq357',
    redirectUri: 'http://localhost:3333/authorization-code/callback',
    issuer: 'https://dev-662113.okta.com/oauth2/default'
    });
    console.log('Okta init');
    this.login = this.login.bind(this);
  }

  isAuthenticated = async (): Promise<boolean> => {
    return await this.authClient.session.exists();
  }

  login(user: {username: string, password: string}): Promise<string> {
    console.log('logging in');
    return new Promise<string>(async (resolve, reject) => {
      try {
        const signIn = await this.authClient.signIn(user);
        if (signIn.status === 'SUCCESS') {
          let userName: string;
          try {
            const tokens = await this.authClient.token
              .getWithoutPrompt({
                responseType: ["token", "id_token"],
                scopes: ["openid", "profile", "email"],
                sessionToken: signIn.sessionToken,
                redirectUri: "http://localhost:3333"
              });
            userName = tokens[1].claims.name;
            this.authClient.tokenManager.add('accessToken', tokens[0]);
            this.authClient.tokenManager.add('idToken', tokens[1]);
          } catch (err) {
            console.warn('Failed to get tokens: ', err)
          }
          resolve(userName);
        }
      } catch (err) {
        console.warn('Failed to login: ', err);
        reject(err.message);
      }
    })
  }

  logout = (): void => {
    console.log('logging out');
    this.authClient.tokenManager.clear();
    this.authClient.signOut();
  }

  getUser = async (): Promise<any> => {
    try {
      return await this.authClient.tokenManager.get('idToken');
    } catch (err) {
      return err;
    }
  }

  getAccessToken = async (): Promise<any> => {
    try {
      return await this.authClient.tokenManager.get('accessToken');
    } catch (err) {
      return err;
    }
  }
}

export const Auth = new OktaAuthService();