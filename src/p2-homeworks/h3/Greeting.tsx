import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {


    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.hello}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyPress={onEnter}
                       onBlur={setNameCallback}/><button onClick={addUser} className={s.button} disabled={!name}>add</button>
                <div className={s.error}>{error}</div>
                <div>{name}</div>

                <div className={s.count}>{totalUsers}</div>
            </div>
        </div>
    )
}

export default Greeting
