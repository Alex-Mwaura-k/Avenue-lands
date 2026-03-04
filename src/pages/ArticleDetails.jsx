import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogData } from "../data/blogData";

// --- NEW: Helper function to match the URL slug back to the actual Blog Title ---
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

const ArticleDetails = () => {
  const { id } = useParams();

  // --- CHANGED: Now finding the article by comparing its generated slug to the URL ---
  const article = blogData.find((item) => generateSlug(item.title) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="text-center py-5 mt-5">
        <h2 className="text-danger">Article Not Found</h2>
        <Link to="/blogs" className="btn btn-dark mt-3">
          Back to Blogs Center
        </Link>
      </div>
    );
  }

  const plainTextContent = article.content ? article.content.replace(/<[^>]+>/g, '') : '';
  const seoDescription = plainTextContent.length > 150 
    ? `${plainTextContent.substring(0, 150)}...` 
    : plainTextContent || `Read ${article.title} on Avenue Lands Ventures.`;

  // Define slug for SEO tags
  const currentSlug = generateSlug(article.title);

  return (
    <div
      className="article-details-page bg-light pb-4"
      style={{ paddingTop: "20px" }}
    >
      <Helmet>
        <title>{article.title} | Avenue Lands Ventures</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${article.category}, ${article.title}, real estate news Kenya, Avenue Lands Ventures blog`} />
        <meta property="og:title" content={`${article.title} | Avenue Lands Ventures`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={article.img} />
        <meta property="og:type" content="article" />
        {/* --- CHANGED: SEO URLs now use the slug --- */}
        <meta property="og:url" content={`https://www.avenuelandsventures.co.ke/article/${currentSlug}`} />
        <link rel="canonical" href={`https://www.avenuelandsventures.co.ke/article/${currentSlug}`} />
      </Helmet>

      <div className="container-md">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-danger text-decoration-none">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/blogs" className="text-danger text-decoration-none">
                Blogs Center
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {article.title}
            </li>
          </ol>
        </nav>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <span className="badge bg-danger mb-2">{article.category}</span>
            <h1 className="fw-bold text-dark mb-1 text-center">
              {article.title}
            </h1>
            <p className="text-muted small mb-2 text-center">
              Posted on {article.date} by Admin
            </p>

            <div className="text-center mb-2">
              <img
                src={article.img}
                alt={article.title}
                className="img-fluid rounded shadow-sm"
                style={{
                  maxHeight: "500px",
                  width: "auto",
                  maxWidth: "85%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              className="article-content bg-white p-3 p-md-5 rounded shadow-sm"
              style={{ lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-4 text-center">
              <Link to="/blogs" className="btn btn-outline-dark px-4">
                <i className="bi bi-arrow-left me-2"></i> Back to Blogs Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;