import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type ImageProps = {
  src: string;
  alt?: string;
};

function Image({ alt = "", src }: ImageProps) {
  return <LazyLoadImage alt={alt} src={src} effect="blur" />;
}

export default Image;
