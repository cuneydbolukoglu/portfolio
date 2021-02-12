import axios from 'axios';
import { useEffect, useState } from 'react';
import portfolioDetail from './PortfolioDetail';

const Portfolio = props => {
    const [data, setData] = useState([]);

    const api = 'https://raw.githubusercontent.com/cuneydbolukoglu/portfolio-new/main/src/portfolio-data.json'

    useEffect(() => {
        axios.get(api)
            .then(response => {
                console.log("response: ", response);
                setData(response.data)
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
            {
                    <portfolioDetail
                        Name={data.name}
                        Url={data.url}
                        ImgUrl={data.imgurl}
                        Githubrepo={data.githubrepo}
                        Technology={data.technology}
                    />
                
            }
        </section >
    )
}

export default Portfolio;