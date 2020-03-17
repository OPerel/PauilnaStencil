import { h } from '@stencil/core';

export const auth = {
  isAuthenticated: false,
  login: function() {
    this.isAuthenticated = true;
    console.log('logging in');
  },
  logout: function() {
    this.isAuthenticated = false;
  }
}
// const isAuthenticated = (): boolean => {
//   return auth.isAuthenticated;
// }

export const PrivateRoute = ({ component, ...props}: { [key: string]: any}) => {
  const Component = component;
  // const redirectUrl = props.failureRedirect || '/login';

  return (
    <stencil-route {...props} routeRender={
      (props: { [key: string]: any}) => {
        if (auth.isAuthenticated) {
          return <Component {...props} {...props.componentProps}></Component>;
        }
        return <stencil-router-redirect url="/login"></stencil-router-redirect>
      }
    }/>
  );
}
