import React, {useEffect} from 'react';
import {LoaderCircle, LoaderContainer, LoaderWrapper} from "./loader.style";
import {gsap, Power3} from "gsap/all";

const Loader = () => {

    useEffect(() => {
        const Loader = document.querySelector('#loader');
        gsap.from(Loader.children, {duration: .5, yoyo: true, repeat: -1, repeatDelay: 1, opacity: 0, y: -20, ease: Power3.easeOut, stagger: .15})
    })
    return (
        <LoaderWrapper>
            <LoaderContainer id='loader'>
                <LoaderCircle/>
                <LoaderCircle/>
                <LoaderCircle/>
                <LoaderCircle/>
                <LoaderCircle/>
                <LoaderCircle style={{marginRight: 0}}/>
            </LoaderContainer>
        </LoaderWrapper>
    );
};

export default Loader;
