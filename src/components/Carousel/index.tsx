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
  setLink?: React.Dispatch<React.SetStateAction<number>> | any
  setCurrent: () => void
}
export default function GalleryPortfolio({ images, additionalClass, setLink, setCurrent }: Props) {

  return (
    <ImageGallery
      items={images}
      showThumbnails={true}
      thumbnailPosition={'right'}
      additionalClass={additionalClass}
      onSlide={(index) => {
        setCurrent()
        setLink(index+1)
      }}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  )
}
