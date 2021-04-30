import React from 'react';

import useMembers from '../hooks/useMembers';

const Members = () => {
  const members = useMembers();
  
  return (
    <div className="grid-wrapper">
      {members.map(({ nom, nom_site, lien_site, linkedin, twitter }) => (
        <div className="col-4">
          <h5>{nom}</h5>
          { lien_site 
            ? (<a href={lien_site} target="_blank" className="button small">{nom_site}</a>)
            : (<span>{nom_site}</span>)
          }
          <section>
            <ul className="icons">
              { twitter && (
                <li><a href={twitter} target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
              )}
              { linkedin && (
                <li><a href={linkedin} target="_blank" className="icon alt fa-linkedin"><span className="label">Linkedin</span></a></li>
              )}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Members
