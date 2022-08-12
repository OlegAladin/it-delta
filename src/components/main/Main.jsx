import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from '../modal/Modal';
import s from './main.module.scss';

const Main = () => {
    const [photos, setPhotos] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [photoId, setPhotoId] = useState();

    useEffect(() => {
        axios.get('https://boiling-refuge-66454.herokuapp.com/images')
            .then(response => setPhotos(response.data))
    }, [])

    const openPhoto = (id) => {
        setModalActive(true);
        setPhotoId(id);
    }

    return (
        <div className={s.main}>
            {
                modalActive &&
                <Modal setModalActive={setModalActive} photoId={photoId} />
            }
            {
                photos !== undefined && photos.map(item =>
                    <div className={s.photosBlock}>
                        <div onClick={() => { openPhoto(item.id) }} className={s.photo}>
                            <img src={item.url} alt={item.url} />
                        </div>
                        <span>id: {item.id}</span>
                    </div>
                )
            }
        </div>
    )
}

export default Main