export type ErrorMessage = {
  data: {
    message: string
  }
};

export type LoginFormData = {
  username: string;
  password: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
