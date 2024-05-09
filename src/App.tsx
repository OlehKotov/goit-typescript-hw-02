import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { requestImagesByQuery } from "./services/images-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image } from "./services/images-api.types";


function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const onSearch = (searchTerm: string): void => {
    setQuery(searchTerm);
    setPage(1);
    setImages([]); 
    
  };

  const onAddPage = (): void => {
    setPage((prevPage: number) => prevPage + 1);
  };


  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
  };

  const closeModal = (): void => {
    setSelectedImage("");
  };


  useEffect((): void => {
    if (!query) return;
    async function fetchImagesByQuery() {
      try {
        setLoading(true);   
        const data: Image[] = await requestImagesByQuery(query, page);
        setImages((prevImages: Image[]) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImagesByQuery();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal}/>
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onAddPage={onAddPage} />}
      <ImageModal selectedImage={selectedImage} closeModal={closeModal}/>
    </div>
  );
}

export default App;

