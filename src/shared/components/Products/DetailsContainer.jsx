import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Details from './Details';

const DetailsContainer = () => {
    const [detail, setDetail] = useState({});
    const  p = useParams();

    useEffect(() => {
        fetch(`https://fake-products-eric.herokuapp.com/api/products/detail/${p.id}`)
            .then((res) => {
                const d = res.json();
                d.then(r => {
                    setDetail(r);
                });
            })
    }, [p.id]);

    return (
        <Details p={detail}/>
    )
}

export default DetailsContainer