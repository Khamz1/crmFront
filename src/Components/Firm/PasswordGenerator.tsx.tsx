// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setLogin, setPassword } from '../../features/firmSlice/firmSlice';

// const PasswordGenerator = () => {
//   const dispatch = useDispatch()

  // const [passwordLength, setPasswordLength] = useState(20); // Длина пароля по умолчанию

//   // Функция для генерации случайного пароля и логина
// //   const generatePassword = () => {
//     const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numberChars = '0123456789';
//     const specialChars = '!@#$%^&*()-_=+[{]}|;:,.<>?';

//     // Комбинируем все символы в одну строку
//     const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;

   

//     let generatedLogin = '';
//     for (let i = 0; i < passwordLength; i++) {
//       const randomIndex = Math.floor(Math.random() * allChars.length);
//       generatedLogin += allChars[randomIndex];
//     }

//     let generatedPassword = '';
//     for (let i = 0; i < passwordLength; i++) {
//       const randomIndex = Math.floor(Math.random() * allChars.length);
//       generatedPassword += allChars[randomIndex];
//     }
//     dispatch(setLogin(generatedLogin))
  
//     dispatch(setPassword(generatedPassword))
//   };

//   return (
//     <>
    
      
//       <button  onClick={generatePassword}>Сгенерировать пароль</button>
      
     
//     </>
    
//   );
// };

// export default PasswordGenerator;
