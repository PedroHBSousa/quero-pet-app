interface UserData {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirm_password: string;
    birth: string;
    sex: string;
}
interface AddressData {
    zip_code: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string;
}
interface FormDataSignUp {
    user: UserData;
    address: AddressData;
    photo: File; 
}

export const buildFormDataSignUp = (data: FormDataSignUp) => {
    const formData = new FormData();

    formData.append('name', data.user.name);
    formData.append('email', data.user.email);
    formData.append('cpf', data.user.cpf);
    formData.append('password', data.user.password);
    formData.append('confirm_password', data.user.confirm_password);
    formData.append('birth', data.user.birth);
    formData.append('sex', data.user.sex);
    formData.append('zip_code', data.address.zip_code);
    formData.append('state', data.address.state);
    formData.append('city', data.address.city);
    formData.append('neighborhood', data.address.neighborhood);
    formData.append('street', data.address.street);
    formData.append('number', data.address.number);
    formData.append('complement', data.address.complement);
    formData.append('photo', data.photo);

    return formData;
}