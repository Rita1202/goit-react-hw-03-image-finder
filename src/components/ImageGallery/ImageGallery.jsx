import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos, openModal, closeModal }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
            closeModal={closeModal}
          />
        );
      })}
    </ul>
  );
};
