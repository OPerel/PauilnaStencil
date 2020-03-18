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
  }

  isAuthenticated = async (): Promise<boolean> => {
    return await this.authClient.session.exists();
  }

  login = (user: {username: string, password: string}): Promise<boolean> => {
    console.log('logging in');
    return new Promise<boolean>((resolve, reject) => {
      this.authClient.signIn(user).then(res => {
        if (res.status === 'SUCCESS') {
          this.authClient.token
            .getWithoutPrompt({
              responseType: "id_token",
              scopes: ["openid", "profile", "email"],
              sessionToken: res.sessionToken,
              redirectUri: "http://localhost:3333"
            })
            .then(token => {
              console.log(token);
              this.authClient.tokenManager.add('sessionIdToken', token);
            })
            .catch(err => console.log('Failed to get tokens: ', err));
          resolve(true);
        }
        reject(false);
      })
      .fail(err => console.warn('Failed to login: ', err));
    })
  }

  logout = (): void => {
    console.log('logging out');
    this.authClient.signOut();
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