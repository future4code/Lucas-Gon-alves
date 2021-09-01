export const goToLogin = (history) => history.pushState("/login");

export const goToSignUp = (history) => history.pushState("/cadastro");

export const goToPostList = (history) => history.pushState("/");

export const goToPostDetail = (history, id) =>
  history.pushState(`/detalhe/${id}`);
