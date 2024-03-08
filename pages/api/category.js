import React from 'react';
import Link from 'next/link';

const CategoryItem = ({ categoryName, iconSrc, linkUrl, delay }) => {
  return (
    <div className={`category-item wow fadeInUp delay-${delay}`}>
      <div className="icon">
        <img src={iconSrc} alt="Icon" />
      </div>
      <h5>
        <Link href={linkUrl}>{categoryName}</Link>
      </h5>
      <img src="assets/images/category/arrow.png" alt="Arrow" />
    </div>
  );
};

export default CategoryItem;
