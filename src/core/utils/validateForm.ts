import sInput from "../../components/textField/textField.module.pcss";

interface Data {
  reg: RegExp;
  errorId?: string;
  errorMes?: string;
}

// функция для проверки поля на валидность
const validationObj: Record<string, Data> = {
  login: {
    reg: /^(?!^\d+)[a-zA-Z0-9-_]{3,20}$/,
    errorId: "login",
    errorMes: "Логин должен быть от 3 до 20 символов",
  },
  password: {
    reg: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorId: "password",
    errorMes: "Пароль должен быть от 8 до 40 символов и включать заглавную букву и цифру",
  },
  repeat_password: {
    reg: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorId: "password",
    errorMes: "Пароль должен быть от 8 до 40 символов и включать заглавную букву и цифру",
  },
  old_password: {
    reg: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
    errorId: "password",
    errorMes: "Пароль должен быть от 8 до 40 символов и включать заглавную букву и цифру",
  },
  email: {
    reg: /^[A-Z0-9_-]+@[A-Z0-9-]+.[A-Z]{2,4}$/i,
    errorId: "email",
    errorMes: "Некорректный формат почты",
  },
  "first_name": {
    reg: /^(?=.{3,20}$)[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*(-[A-ZА-ЯЁa-zа-яё]+)*[A-ZА-ЯЁa-zа-я]$/,
    errorId: "first_name",
    errorMes: "Имя должно быть от 3 до 20 символов и начинаться с заглавной буквы",
  },
  "second_name": {
    reg: /^(?=.{3,20}$)[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*(-[A-ZА-ЯЁa-zа-яё]+)*[A-ZА-ЯЁa-zа-я]$/,
    errorId: "second_name",
    errorMes: "Фамилия должна быть от 3 до 20 символов и начинаться с заглавной буквы",
  },
  "display_name": {
    reg: /^(?=.{3,20}$)[A-ZА-ЯЁ][A-ZА-ЯЁa-zа-яё]*(-[A-ZА-ЯЁa-zа-яё]+)*[A-ZА-ЯЁa-zа-я]$/,
    errorId: "display_name",
    errorMes: "Имя в чате должно быть от 3 до 20 символов и начинаться с заглавной буквы",
  },
  phone: {
    reg: /^(?=.{10,15}$)(8|\+7|7)\d*$/,
    errorId: "phone",
    errorMes: "Некорректный формат телефона",
  },
  message: {
    reg: /.+/,
  },
  search: {
    reg: /.+/,
  },
};

export function validate(evt: Event, props: any) {
  if (validateInput(evt.target)) {
    props.setProps({value: (evt.target as HTMLInputElement).value});
  }
}

export function validateChatInput(evt: Event) {
  const {reg} = validationObj[(evt.target as HTMLInputElement).name];

  if (!reg.test((evt.target as HTMLInputElement).value)) {
    console.log("Поле не может быть пустым");
  }
}

function validateInput(input: any) {
  const value = input.value;
  const name = input.name;
  const errorBlock = document.querySelector("#errorBlock")!;
  const {reg, errorMes, errorId} = validationObj[name];
  const errorMessage = errorBlock.querySelector(`#${errorId}`);

  if (!reg.test(value)) {
    input.classList.add(sInput.error);

    if (!errorMessage) {
      errorBlock.insertAdjacentHTML("beforeend", `<p id="${errorId}"> ${errorMes}</p>`);
    }
    return false;
  } else if (errorMessage) {
    errorBlock.querySelector(`#${errorId}`)!.remove();
  }
  return true;
}


export function validateForm(evt: Event, selector: any) {
  evt.preventDefault();

  const form = document.querySelector(selector);
  let data: any = {};

  if (!form) return;

  form.querySelectorAll("input").forEach((el: HTMLInputElement) => {
    if (el.name !== "message" && el.name !== "search") {
      validateInput(el);
    }

    data[el.name] = el.value;
  });

  console.log(data);
}
