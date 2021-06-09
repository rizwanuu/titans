import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import Media from "react-media";
import {
  mediumScreen,
  // smallScreen,
} from "../../globalStyles/scss/variables.scss";

// import { ProductsFeatured } from "../../components";
import { generateCategoryUrl } from "../../core/utils";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage,
} from "./gqlTypes/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import noPhotoImg from "../../images/no-photo.svg";
import Frameimg1 from "../../images/Frame.png";
import Frameimg2 from "../../images/tips.png";
import Frameimg3 from "../../images/Footerpart.png";
import Last from "../../images/last.png";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ categories, backgroundImage, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  // const [showFilters, setShowFilters] = React.useState(false);
  // const intl = useIntl();

  return (
    <div>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <div
        className="home-page__hero"
      // style={
      //   backgroundImage
      //     ? { backgroundImage: `url(${backgroundImage})` }
      //     : null
      // }
      >
        <section className="carousel" aria-label="Gallery">
          <ol className="carousel__viewport">
            <li id="carousel__slide1"
              // tabIndex={0}
              className="carousel__slide">
              <div className="carousel__snapper">
                <a href="#carousel__slide4"
                  className="carousel__prev">Go to last slide</a>
                <img style={{ width: "100%", height: "100%" }} src={Frameimg1} alt="img" />
                <a href="#carousel__slide2"
                  className="carousel__next">Go to next slide</a>
              </div>
            </li>
            <li id="carousel__slide2"
              // tabIndex={0}
              className="carousel__slide">
              <div className="carousel__snapper" />
              <a href="#carousel__slide1"
                className="carousel__prev">Go to previous slide</a>
              <img style={{ width: "100%", height: "100%" }} src={Frameimg2} alt="img" />
              <a href="#carousel__slide3"
                className="carousel__next">Go to next slide</a>
            </li>
            <li id="carousel__slide3"
              // tabIndex={0}
              className="carousel__slide">
              <div className="carousel__snapper" />
              <a href="#carousel__slide2"
                className="carousel__prev">Go to previous slide</a>
              <img style={{ width: "100%", height: "100%" }} src={Frameimg3} alt="img" />
              <a href="#carousel__slide4"
                className="carousel__next">Go to next slide</a>
            </li>
            <li id="carousel__slide4"
              // tabIndex={0}
              className="carousel__slide">
              <div className="carousel__snapper" />
              <a href="#carousel__slide3"
                className="carousel__prev">Go to previous slide</a>
              <img style={{ width: "100%", height: "100%" }} src={Last} alt="img" />
              <a href="#carousel__slide1"
                className="carousel__next">Go to first slide</a>
            </li>
          </ol>
        </section>
        {/* <div className="home-page__hero-text">
          <div>
            <span className="home-page__hero__title">
              <h1>
                <FormattedMessage defaultMessage="Final reduction" />
              </h1>
            </span>
          </div>
          <div>
            <span className="home-page__hero__title">
              <h1>
                <FormattedMessage defaultMessage="Up to 70% off sale" />
              </h1>
            </span>
          </div>
        </div> */}
        {/* <div className="home-page__hero-action">
          {loading && !categories ? (
            <Loader />
          ) : (
            categoriesExist() && (
              <Link
                to={generateCategoryUrl(
                  categories.edges[0].node.id,
                  categories.edges[0].node.name
                )}
              >
                <Button testingContext="homepageHeroActionButton">
                  <FormattedMessage defaultMessage="Shop sale" />
                </Button>
              </Link>
            )
          )}
        </div> */}
      </div>
      {/* <ProductsFeatured
        title1={intl.formatMessage({ defaultMessage: "SHOP BY SERIES" })}
      /> */}

      {categoriesExist() && (
        <>
          <Media
            query={{ minWidth: mediumScreen }}
            render={() => (
              <div className="home-page__categories">
                <h3 style={{ margin: "2rem" }}>
                  <FormattedMessage defaultMessage="SHOP BY SERIES" />
                </h3>
                <p>PICK FROM THE SERIES THAT BEST FITS YOUR NEEDS</p>
                <div>
                  <div className="home-page__categories__list">
                    {categories.edges.map(({ node: category }, index) => (
                      <div key={category.id}>
                        <Link
                          to={generateCategoryUrl(category.id, category.name)}
                          key={category.id}
                        >
                          <div
                            className={classNames(
                              "home-page__categories__list__image",
                              {
                                "home-page__categories__list__image--no-photo": !category.backgroundImage,
                              }
                            )}
                            style={{
                              backgroundImage: `url(${category.backgroundImage
                                ? category.backgroundImage.url
                                : noPhotoImg
                                })`,
                            }}
                          />
                          <h3>{category.name}</h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg-carda">
                  {categories.edges.map(({ node: category }, index) => (
                    index === 3 ?
                      <Link
                        to={generateCategoryUrl(category.id, category.name)}
                        key={category.id}
                      >
                        <div style={{ display: "flex", height: "23rem", width: "100%" }}>
                          <div className="part-one">
                            <div className="post"> {category.name}</div>
                            <div className="some"> SOMETHING ABOUT THE POST PULLER, JUST A SHORT BASIC DESCRIPTIVE PARAGRAPH</div>
                          </div>
                          <div className="part-two">
                            <img className="lg-cardimg" src={category.backgroundImage.url} alt="card-img" />
                          </div>
                        </div>
                      </Link> : null
                  ))}
                </div>
              </div>

            )}
          />
          <Media
            query={{ maxWidth: mediumScreen }}
            render={() => (
              <div className="home-page__categories">
                <div className="container">
                  <h3 style={{ margin: "2rem" }}>
                    <FormattedMessage defaultMessage="SHOP BY SERIES" />
                  </h3>
                  <p>PICK FROM THE SERIES THAT BEST FITS YOUR NEEDS</p>
                  <div className="home-page__categories__list">
                    {categories.edges.map(({ node: category }) => (
                      <div className="home-page__categories__listBlock" key={category.id}>
                        <Link
                          to={generateCategoryUrl(category.id, category.name)}
                          key={category.id}
                        >
                          <div
                            className={classNames(
                              "home-page__categories__list__image",
                              {
                                "home-page__categories__list__image--no-photo": !category.backgroundImage,
                              }
                            )}
                            style={{
                              backgroundImage: `url(${category.backgroundImage
                                ? category.backgroundImage.url
                                : noPhotoImg
                                })`,
                            }}
                          />
                          <h3>{category.name}</h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            )}
          />
        </>
      )}

      <div className="last">
        <div className="lastContainer">
          <div className="build">BUILD YOUR DRIVER</div>
          <div className="choose"> CHOOSE FROM OUR GROWING LIST OF ACCESSORIES TO <br />CUSTOMIZE YOUR DRIVER TO BEST FIT YOUR JOB. </div>
          <div className="imgDiv">
            <img
              className="last-img"
              src={Last}
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
