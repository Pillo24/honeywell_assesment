export const validateEmail = (email) => {
  const isValidEmail = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  return isValidEmail
}

export const validatePassword = (password) => {
  const isValid = password.length >= 6 && password.length <= 16
  return isValid
}
