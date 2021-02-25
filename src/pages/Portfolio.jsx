import { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = props => {
    const [data, setData] = useState(null);

    const api = 'https://raw.githubusercontent.com/cuneydbolukoglu/portfolio-new/main/src/portfolio.json'

    useEffect(() => {
        axios.get(api)
            .then(response => {
                console.log("response: ", response.data);
                
                response.map((item ,ind) => {
                    console.log("item: ", item.portfolio)
                })

                //setData(response.data)
            })
            .catch(err => {
                console.error("error: ", err);
            });
    }, []);

    return (
        <section className="portfolio">
            <article>
                <h2>Expermenites</h2>
            </article>
        </section >
    )
}

export default Portfolio;