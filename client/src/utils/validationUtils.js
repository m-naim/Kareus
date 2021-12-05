const emailValidation = (email) => {
  if (!email) {
    return 'Required';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'address email Invalid';
  }
  return null;
};
const passwordValidation = (password) => {
  if (!password) {
    return 'Required';
  } if (password.length < 5) {
    return 'mot de pass trop court. il doit avoir plus de 5 caractéres';
  }
  return null;
};

export {
  emailValidation,
  passwordValidation,
};
