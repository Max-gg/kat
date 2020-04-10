const months = {1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T"};
class person {
  constructor(name, surname, gender, birthday) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.birthday = birthday;
    this.birthdayDay = birthday.split("/")[0];
    this.birthdayMonth = birthday.split("/")[1];
    this.birthdayYear = birthday.split("/")[2];
  }
  Convertor(data) {
    var data = "" + data;
    data = data.toUpperCase();
    var Consonant = "BCDFGHJKLMNPQRSTVWXYZ";
    var Vowels = "AEIOU";  
    var consonant = "";
    var vowels = "";
    var result = "";

    for (let i = 0; i < data.length; i++) {
      if (Consonant.indexOf(data[i]) != 0) {
        consonant += data[i];
      } else if (Vowels.indexOf(data[i]) != 0) {
        vowels += data[i];
      }
    }

    if (data.length >= 3) {
      if (consonant.length > 3) {
        result = consonant[0] + consonant[2] + consonant[3];
      } else if (consonant.length == 3) {
        result = consonant;
      } else {
        result = consonant + vowels;
        result = result.substring(0, 3);
      }
    } else {
      result = data + "XXX";
      result = result.substring(0, 3);
    }
    return result;
  }

  get code(){
    var result = this.Convertor(this.surname) + this.Convertor(this.name);
    result += this.birthdayYear[2] + this.birthdayYear[3];
    

    result += months[this.birthdayMonth];
    var day = this.birthdayDay;
    if (this.gender == "F"){
      day = (parseInt(day)+40);
    }
    
    if (day.length < 2){
      day = "0"+day;
    }
    result += day;
    
    return result;
  }
}

function start() {
  var pers = new person("Helen", "Yu", "F", "1/12/1950");
  console.log(pers.code);
}
start();