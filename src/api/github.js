const protocol = 'https://';
const host = 'api.github.com/users/';

const getUser = (username) => {
  const API_URL = `${protocol}${host}${username}`;
  return fetch(API_URL)
    .then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      }
      return { error: 'Error 404' };
    });
};
export default getUser;
