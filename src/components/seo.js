import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

// https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi
// https://www.javascripttutorial.net/object/javascript-merge-objects

const Seo = ({ seo = {} }) => {
    const { strapiGlobal } = useStaticQuery(query);
    const { defaultSeo, siteName } = strapiGlobal;

    // Merge default and page-specific SEO values
    const fullSeo = { ...defaultSeo, ...seo };

    const getMetaTags = () => {
        const tags = [];

        if (fullSeo.metaDescription) {
            tags.push({
                name: "description",
                content: fullSeo.metaDescription,
            });
        }

        if (fullSeo.shareImage) {
            const imagePath = fullSeo.shareImage.localFile.publicURL;
            const imageUrl = process.env.GATSBY_ROOT_URL + imagePath;
            tags.push({
                name: "image",
                content: imageUrl,
            });
        }

        return tags;
    };

    const metaTags = getMetaTags();

    return (
        <Helmet
            title={fullSeo.metaTitle}
            titleTemplate={`${siteName} | %s`}
            meta={metaTags}
            htmlAttributes={{
                lang: "en",
            }}
        />
    );
};

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};

Seo.defaultProps = {
    title: null,
    description: null,
    image: null,
};

const query = graphql`
    query {
        strapiGlobal {
            siteName
            defaultSeo {
                metaDescription
                shareImage {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;

export default Seo;
