import newsPic from "../assets/news-pic.jpeg";
const NewsItem = ({title, description, src, url}) => {
  const truncatedDes = description && description.length > 90 ? description.slice(0,90) + " . . ." : description;
  const truncatedTitle = title && title.length > 50 ? title.slice(0,50) + " . . ." : title;
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 px-1 py-1" style={{maxWidth: "300px"}}>
      <img src={src?src:newsPic} style={{height:"200px", width:"276px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-md">{truncatedTitle}</h5>
        <p className="card-text text-sm text-wrap">{truncatedDes?truncatedDes:"Not available"}</p>
        <a href={url} className="btn btn-primary btn-sm">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
 