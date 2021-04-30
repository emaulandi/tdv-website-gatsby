import { graphql, useStaticQuery } from 'gatsby';

export const useMembers = () => {
  const { allMembresCsv: { nodes } } = useStaticQuery(graphql`
    query {
      allMembresCsv {
        nodes {
          nom
          twitter
          nom_site
          linkedin
          lien_site
        }
      }
    }
  `);

  return nodes;
};

export default useMembers;