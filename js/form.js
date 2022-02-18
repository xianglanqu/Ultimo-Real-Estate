function checkEntry() {
  var form = true
  var name = document.getElementById('name').value
  var nameError = document.getElementById('nameError')
  if (name == "") {
    nameError.innerHTML = "Please enter your name"
    form = false
  } else if (name.length < 3) {
    nameError.innerHTML = "Please enter at Least 3 Character"
    form = false
  } else {
    nameError.innerHTML = ""
  }

  var mobile_num = document.getElementById('mobile').value
  var mobileError = document.getElementById('mobileError')
  if (mobile_num == "") {
    mobileError.innerHTML = "Please enter your mobile number"
    form = false
  } else {
    mobileError.innerHTML = ""
  }

  var email = document.getElementById('email').value
  var emailError = document.getElementById('emailError')
  if (email == "") {
    emailError.innerHTML = "Please enter your email"
    form = false
  } else {
    emailError.innerHTML = ""
  }

  var three = document.getElementsByName('three');
  var threeError = document.getElementById('threeError');
  var checked_count = 0;
  var checked_value = '';

  for (var i = 0; i < three.length; i++) {
    if (three[i].checked) {
      checked_count = three + 1;
      checked_value = three[i].value;
    }
  }
  if (checked_count < 1) {
    threeError.innerHTML = "Please choose one only "
    form = false
  } else {
    threeError.innerHTML = ""
  }

  var propertyType = document.getElementsByName('propertyType');
  var propertyTypeError = document.getElementById('propertyTypeError');
  var checkbox = 0;
  var checkbox_value = [];

  for (var i = 0; i < propertyType.length; i++) {
    if (propertyType[i].checked) {
      checkbox = checkbox + 1;
      checkbox_value.push(propertyType[i].value);
    }
  }
  if (checkbox < 1) {
    propertyTypeError.innerHTML = " please choose at least one property"
    form = false
  } else {
    propertyTypeError.innerHTML = ""
  }

  var bedroomType = document.getElementById('bedrooms').value
  var bedroomError = document.getElementById('bedroomError');

  if (bedroomType == "") {
    bedroomError.innerHTML = "Please choose 1 option"
    form = false
  } else {
    bedroomError.innerHTML = ""
  }

  if (form == true) {
    return confirm("Please double confirmed the information below:\n Name:" + name + "\n Mobile number:" + mobile_num + "\n Email:" + email +
      "\n Buy or sell or rent:" + checked_value + "\n Property type:" + checkbox_value + "\n Bedroom type:" + bedroomType + "\n Do you want to submit the form?");
  } else {
    return false;
  }

}
