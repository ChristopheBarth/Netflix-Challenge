interface UserTypes {
  email: string;
  password: string;
  confirmPassword: string;
  first_name: string;
  last_name: string;
}

interface SvgTypes {
  path: string;
  width: string;
  height: string;
}

interface FormTypes {
  user: UserTypes;
  handleChangeForm: React.ChangeEventHandler<HTMLInputElement>;
}
