/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppRoot {
    'history': RouterHistory;
  }
  interface OktaLogin {
    'history': RouterHistory;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLOktaLoginElement extends Components.OktaLogin, HTMLStencilElement {}
  var HTMLOktaLoginElement: {
    prototype: HTMLOktaLoginElement;
    new (): HTMLOktaLoginElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'okta-login': HTMLOktaLoginElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppRoot {
    'history'?: RouterHistory;
  }
  interface OktaLogin {
    'history'?: RouterHistory;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-root': AppRoot;
    'okta-login': OktaLogin;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'okta-login': LocalJSX.OktaLogin & JSXBase.HTMLAttributes<HTMLOktaLoginElement>;
    }
  }
}


