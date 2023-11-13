import React from "react";
import s from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Messages/Message";



const Dialogs = (props) => {


    let dialogsElement = props.dialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} />);

    let messagesElement = props.messagesData.map(messages => <Message message={messages.message} />)

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.massages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;