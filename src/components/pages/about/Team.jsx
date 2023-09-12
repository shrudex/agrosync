import React from "react";

function TeamMember({
  name,
  role,
  description,
  linkedin,
  github,
  email,
  instagram,
  imgSrc,
}) {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="team-item">
        <img src={imgSrc} alt={name} className="team-img" />
        <h3>{name}</h3>
        <div className="team-info">
          <p>{role}</p>
          <p>{description}</p>

          <ul className="team-icon">
            <li>
              <a href={linkedin} className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href={github} className="github">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="envelope">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href={instagram} className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
