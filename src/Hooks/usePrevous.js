import {useEffect,useRef} from 'react'
 
    export const usePrevous = (value) => {
    const ref = useRef

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;

};
