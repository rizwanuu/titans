import classNames from "classnames";
import React from "react";
import Media from "react-media";
import { ProductDescription } from "@components/molecules";
import { ProductGallery } from "@components/organisms";
import AddToCartSection from "@components/organisms/AddToCartSection";
import { smallScreen } from "../../globalStyles/scss/variables.scss";

import {
  Breadcrumbs,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";
import { generateCategoryUrl, generateProductUrl } from "../../core/utils";
import GalleryCarousel from "./GalleryCarousel";
// import OtherProducts from "./Other";

import { structuredData } from "../../core/SEO/Product/structuredData";
import { IProps } from "./types";

// import Product from '../../images/product.png';
// import Productmini from '../../images/mini-img.png';
import US from '../../images/united-states.png';
import free from '../../images/free.png';
import Like from "../../images/like.png";
import Share from "../../images/share.png";
import Alert from "../../images/alert.png";

const populateBreadcrumbs = product => [
  {
    link: generateCategoryUrl(product.category.id, product.category.name),
    value: product.category.name,
  },
  {
    link: generateProductUrl(product.id, product.name),
    value: product.name,
  },
];

const Page: React.FC<
  IProps & {
    queryAttributes: Record<string, string>;
    onAttributeChangeHandler: (slug: string | null, value: string) => void;
  }
> = ({ product, onAttributeChangeHandler, queryAttributes, items, add }) => {
  const overlayContext = React.useContext(OverlayContext);

  const productGallery: React.RefObject<HTMLDivElement> = React.useRef();

  const [variantId, setVariantId] = React.useState("");

  const getImages = () => {
    if (product.variants && variantId) {
      const variant = product.variants.find(
        variant => variant.id === variantId
      );

      if (variant.images.length > 0) {
        return variant.images;
      }
    }

    return product.images;
  };
  localStorage.setItem("name", product.name);

  const handleAddToCart = (variantId, quantity) => {
    add(variantId, quantity);
    overlayContext.show(OverlayType.cart, OverlayTheme.right);
  };

  const addToCartSection = (
    <AddToCartSection
      items={items}
      productId={product.id}
      name={product.name}
      productVariants={product.variants}
      productPricing={product.pricing}
      queryAttributes={queryAttributes}
      setVariantId={setVariantId}
      variantId={variantId}
      onAddToCart={handleAddToCart}
      onAttributeChangeHandler={onAttributeChangeHandler}
      isAvailableForPurchase={product.isAvailableForPurchase}
      availableForPurchase={product.availableForPurchase}
    />
  );

  return (
    <div className="product-page">
      <Breadcrumbs breadcrumbs={populateBreadcrumbs(product)} />
      <div style={{ marginBottom: "5%", width: "100%" }}>
        <div className="product-page__product">
          <script className="structured-data-list" type="application/ld+json">
            {structuredData(product)}
          </script>
          <Media query={{ maxWidth: smallScreen }}>
            {matches =>
              matches ? (
                <>
                  <GalleryCarousel images={getImages()} />
                  <div className="main-2">
                    <div className="prod-namee">{localStorage.getItem("name")}</div>
                    <div className="prod-code"> Code: TSJHH </div>
                    <div className="review"> Read 6 review <span className="mx-3"> | </span> 1 Q&As </div>
                    <div className="stock"> In Stock <span className="mx-4"> | </span>
                      <img className="us-flag" src={US} alt="us-flag" /> Made in USA </div>
                    <div>
                      <ul>
                        <li className="safely">Safely contains poultry, pigs, goats</li>
                        <li className="safely mt-3">Safely contains poultry, pigs, goats</li>
                        <li className="safely mt-3">Safely contains poultry, pigs, goats</li>
                      </ul>
                    </div>
                    <div className="spec"> see full specifications</div>
                    <div className="man"> view product manual</div>
                    <div className="shiip-box-medium" style={{ display: "none" }}>
                      <span className="ship-st"> SHIPPING STATUS: </span>
                      <div className="ship">
                        <img className="free" src={free} alt="free" />
                        <span className="free-ship"> Free shipping on Orders Over $150 </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-page__product__info">
                    {addToCartSection}
                  </div>
                  <div className="mt-4">
                    <div style={{ marginTop: "6%" }}>
                      <div className="prod-des-box">
                        <div className="prod-des"> product description </div>
                      </div>
                      <div className="product-page__product__description">
                        <ProductDescription
                          descriptionJson={product.descriptionJson}
                          attributes={product.attributes}
                        />
                      </div>
                      <div style={{ padding: "0 1rem" }}>
                        <div className="prod-spec-box">
                          <div className="prod-spec"> product specification </div>
                        </div>
                        <div className="prod-spec-box">
                          <div className="for-dis">
                            <div className="specs"> Package length </div>
                            <div className="specs2"> 22 inch </div>
                          </div>
                        </div>
                        <div className="prod-spec-box">
                          <div className="for-dis">
                            <div className="specs"> Package width </div>
                            <div className="specs3"> 22 inch </div>
                          </div>
                        </div>
                        <div className="prod-spec-box" style={{ marginBottom: "1.5rem" }}>
                          <div className="for-dis">
                            <div className="specs"> product Dimensions </div>
                            <div className="specs4"> 12inch x 10inch </div>
                          </div>
                        </div>
                        <div className="prod-spec-box mt-3">
                          <div className="prod-spec"> general information </div>
                        </div>
                        <div className="prod-spec-box">
                          <div className="for-dis">
                            <div className="specs"> Warranty </div>
                            <div className="info1"> 1 year warranty </div>
                          </div>
                        </div>
                        <div className="prod-spec-box">
                          <div className="for-dis">
                            <div className="specs"> Additional Information  </div>
                            <div className="info2"> Weatherproof, Adjustable break, </div>
                          </div>
                        </div>
                        <div className="prod-spec-box">
                          <div className="for-dis">
                            <div className="specs"> Warning </div>
                            <div className="info3"> California Residents: click for Proposition 65 warning </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ margin: "2rem 0" }}>
                    <div className="rel-item-box">
                      <div className="rel-item"> cutomer q & a </div>
                    </div>
                    <div className="class1">
                      <div className="question">Got a question regarding the product?<br />
                        <span className="experts">Our experts will answer it.</span>
                      </div>
                      <div className="ask"> <span className="aska"> ASK A QUESTION </span> </div>
                    </div>

                    <div style={{ padding: "0 1rem" }}>
                      <div className="cust-box">
                        <div style={{ margin: "1rem 0" }}>
                          <span className="qu">Question:</span><br />
                          <span className="questiona">Will this jenny hold a 4,000 ft roll of 12 1/2 gauge of electric fence?</span>
                        </div>
                        <div style={{ margin: "1rem 0" }}>
                          <span className="qu">Answer:</span><br />
                          <span className="answer">Hi, David. Yes it will hold 4,000 of 12.5 gauge high-tensile wire.</span>

                        </div>
                        <span className="by text-muted"> by Kencove on 06 Sep 2018  </span>
                      </div>
                      <div className="cust-box">
                        <div style={{ margin: "1rem 0" }}>
                          <span className="qu">Question:</span><br />
                          <span className="questiona">Will this jenny hold a 4,000 ft roll of 12 1/2 gauge of electric fence?</span>
                        </div>
                        <div style={{ margin: "1rem 0" }}>
                          <span className="qu">Answer:</span><br />
                          <span className="answer">Hi, David. Yes it will hold 4,000 of 12.5 gauge high-tensile wire.</span>

                        </div>
                        <span className="by text-muted"> by Kencove on 06 Sep 2018  </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-8">
                      <div className="rel-item-box">
                        <div className="rel-item"> Reviews </div>
                      </div>
                      <div className="rev">
                        <div className="for-mobile">
                          <div className="avg">Average Rating:</div>
                          <div className="cen-div">
                            <span className="numo"> 4.2 </span>
                            <span className="tot-rev">  6 reviews </span>
                          </div>
                        </div>
                        <div className="write"> <span className="aska"> WRITE A REVIEW </span> </div>
                      </div>

                      <div className="far-disp mt-3">
                        <div className="for-col">
                          <span className="verify">Verified Buyer</span><br className="brTag" />
                          <span className="datee"> 07 sep 2019 </span>
                        </div>
                        <div className="review-box">
                          <div className="works">
                            Works as advertised. It is as good as our old homemade one but a lot lighter.
                                    </div>
                          <div className="rev-icons">
                            <img className="review-icons" src={Like} alt="like" />
                            <img className="review-icons" src={Share} alt="share" />
                            <img className="review-icons" src={Alert} alt="alert" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="medium-view">
                    <div
                      className="product-page__product__gallery"
                      ref={productGallery}
                    >
                      <ProductGallery images={getImages()} />
                      <div className="shiip-box">
                        <div className="ship">
                          <span className="ship-st"> SHIPPING STATUS </span>
                          <img className="free" src={free} alt="free" />
                          <span className="free-ship"> Free shipping on Orders Over $150 </span>
                        </div>
                      </div>
                      <div className="shiip-box-medium" style={{ display: "none" }}>
                        <span className="ship-st"> SHIPPING STATUS: </span>
                        <div className="ship">
                          <img className="free" src={free} alt="free" />
                          <span className="free-ship"> Free shipping on Orders Over $150 </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div style={{ marginTop: "6%" }}>
                          <div className="prod-des-box">
                            <div className="prod-des"> product description </div>
                          </div>
                          <div className="product-page__product__description">
                            <ProductDescription
                              descriptionJson={product.descriptionJson}
                              attributes={product.attributes}
                            />
                          </div>
                          <div className="prod-spec-box">
                            <div className="prod-spec"> product specification </div>
                          </div>
                          <div className="prod-spec-box">
                            <div className="for-dis">
                              <div className="specs"> Package length </div>
                              <div className="specs2"> 22 inch </div>
                            </div>
                          </div>
                          <div className="prod-spec-box">
                            <div className="for-dis">
                              <div className="specs"> Package width </div>
                              <div className="specs3"> 22 inch </div>
                            </div>
                          </div>
                          <div className="prod-spec-box" style={{ marginBottom: "1.5rem" }}>
                            <div className="for-dis">
                              <div className="specs"> product Dimensions </div>
                              <div className="specs4"> 12inch x 10inch </div>
                            </div>
                          </div>
                          <div className="prod-spec-box mt-3">
                            <div className="prod-spec"> general information </div>
                          </div>
                          <div className="prod-spec-box">
                            <div className="for-dis">
                              <div className="specs"> Warranty </div>
                              <div className="info1"> 1 year warranty </div>
                            </div>
                          </div>
                          <div className="prod-spec-box">
                            <div className="for-dis">
                              <div className="specs"> Additional Information  </div>
                              <div className="info2"> Weatherproof, Adjustable break, </div>
                            </div>
                          </div>
                          <div className="prod-spec-box">
                            <div className="for-dis">
                              <div className="specs"> Warning </div>
                              <div className="info3"> California Residents: click for Proposition 65 warning </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <OtherProducts products={product.category.products.edges} /> */}
                      <div className="largeScreen">
                        <div style={{ margin: "2rem 0" }}>
                          <div className="rel-item-box">
                            <div className="rel-item"> cutomer questions & answers </div>
                          </div>
                          <div className="class1">
                            <div className="question">Got a question regarding the product?<br />
                              <span className="experts">Our experts will answer it.</span>
                            </div>
                            <div className="ask"> <span className="aska"> ASK A QUESTION </span> </div>
                          </div>

                          <div className="cust-box">
                            <div className="mt-2">
                              <span className="qu">Question:</span><br className="only-mob" />
                              <span className="questiona">Will this jenny hold a 4,000 ft roll of 12 1/2 gauge of electric fence?</span>
                            </div>
                            <div className="mt-3">
                              <span className="qu">Answer:</span><br className="only-mob" />
                              <span className="answer">Hi, David. Yes it will hold 4,000 of 12.5 gauge high-tensile wire.</span>

                            </div>
                            <span className="by text-muted"> by Kencove on 06 Sep 2018  </span>
                          </div>
                          <div className="cust-box">
                            <div className="mt-2">
                              <span className="qu">Question:</span><br className="only-mob" />
                              <span className="questiona">Will this jenny hold a 4,000 ft roll of 12 1/2 gauge of electric fence?</span>
                            </div>
                            <div className="mt-3">
                              <span className="qu">Answer:</span><br className="only-mob" />
                              <span className="answer">Hi, David. Yes it will hold 4,000 of 12.5 gauge high-tensile wire.</span>

                            </div>
                            <span className="by text-muted"> by Kencove on 06 Sep 2018  </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-8">
                            <div className="rel-item-box">
                              <div className="rel-item"> Reviews </div>
                            </div>
                            <div className="rev">
                              <div className="for-mobile">
                                <div className="avg">Average Rating:</div>
                                <div className="cen-div">
                                  <span className="numo"> 4.2 </span>
                                  <span className="tot-rev"> | 6 reviews </span>
                                </div>
                              </div>
                              <div className="write"> <span className="aska"> WRITE A REVIEW </span> </div>
                            </div>

                            <div className="far-disp mt-3">
                              <div className="for-col">
                                <span className="verify">Verified Buyer</span><br />
                                <span className="datee"> 07 sep 2019 </span>
                              </div>
                              <div className="review-box">
                                <div className="works">
                                  Works as advertised. It is as good as our old homemade one but a lot lighter.
                                    </div>
                                <div className="rev-icons">
                                  <img className="review-icons" src={Like} alt="like" />
                                  <img className="review-icons" src={Share} alt="share" />
                                  <img className="review-icons" src={Alert} alt="alert" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-page__product__info">
                      <div
                        className={classNames(
                          "product-page__product__info--fixed"
                        )}
                      >
                        {addToCartSection}
                      </div>
                    </div>
                  </div>

                  <div className="mediumScreen" style={{ display: "none" }}>
                    <div style={{ margin: "2rem 0" }}>
                      <div className="rel-item-box">
                        <div className="rel-item"> cutomer questions & answers </div>
                      </div>
                      <div className="class1">
                        <div className="question">Got a question regarding the product?<br />
                          <span className="experts">Our experts will answer it.</span>
                        </div>
                        <div className="ask"> <span className="aska"> ASK A QUESTION </span> </div>
                      </div>

                      <div className="cust-box">
                        <div className="mt-2">
                          <span className="qu">Question:</span><br className="only-mob" />
                          <span className="questiona">Will this jenny hold a 4,000 ft roll of 12 1/2 gauge of electric fence?</span>
                        </div>
                        <div className="mt-3">
                          <span className="qu">Answer:</span><br className="only-mob" />
                          <span className="answer">Hi, David. Yes it will hold 4,000 of 12.5 gauge high-tensile wire.</span>

                        </div>
                        <span className="by text-muted"> by Kencove on 06 Sep 2018  </span>
                      </div>
                      <div className="cust-box">
                        <div className="mt-2">
                          <span className="qu">Question:</span><br className="only-mob" />
                          <span className="questiona">Will this jenny hold a 4,000 ft roll of 12 1/2 gauge of electric fence?</span>
                        </div>
                        <div className="mt-3">
                          <span className="qu">Answer:</span><br className="only-mob" />
                          <span className="answer">Hi, David. Yes it will hold 4,000 of 12.5 gauge high-tensile wire.</span>

                        </div>
                        <span className="by text-muted"> by Kencove on 06 Sep 2018  </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-8">
                        <div className="rel-item-box">
                          <div className="rel-item"> Reviews </div>
                        </div>
                        <div className="rev">
                          <div className="for-mobile">
                            <div className="avg">Average Rating:</div>
                            <div className="cen-div">
                              <span className="numo"> 4.2 </span>
                              {/* <ReactStars
                                      count={5}
                                      size={24}
                                      activeColor="#000000"
                                      isHalf={true}
                                    /> */}
                              <span className="tot-rev"> | 6 reviews </span>
                            </div>
                          </div>
                          <div className="write"> <span className="aska"> WRITE A REVIEW </span> </div>
                        </div>

                        <div className="far-disp mt-3">
                          <div className="for-col">
                            {/* <div className="for-mobile"> */}
                            <span className="verify">Verified Buyer</span><br />
                            <span className="datee"> 07 sep 2019 </span>
                            {/* </div> */}
                            {/* <span className="mt-3">
                                  <ReactStars
                                      count={5}
                                      size={24}
                                      activeColor="#000000"
                                      isHalf={true}
                                    />
                                </span> */}
                          </div>
                          <div className="review-box">
                            <div className="works">
                              Works as advertised. It is as good as our old homemade one but a lot lighter.
                                    </div>
                            <div className="rev-icons">
                              <img className="review-icons" src={Like} alt="like" />
                              <img className="review-icons" src={Share} alt="share" />
                              <img className="review-icons" src={Alert} alt="alert" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                </>
              )
            }
          </Media>
        </div>
      </div>











    </div>
  );
};

export default Page;
