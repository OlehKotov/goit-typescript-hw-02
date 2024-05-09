import { Image } from "../../services/images-api.types";

export interface ImageCardProps {
    image: Image;
    openModal: (url: string) => void;
  };