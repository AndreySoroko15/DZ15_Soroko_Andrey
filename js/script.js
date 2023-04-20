let Contacts = function() {

  this.start = function() {
    if(confirm('Желаете создать новый контакт?')) {
      this.getName();
    } else {
      alert('Видимо в другой раз :(');
    }
  }

  this.getName = function() {
    this.name = prompt('Введите ФИО создаваемого контакта', 'Сороко Андрей Николаевич');
    let nameRegexp = /^[а-яА-яa-zA-Z]{1,15}\s[а-яА-яa-zA-Z]{1,15}\s[а-яА-яa-zA-Z]{1,15}$/;

    if (nameRegexp.test(this.name)) {
      this.getAge();
      return this.name
    } else {
      alert('Неправильно введены ФИО. Попробуйте еще раз');
      this.getName();
    } 
  };

  this.getAge = function() {
    this.age = +prompt('Введите возраст создаваемого контакта', 18);

    if (Number.isInteger(this.age) && this.age >= 18) {
      this.getPhone();
    } else if (Number.isInteger(this.age) && this.age < 18) {
      alert('Не удается создать контакт. Введенный возраст слишком мал :(');
    } else if (Number.isInteger(this.age) === false){
      alert('Не удается создать контакт. Вы ввели нецелое число. Попробуйте еще раз');
      this.getAge();
    }
  };

  this.getPhone = function() {
    this.phone = prompt('Введите мобильный номер добавляемого контакта', '+375292892546');
    let phoneRegexp = /^\+?\d{3}\(?\d{2}\)?\d{7}$/;

    if (phoneRegexp.test(this.phone)) {
      this.getEmail();
    } else {
      alert('Неправильно введен мобильный номера телефона. Попробуйте формат +375(хх)ххххххх');
      this.getPhone();
    }
  };

  this.getEmail = function(){
    this.email = prompt('Введите адрес электронной почты', 'name@mail.ru');
    let mailRegexp = /^[a-zA-z][\w-_\.]{2,}@[a-z]{2,11}\.[a-z]{2,11}$/

    if (mailRegexp.test(this.email)) {
      this.show();
      return this.email
    } else {
      alert('Неверно указан адрес электронной почты. Попробуйте еще раз');
      this.getEmail();
    }
  };

  this.show = function() {
    document.write(
      `<br><u> Информация о созданном контакте:</u> <br> 
      ФИО: ${this.name} <br>
      Возраст: ${this.age}<br> 
      Мобильный телефон: ${this.phone}<br> 
      Электронная почта: ${this.email}<br>`
      );
  };
}



let contact = new Contacts();
contact.start()