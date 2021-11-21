import {APP_ID} from '../../../config';

let timer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  tryLogin(context) {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('token');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    } 

    timer = setTimeout(() => context.dispatch('autoLogout'), expiresIn);

    context.commit('setUser', {
      userId,
      token,
    });
  },
  async auth(context, payload) {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APP_ID}`;

    if (payload.mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APP_ID}`
    }

    const res = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    
    const resData = await res.json();

    if (!res.ok) {
      throw new Error('Failed to login!');
    }

    const expiredIn = +resData.expiredIn * 1000;
    const expirationDate = new Date().getTime() + expiredIn;

    timer = setTimeout(function() {
      context.dispatch('autoLogout');
    }, expiredIn);

    localStorage.setItem('token', resData.idToken);
    localStorage.setItem('userId', resData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    context.commit('setUser', {
      token: resData.idToken,
      userId: resData.localId,
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.dispatch('setAutoLogout');
  }
};
