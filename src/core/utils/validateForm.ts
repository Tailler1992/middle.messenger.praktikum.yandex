import sInput from "../../components/textField/textField.module.pcss";

interface Data {
  reg: RegExp;
  errorMes: string;
}

let errors: Record<string, string> = {};
let currentUrl = window.location.href;

const validationObj: Record<string, Data> = {
  login: {
    reg: /^(?!^\d+)[a-zA-Z0-9-_]{3,20}$/,
    errorMes: "Логин должен быть от 3 до 20 символов",
  },
  password: {
    reg: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorMes: "Пароль должен быть от 8 до 40 символов и включать заглавную букву и цифру",
  },
  email: {
    reg: /^[A-Z0-9_-]+@[A-Z0-9-]+.[A-Z]{2,4}$/i,
    errorMes: "Некорректный формат почты",
  },
  first_name: {
    reg: /^(?=.{3,20}$)[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*(-[A-ZА-ЯЁa-zа-яё]+)*[A-ZА-ЯЁa-zа-я]$/,
    errorMes: "Имя должно быть от 3 до 20 символов и начинаться с заглавной буквы",
  },
  second_name: {
    reg: /^(?=.{3,20}$)[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*(-[A-ZА-ЯЁa-zа-яё]+)*[A-ZА-ЯЁa-zа-я]$/,
    errorMes: "Фамилия должна быть от 3 до 20 символов и начинаться с заглавной буквы",
  },
  display_name: {
    reg: /^(?=.{3,20}$)[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*(-[A-ZА-ЯЁa-zа-яё]+)*[A-ZА-ЯЁa-zа-я]$/,
    errorMes: "Имя в чате должно быть от 3 до 20 символов и начинаться с заглавной буквы",
  },
  phone: {
    reg: /^(?=.{10,15}$)(8|\+7|7)\d*$/,
    errorMes: "Некорректный формат телефона",
  },
};

validationObj.newPassword = validationObj.password;
validationObj.oldPassword = validationObj.password;
validationObj.repeatNewPassword = validationObj.password;

export const validateChatInput = (evt: Event) => {
  if (!/.+/.test((evt.target as HTMLInputElement).value)) {
    console.log("Поле не может быть пустым");
  }
};

const isValidateInput = (input: HTMLInputElement): boolean => {
  if (currentUrl != window.location.href) {
    errors = {};
    currentUrl = window.location.href;
  }

  const value = input.value;
  const name = input.name;
  const {reg, errorMes} = validationObj[name];
  const errorBlock = document.querySelector("#errorBlock");

  if (!reg.test(value)) {
    input.classList.add(sInput.error);
    addErrorToList(name, errorMes);
  } else {
    input.classList.remove(sInput.error);
    delete errors[name];
  }

  validatePassForm();

  errorBlock!.innerHTML = "";

  getUniqueValues(errors).forEach(error => {
    errorBlock!.insertAdjacentHTML("beforeend", `<p>${error}</p>`);
  });

  return Object.entries(errors).length === 0;
};

const addErrorToList = (name: string, message: string): void => {
  if (name in errors) {
    return;
  }

  errors[name] = message;
};

const getUniqueValues = (obj: Record<string, string>): string[] => {
  const values = Object.values(obj);
  return [...new Set(values)];
};

const validateAndGetData = () => {
  const form = document.querySelector("form");

  if (!form) return;

  const data: any = {};
  const isValid: boolean[] = [];
  const inputsForm = form.querySelectorAll("input");

  inputsForm.forEach((input: HTMLInputElement) => {
    isValid.push(isValidateInput(input));
    data[input.name] = input.value;
  });

  if (isValid.includes(false)) {
    return null;
  }

  return data;
};

const validatePassForm = () => {
  const form = document.querySelector("#password-form");

  if (!form) return;

  const oldPass = form.querySelector("input[name=oldPassword]") as HTMLInputElement;
  const newPass = form.querySelector("input[name=newPassword]") as HTMLInputElement;
  const repeatNewPass = form.querySelector("input[name=repeatNewPassword]") as HTMLInputElement;

  if (oldPass) {
    if (oldPass.value.length > 0 && newPass.value.length > 0) {
      if (oldPass.value === newPass.value) {
        oldPass.classList.add(sInput.errorPassMatch);
        newPass.classList.add(sInput.errorPassMatch);
        addErrorToList("errorMatch", "Старый пароль и новый пароль не могут совпадать");
      } else {
        oldPass.classList.remove(sInput.errorPassMatch);
        newPass.classList.remove(sInput.errorPassMatch);
        delete errors["errorMatch"];
      }
    }
  }

  if (newPass.value.length > 0 && repeatNewPass.value.length > 0) {
    if (newPass.value !== repeatNewPass.value) {
      newPass.classList.add(sInput.errorPassRepeat);
      repeatNewPass.classList.add(sInput.errorPassRepeat);
      addErrorToList("errorDifference", "Пожалуйста, убедитесь, что новый пароль и его повторное введение совпадают.");
    } else {
      newPass.classList.remove(sInput.errorPassRepeat);
      repeatNewPass.classList.remove(sInput.errorPassRepeat);
      delete errors["errorDifference"];
    }
  }
};

export {isValidateInput, validateAndGetData};
