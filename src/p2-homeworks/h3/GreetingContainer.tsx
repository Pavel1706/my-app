import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {v1} from 'uuid'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import style from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const newName = e.currentTarget.value.trim()
        if (newName) {
            setName(newName)
            setError('')
        } else {
            setName('')
            setError('You need to enter a name')
        }


    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`) // need to fix
        setName('')
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13 && name !== '') {
            addUser()

        }
    }

    const totalUsers = users.length // need to fix

    return (<div className={style.tasks}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                onEnter={onEnter}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    )
}

export default GreetingContainer
