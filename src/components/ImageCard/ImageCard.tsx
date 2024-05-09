import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  const handleClick = (): void => {
    openModal(image.urls.regular);
  };

  return (
    <div className={css.listThumb}>
      <img
        onClick={handleClick}
        src={image.urls.small}
        className={css.listImg}
      />
    </div>
  );
};

export default ImageCard;
