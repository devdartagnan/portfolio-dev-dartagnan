import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./Responsive.module.scss";
import Image from 'next/image'

interface Props {
  items: {
    id: string;
    data: string;
    cardDescription: string;
    titulo: string;
    tag: [string];
    thumb: string;
    altImage: string;
    altPage: {
      contentImages: [string];
      projectUrl: string;
      textoDescricao: string;
    }
  }
}

export default function ResponsiveCarousel({ items }: Props) {
  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        // autoPlay={true}
        showIndicators={false}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
        className={styles.mySwiper}
      >
        {items.altPage.contentImages.map((item: any) => (
          <div key={items.id} className={styles.swipItem}>
            <div className={styles.imgBox}>
              <Image src={item} alt="slides" width={0} height={0}/>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
