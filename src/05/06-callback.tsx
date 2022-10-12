import React, {MouseEvent} from "react";


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
       alert(e.currentTarget)
    }

    const saveUser = () => {
        alert('user have been saved');
    }

    const onNameChanged = () => {
        console.log('user have been caved')
    }

    const focusLostHandler = () => {
        console.log('focus is lost')
    }


    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusLostHandler}
        >Julia</textarea>
<input/>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={saveUser}>x</button>
    </div>
}