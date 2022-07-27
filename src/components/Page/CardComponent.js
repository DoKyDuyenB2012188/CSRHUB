function Card({ topic }) {
  return (
    <div key={topic.id}>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${topic.picture})` }}
          ></div>
        </div>
        <div className="description">
          <h1>{topic.name}</h1>
          <p>{topic.title}</p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
