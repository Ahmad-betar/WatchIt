import { Fragment } from "react"
import { createPortal } from "react-dom";
import { BackDrop, ModalOverlay } from "../../../../UI/Modal/Modal";
import useHttp from "../../../../Hooks/useHttp";
import { useEffect } from "react";
import { Config, Type } from "../../../../store/Config";
import { useState } from "react";
import classes from './Trailer.module.css';



const Trailer = (props) => {

    const { sendRequest } = useHttp();
    const [vedioId, setVedioId] = useState(null);

    const setVedioIdHandler = (data) => {
        const trailers = data.results.filter((vedio) => {
            return vedio.type === 'Trailer';
        })
        const official = trailers.filter((vedio) => {
            return vedio.name === 'Official Trailer';
        })

        setVedioId(official.length === 0 ? trailers[0].key : official[0].key)
    }





    useEffect(() => {
        sendRequest({
            ...Config,
            url: Config.baseUrl + (props.itemType === 'movie' ? Type.movie : Type.tv) + '/' + props.itemId + '/videos?language=en-US',
        }, setVedioIdHandler)



    }, [sendRequest])





    const backdrop = document.getElementById('backdrop');
    const overlay = document.getElementById('overlay');


    return (
        <Fragment>
            {createPortal(<BackDrop onClick={props.onHide} />, backdrop)}
            {createPortal(
                <ModalOverlay>
                    <div className={classes.trailer}>
                        <iframe
                            // width="560"
                            width="auto"
                            height="315"
                            src={`https://www.youtube.com/embed/${vedioId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        >

                        </iframe>
                    </div>
                </ModalOverlay>
                , overlay)}

        </Fragment>
    )

}


export default Trailer;

