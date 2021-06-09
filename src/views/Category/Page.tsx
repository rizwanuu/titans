import "./scss/index.scss";

import * as React from "react";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { IFilterAttributes, IFilters } from "@types";
import {
  Breadcrumbs,
  extractBreadcrumbs,
  ProductsFeatured,
} from "../../components";

import { ProductListHeader } from "../../@next/components/molecules";
import { ProductList } from "../../@next/components/organisms";
import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";

import { maybe } from "../../core/utils";

import { Category_category } from "./gqlTypes/Category";
import { CategoryProducts_products } from "./gqlTypes/CategoryProducts";

import Product from '../../images/product.png';
import tipsProduct from '../../images/tips.png';
import fb from '../../images/fbCard-icon.svg';
import twitter from '../../images/twtrCard-icon.svg';



interface SortItem {
  label: string;
  value?: string;
}

interface SortOptions extends Array<SortItem> { }

interface PageProps {
  activeFilters: number;
  attributes: IFilterAttributes[];
  activeSortOption: string;
  category: Category_category;
  displayLoader: boolean;
  filters: IFilters;
  hasNextPage: boolean;
  products: CategoryProducts_products;
  sortOptions: SortOptions;
  clearFilters: () => void;
  onLoadMore: () => void;
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onOrder: (order: { value?: string; label: string }) => void;
}

const Page: React.FC<PageProps> = ({
  activeFilters,
  activeSortOption,
  attributes,
  category,
  displayLoader,
  hasNextPage,
  clearFilters,
  onLoadMore,
  products,
  filters,
  onOrder,
  sortOptions,
  onAttributeFiltersChange,
}) => {
  const canDisplayProducts = maybe(
    () => !!products.edges && products.totalCount !== undefined
  );
  const hasProducts = canDisplayProducts && !!products.totalCount;
  const [showFilters, setShowFilters] = React.useState(false);
  const intl = useIntl();

  const getAttribute = (attributeSlug: string, valueSlug: string) => {
    return {
      attributeSlug,
      valueName: attributes
        .find(({ slug }) => attributeSlug === slug)
        .values.find(({ slug }) => valueSlug === slug).name,
      valueSlug,
    };
  };

  const activeFiltersAttributes =
    filters &&
    filters.attributes &&
    Object.keys(filters.attributes).reduce(
      (acc, key) =>
        acc.concat(
          filters.attributes[key].map(valueSlug => getAttribute(key, valueSlug))
        ),
      []
    );

  return (
    <div className="category">
      <div className="categoryContainer">
        <Breadcrumbs breadcrumbs={extractBreadcrumbs(category)} />
        <div className="filters">
          <div className="for-mobil"> {"<"} Back to Tools </div>
          <div className="farm">
            {products.edges[0].node.name}
          </div>

          <div className="names">
            <div className="name-box"> <span className="name">Cutout Switches</span> </div>
            <div className="name-box"> <span className="name">Fence Flags</span> </div>
            <div className="name-box"> <span className="name">Fence Monitors</span> </div>
            <div className="name-box"> <span className="name">Underground Wire</span> </div>
          </div>

          <div className="mobile-filters">
            <div className="mobile-filter-view">Filter Products</div>
            <div className="mobile-sortby">
              <ProductListHeader
                activeSortOption={activeSortOption}
                openFiltersMenu={() => setShowFilters(true)}
                numberOfProducts={products ? products.totalCount : 0}
                activeFilters={activeFilters}
                activeFiltersAttributes={activeFiltersAttributes}
                clearFilters={clearFilters}
                sortOptions={sortOptions}
                onChange={onOrder}
                onCloseFilterAttribute={onAttributeFiltersChange}
              />
            </div>
          </div>
        </div>
        <FilterSidebar
          show={showFilters}
          hide={() => setShowFilters(false)}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
        />
        <div className="sortby">
          <ProductListHeader
            activeSortOption={activeSortOption}
            openFiltersMenu={() => setShowFilters(true)}
            numberOfProducts={products ? products.totalCount : 0}
            activeFilters={activeFilters}
            activeFiltersAttributes={activeFiltersAttributes}
            clearFilters={clearFilters}
            sortOptions={sortOptions}
            onChange={onOrder}
            onCloseFilterAttribute={onAttributeFiltersChange}
          />
        </div>
        {canDisplayProducts && (
          <ProductList
            products={products.edges.map(edge => edge.node)}
            canLoadMore={hasNextPage}
            loading={displayLoader}
            onLoadMore={onLoadMore}
          />
        )}
      </div>

      {!hasProducts && (
        <ProductsFeatured
          title1={intl.formatMessage(commonMessages.youMightLike)}
        />
      )}

      <div className="tips-view" style={{ display: "none" }}>
        <div className="last-view"> Tips & Recommendations </div>

        <div className="productRow">

          <div className="view-card">
            <img className="view-card-img" src={tipsProduct} alt="tipsProduct" />
            <div className="tips-name"> Coated Wire fence repair </div>
            <div className="tips-date"> Content_Creator 08 Oct, 2019 </div>
            <div className="view-social">
              <img src={fb} alt="fb-icon" />
              <img src={twitter} alt="twtr-icon" />
              <span className="text-comment">6 Comments</span>
            </div>
          </div>
          <div className="view-card">
            <img className="view-card-img" src={tipsProduct} alt="tipsProduct" />
            <div className="tips-name"> Coated Wire fence repair </div>
            <div className="tips-date"> Content_Creator 08 Oct, 2019 </div>
            <div className="view-social">
              <img src={fb} alt="fb-icon" />
              <img src={twitter} alt="twtr-icon" />
              <span className="text-comment">6 Comments</span>
            </div>
          </div>
          <div className="view-card">
            <img className="view-card-img" src={tipsProduct} alt="tipsProduct" />
            <div className="tips-name"> Coated Wire fence repair </div>
            <div className="tips-date"> Content_Creator 08 Oct, 2019 </div>
            <div className="view-social">
              <img src={fb} alt="fb-icon" />
              <img src={twitter} alt="twtr-icon" />
              <span className="text-comment">6 Comments</span>
            </div>
          </div>
          <div className="view-card">
            <img className="view-card-img" src={tipsProduct} alt="tipsProduct" />
            <div className="tips-name"> Coated Wire fence repair </div>
            <div className="tips-date"> Content_Creator 08 Oct, 2019 </div>
            <div className="view-social">
              <img src={fb} alt="fb-icon" />
              <img src={twitter} alt="twtr-icon" />
              <span className="text-comment">6 Comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-view">
        <div className="last-view"> Last Viewed Products </div>

        <div className="productRow">

          <div className="view-card">
            <img className="view-card-img" src={Product} alt="product" />
            <div className="view-name"> Kencove Fence Staple Gun </div>
            <div className="view-price"> $697.75/<span className="text-muted">each</span></div>
          </div>
          <div className="view-card">
            <img className="view-card-img" src={Product} alt="product" />
            <div className="view-name"> Kencove Fence Staple Gun </div>
            <div className="view-price"> $697.75/<span className="text-muted">each</span></div>
          </div>
          <div className="view-card">
            <img className="view-card-img" src={Product} alt="product" />
            <div className="view-name"> Kencove Fence Staple Gun </div>
            <div className="view-price"> $697.75/<span className="text-muted">each</span></div>
          </div>
          <div className="view-card">
            <img className="view-card-img" src={Product} alt="product" />
            <div className="view-name"> Kencove Fence Staple Gun </div>
            <div className="view-price"> $697.75/<span className="text-muted">each</span></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;
