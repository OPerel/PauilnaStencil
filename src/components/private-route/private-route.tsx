import { h, FunctionalComponent  } from '@stencil/core';

interface PrivateRouteProps {
  url: string;
  component: string;
  isAuth: boolean;
}

export const PrivateRoute: FunctionalComponent<PrivateRouteProps> = ({ component, isAuth }) => (
  <stencil-route routeRender={
    (props: { [key: string]: any}) => {
      if (isAuth) {
        const Component = component;
        console.log(`Logged in, navigating to Home page.`);
        return <Component {...props} />;
      } 
      console.log(`User is not logged in, navigating to Login page.`);
      return <stencil-router-redirect url='/login'></stencil-router-redirect>
    }
  }/>
);

