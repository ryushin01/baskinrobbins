export const RegExp = {
  ID: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
  NAME: /^(?=.*[a-zA-Z])(?=.*[가-힣])(?=.*\d{2,10})[a-zA-Z가-힣\d]{2,}$/,
  birth: /^[0-9]{8}$/,
};
