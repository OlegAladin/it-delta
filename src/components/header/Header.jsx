import React from 'react';
import s from './header.module.scss';
import banner from './../../images/banner.png';
import avatar from './../../images/avatar.png';
import mail from './../../images/mail.svg';
import call from './../../images/call.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.banner} src={banner} alt="banner" />
            <div className={s.headerBlock}>
                <div className={s.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={s.headerBlock__bottom}>
                    <span className={s.name}>Ricardo Cooper</span>
                    <div className={s.buttons}>
                        <button>
                            <img src={mail} alt="mail" />
                            Message
                        </button>
                        <button>
                            <img src={call} alt="call" />
                            Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header