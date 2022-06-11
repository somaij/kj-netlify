/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostCard = ({ data }) => (
  <Link to={data.frontmatter.slug}>
  <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
    {data.frontmatter.featuredImage ? (
      
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        />
      
    ) : (
      ""
    )}
    <div className="post-content">
      <h2 className="title" sx={{
          color: "muted",
        }}>
          {data.frontmatter.title}
      </h2>
      <p
        className="meta"
        sx={{
          color: "muted",
        }}
      >
        {data.excerpt}
      </p>
      <span className="button -outline">Read Now</span>
    </div>
  </article>
  </Link>
)

export default PostCard
