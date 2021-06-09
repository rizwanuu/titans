import React from "react";
import { useInView } from "react-intersection-observer";

import { Icon } from "@components/atoms";
import { CachedImage } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

import US from '../../../../images/united-states.png';

const MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS = 4;

export const ProductGallery: React.FC<IProps> = ({ images }: IProps) => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);

  const displayButtons = images.length > MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS;

  React.useEffect(() => {
    if (imageIndex >= images.length) {
      setImageIndex(0);
    }
  }, [images]);

  const bottomImageRef = React.useRef<HTMLDivElement | null>(null);
  const topImageRef = React.useRef<HTMLDivElement | null>(null);
  const [topImageIntersectionObserver, topImageInView] = useInView({
    threshold: 0.5,
  });

  const [bottomImageIntersectionObserver, bottomImageInView] = useInView({
    threshold: 0.5,
  });

  const setBottomRef = React.useCallback(
    node => {
      bottomImageRef.current = node;
      bottomImageIntersectionObserver(node);
    },
    [bottomImageIntersectionObserver]
  );

  const setTopRef = React.useCallback(
    node => {
      topImageRef.current = node;
      topImageIntersectionObserver(node);
    },
    [topImageIntersectionObserver]
  );

  const setIntersectionObserver = (index: number, lengthOfArray: number) => {
    if (lengthOfArray > MINIMAL_NUMBER_OF_IMAGES_FOR_BUTTONS) {
      if (index === 0) {
        return setTopRef;
      }
      if (index === lengthOfArray - 1) {
        return setBottomRef;
      }
    }
  };

  return (
    <S.Wrapper data-test="productPhotosGallery">
      <div className="row mt-4">
        <div className="col-lg-4">
          <S.Preview className="prod-box mt-2" data-test="imagePreview">
            {images && images.length > 0 && imageIndex < images.length && (
              <CachedImage
                alt={images[imageIndex].alt}
                url={images[imageIndex].url}
              />
            )}
            {images.length === 0 && <CachedImage />}
          </S.Preview>
          <S.ThumbnailsContainer>
            {!topImageInView && displayButtons && (
              <S.TopButton
                onClick={() => {
                  if (topImageRef.current) {
                    topImageRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest",
                    });
                  }
                }}
              >
                <Icon name="select_arrow" size={10} />
              </S.TopButton>
            )}
            {!bottomImageInView && displayButtons && (
              <S.BottomButton
                onClick={() => {
                  if (bottomImageRef.current) {
                    bottomImageRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest",
                    });
                  }
                }}
              >
                <Icon name="select_arrow" size={10} />
              </S.BottomButton>
            )}
            <S.ThumbnailList>
              <ul style={{display: "flex"}}>
                {images &&
                  images.length > 0 &&
                  images.map((image, index) => {
                    return (
                      <li
                        key={index}
                        data-test="galleryThumbnail"
                        data-test-id={index}
                      >
                        <S.Thumbnail
                          ref={setIntersectionObserver(index, images.length)}
                          onClick={() => setImageIndex(index)}
                          onMouseEnter={() => setImageIndex(index)}
                          activeThumbnail={Boolean(index === imageIndex)}
                        >
                          <CachedImage alt={image.alt} url={image.url} />
                        </S.Thumbnail>
                      </li>
                    );
                  })}
              </ul>
            </S.ThumbnailList>
          </S.ThumbnailsContainer>
        </div>
        <div className="col-lg-4">
          <div className="main-2">
            <div className="prod-namee">{localStorage.getItem("name")}</div>
            <div className="prod-code"> Code: TSJHH </div>
            {/* <div className="rating"> <span className="r-num"> 4.2 </span> <ReactStars
                count={5}
                onChange={this.ratingChanged}
                size={24}
                activeColor="#000000"
                isHalf={true}
              />
              </div> */}
            <div className="review"> Read 6 review <span className="mx-3"> | </span> 1 Q&As </div>
            <div className="stock"> In Stock <span className="mx-4"> | </span>
              <img className="us-flag" src={US} alt="us-flag" />
                Made in USA
              </div>
            {/* <hr className="line" /> */}
            <div>
              <ul>
                <li className="safely">Safely contains poultry, pigs, goats</li>
                <li className="safely mt-3">Safely contains poultry, pigs, goats</li>
                <li className="safely mt-3">Safely contains poultry, pigs, goats</li>
              </ul>
            </div>
            <div className="spec"> see full specifications</div>
            {/* <hr className="line2" /> */}
            <div className="man"> view product manual</div>
          </div>
        </div>
      </div>
      {/* <S.Preview data-test="imagePreview">
        {images && images.length > 0 && imageIndex < images.length && (
          <CachedImage
            alt={images[imageIndex].alt}
            url={images[imageIndex].url}
          />
        )}
        {images.length === 0 && <CachedImage />}
      </S.Preview> */}
      {/* <S.ThumbnailsContainer>
        {!topImageInView && displayButtons && (
          <S.TopButton
            onClick={() => {
              if (topImageRef.current) {
                topImageRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}
          >
            <Icon name="select_arrow" size={10} />
          </S.TopButton>
        )}
        {!bottomImageInView && displayButtons && (
          <S.BottomButton
            onClick={() => {
              if (bottomImageRef.current) {
                bottomImageRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "nearest",
                });
              }
            }}
          >
            <Icon name="select_arrow" size={10} />
          </S.BottomButton>
        )}
        <S.ThumbnailList>
          <ul>
            {images &&
              images.length > 0 &&
              images.map((image, index) => {
                return (
                  <li
                    key={index}
                    data-test="galleryThumbnail"
                    data-test-id={index}
                  >
                    <S.Thumbnail
                      ref={setIntersectionObserver(index, images.length)}
                      onClick={() => setImageIndex(index)}
                      onMouseEnter={() => setImageIndex(index)}
                      activeThumbnail={Boolean(index === imageIndex)}
                    >
                      <CachedImage alt={image.alt} url={image.url} />
                    </S.Thumbnail>
                  </li>
                );
              })}
          </ul>
        </S.ThumbnailList>
      </S.ThumbnailsContainer> */}


    </S.Wrapper>
  );
};
