export const goToLogin = (history) => history.push("/login");

export const goToSignUp = (history) => history.push("/cadastro");

export const goToPostList = (history) => history.push("/");

export const goToPostDetail = (history, id) => history.push(`/detalhe/${id}`);
