declare const OktaAuth: any;

class OktaAuthService {
  authClient: any;

  constructor() {
    this.authClient = new OktaAuth({
    url: 'https://dev-662113.okta.com',
    clientId: '0oa38buw1cW33DAUq357',
    redirectUri: 'http://localhost:3333/authorization-code/callback'
    });
    console.log('Okta init');
    this.login = this.login.bind(this);
  }

  isAuthenticated = async (): Promise<boolean> => {
    return await this.authClient.session.exists();
  }

  login(user: {username: string, password: string}): Promise<any> {
    console.log('logging in');
    return new Promise<any>(async (resolve, reject) => {
      try {
        const signIn = await this.authClient.signIn(user);
        if (signIn.status === 'SUCCESS') {
          let userName: string;
          try {
            const token = await this.authClient.token
              .getWithoutPrompt({
                responseType: "id_token",
                scopes: ["openid", "profile", "email"],
                sessionToken: signIn.sessionToken,
                redirectUri: "http://localhost:3333"
              });
            userName = token.claims.name;
            this.authClient.tokenManager.add('idToken', token);
          } catch (err) {
            console.log('Failed to get tokens: ', err)
          }
          resolve(userName);
        }
        reject(false);
      } catch (err) {
        console.warn('Failed to login: ', err)
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
      const user = await this.authClient.tokenManager.get('idToken');
      return user;
    } catch (err) {
      return err;
    }
  }
}

export const Auth = new OktaAuthService();