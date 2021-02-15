import React from "react";
import * as Icon from "react-feather";
import ProgressiveImage from "react-progressive-image";

function Portfolio(props) {
  const { title, subtitle, imageUrl, url, github, original } = props.content;

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        <ProgressiveImage
          src={imageUrl}
          placeholder="/images/portfolio-image-placeholder.png"
        >
          {(src) => <img src={src} alt={title} />}
        </ProgressiveImage>
        <ul>
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {github ? (
        <h6>
          Github:{" "}
          <a href={github} rel="noopener noreferrer" target="_blank">
            {github}
          </a>
        </h6>
      ) : null}
      {original ? (
        <h6>
          Original page cloned:{" "}
          <a href={original} rel="noopener noreferrer" target="_blank">
            click to visit
          </a>
        </h6>
      ) : null}
    </div>
  );
}

export default Portfolio;
