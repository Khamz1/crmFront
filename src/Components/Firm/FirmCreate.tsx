import React,{useState} from 'react'
import Style from '../Firm/firm.module.css'

function FirmCreate() {
    const [firmName, setFirmName]=useState('')
    const [email, setEmail]=useState('');
    const [firstName, setFirstName]=useState('')
    const [firstName, setFirstName]=useState('')
    const [firstName, setFirstName]=useState('')
  return (
    <div className={Style.firmMain}>
        <div className={Style.createEmployeeAndFirm}>
        <input value={firmName} type="text" placeholder='Введите название фирмы'/>
        <input value={email} type="text" placeholder='введите email сотрудника' />
        <input value={firstName} type="text" placeholder='Введите имя сотрудника'/>
        <input value={secondName} type="text" placeholder='Введите фамилию сотрудника'/>
        <input value={role} type="text" placeholder='Введите должность сотрудника'/>
        <input type="file" multiple />
        </div>
        <br />
        <div className={Style.generatorWindow}>
        <button>Сгенерировать</button>
        <input type="text" placeholder='Логин сотрудника' />
        <input type="text" placeholder='Пароль сотрудника' />
        <input type="text" placeholder='Токен сотрудника'/>
        <button>Создать сотрудника</button>
        </div>
    </div>
  )
}

export default FirmCreate