// data
const data = {
    lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    uppercase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    symbols: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '<', ',', '>', '.', '?', '/']
}

// selctors 
const generatePwBtn = document.querySelector('.generate-pw-btn')
const copyBtn = document.querySelector('.copy-btn')

const length = document.getElementById('pw-length')
const result = document.getElementById('result')

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const checkboxesArr = [...checkboxes]

// programming the copy button
const copyToClipboard = async (e) => {
    e.preventDefault()
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(result.value);
    }

    //add errr boundary here
};
copyBtn.addEventListener('click', copyToClipboard)

// programming the generate password button
const generatePassword = (e) => {
    e.preventDefault()
    let randomPassword = ''
    let temp = [];

    if (!length.value) {
        alert('please specify password length')
        return 
    }

    checkboxesArr.map((checkbox) => {
        if (checkbox.checked) {
            temp = temp.concat(data[checkbox.id])
        }     
    })

    if (temp.length == 0) {
        alert('please select at least one parameter')
        return
    }

    for (let i=0; i < length.value; i++) {
      randomPassword += temp[Math.floor(Math.random() * temp.length)]
    }

    result.value = randomPassword
    
  }

  generatePwBtn.addEventListener('click', generatePassword)


