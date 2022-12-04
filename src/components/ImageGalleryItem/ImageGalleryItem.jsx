import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li
      className={css.galleryItem}
      onClick={() => {
        openModal(largeImageURL);
      }}
    >
      <img className={css.galleryImage} src={webformatURL} alt="qwqwqqw" />
    </li>
  );
};
