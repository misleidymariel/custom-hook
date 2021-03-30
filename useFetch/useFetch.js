import { useState, useEffect, useRef } from 'react';


export const useFetch = ( url ) => {


    const inMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            inMounted.current = false;
        }
    }, [])


    useEffect(() => {

        useState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (inMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });

                }

            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })

            })


    }, [url])

    return state;
}
