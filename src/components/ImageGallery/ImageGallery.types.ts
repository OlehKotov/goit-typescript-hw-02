import { Image } from "../../services/images-api.types";

export interface ImageGalleryProps {
    images: Image[];
    openModal: (imageUrl: string) => void;
  };