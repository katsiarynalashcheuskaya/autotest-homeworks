import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import User from "../hw08/User";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (e:string) => void, setName: (n:string) => void, addUserCallback: any) => {
    if (!name.trim()) {
       setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('') }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
    if (!name.trim()) {
        setError('Ошибка! Введите имя!')
    }
}
export const pureOnEnter = (event: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => event.key === 'Enter' && addUser() // если нажата кнопка Enter - добавить

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {setName(event.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length; // need to fix
    /*const lastUserName = name;*/
    /*const lastUserName = users[users.length-1].name;*/
    const lastUserName = users.length>0? users[users.length -1].name : '';


    // need to fix

            return (
                <Greeting
                    name={name}
                    setNameCallback={setNameCallback}
                    addUser={addUser}
                    onBlur={onBlur}
                    onEnter={onEnter}
                    error={error}
                    totalUsers={totalUsers}
                    lastUserName={lastUserName}
                />
            )
}

export default GreetingContainer
