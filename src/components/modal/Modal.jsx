import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import s from './modal.module.scss';

const Modal = (props) => {
    const [photoData, setPhotoData] = useState();
    const [commentText, setCommentText] = useState('');

    let comment = [{ "id": 0, "text": commentText, "date": 123123123 }]
    async function sendComment() {
        const response = await axios.post('https://boiling-refuge-66454.herokuapp.com/images/' + props.photoId + 'comments', comment);
        setPhotoData(response.data);
    }

    useEffect(() => {
        axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + props.photoId)
            .then(response => setPhotoData(response.data))
        // eslint-disable-next-line
    }, [])

    const onButton = () => {
        sendComment();
        setCommentText('');
    }
    const onClose = () => {
        props.setModalActive(false);
    }

    return (
        <div onClick={onClose} className={s.modal}>
            {
                photoData !== undefined &&
                <div onClick={(e) => { e.stopPropagation() }} className={s.modalBlock}>
                    <div className={s.photo}>
                        <img src={photoData.url} alt={photoData.id} />
                    </div>
                    <div className={s.myComment}>
                        <span>Comment</span>
                        <textarea onChange={e => setCommentText(e.target.value)} value={commentText}></textarea>
                        <p>Write a few sentences about the photo.</p>
                    </div>
                    <div className={s.postComment}>
                        <button onClick={onButton}>Save</button>
                    </div>
                    {
                        photoData.comments.length !== 0 &&
                        <div className={s.comments}>
                            <span>Other comments</span>
                            {
                                photoData !== undefined && photoData.comments.map(item =>
                                    <span className={s.comment}>
                                        User({photoData.id}): {item.text}
                                    </span>
                                )
                            }
                        </div>
                    }
                </div>
            }
        </div >
    )
}

export default Modal