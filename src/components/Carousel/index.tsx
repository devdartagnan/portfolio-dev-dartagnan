import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

interface Props {
  additionalClass?: string | undefined;
  images: {
    original: string;
    thumbnail: string;
    thumbnailClass: string;
    originalClass : string;
  }[];
}
export default function GalleryPortfolio({ images, additionalClass }: Props) {

  return (
    <ImageGallery
      items={images}
      showThumbnails={true}
      thumbnailPosition={'right'}
      additionalClass={additionalClass}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  )
}
