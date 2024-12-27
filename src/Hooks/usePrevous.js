import {useEffect,useRef,useDebugValue} from 'react'
 
    export const usePrevous = (value) => {
    const ref = useRef

    useDebugValue("Custom hook")
    useDebugValue("o numero anterio e: " + ref)

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;

};
