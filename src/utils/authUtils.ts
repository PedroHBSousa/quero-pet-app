import {SignUpData} from '../contexts/AuthContext';

export const buildFormDataSignUp = (data: SignUpData) => {
  const formData = new FormData();

  const nameSplit = data.name.split(' ');
  const first_name = nameSplit[0];
  const last_name = nameSplit[nameSplit.length - 1];

  formData.append('first_name', first_name);
  formData.append('last_name', last_name);
  formData.append('email', data.email);
  formData.append('cpf', data.cpf);
  formData.append('password', data.password);
  formData.append('confirm_password', data.confirm_password);
  formData.append('birth_date', data.birth_date);
  formData.append('phone', data.phone);
  formData.append('zip_code', data.zip_code);
  formData.append('state', data.state);
  formData.append('city', data.city);
  formData.append('neighborhood', data.neighborhood);
  formData.append('street', data.street);
  formData.append('number', data.number);
  formData.append('complement', data.complement);
  formData.append('country', 'Brasil');
  formData.append('photo', data.photo);

  return formData;
};
