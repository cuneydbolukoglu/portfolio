import { portfolioData } from '../data/portfolio-data';
import PortfolioDetail from './PortfolioDetail';
const Portfolio = props => {
    return (
        <section className="portfolio">
            <article>
                <h2>Expermenites</h2>
            </article>
            {
                portfolioData.map((item, index) =>
                    <PortfolioDetail key={index}
                        Name={item.name}
                    />
                )
            }
        </section >
    )
}

export default Portfolio;