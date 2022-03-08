import React from 'react'
import Contact from './Contact'

function Contactslist(props) {
    return (
        <div className='Contactslist'>
            <div className="title">
                {
                    props.contactsData.map((contact)=> {
                        return <Contact profile = {contact.profile}  name = {contact.name} number = {contact.number} />
                    })
                }
            </div>
            
         <Contnpact/>
        </div>
    )
}

export default Contactslist
