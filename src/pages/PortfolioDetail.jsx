const portfolioDetail = props => {
    
    return (
        <div className="portfolio-detail">
            <h3>{props.Name}</h3>
            <img src={props.Imgurl} alt={props.Name} />
            Github Repo: <a href={props.Githubrepo}>{props.Githubrepo}</a>
            <a href={props.Url}>{props.Url}</a>
            {props.Technology}
        </div>
    )
}

export default portfolioDetail;