import '../styles.css';
import { Component } from 'react';
import { fetchFunction } from 'services/photosApi';
import { mapped } from 'services/mapped';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    loading: false,
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.getPhotos();
    }
  }

  getPhotos() {
    const { query, page } = this.state;

    this.setState({ loading: true });
    fetchFunction(query, page)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        return this.setState(prevState => ({
          photos: [...prevState.photos, ...mapped(res.hits)],
          totalHits: res.totalHits,
        }));
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  onSubmit = photoName => {
    this.setState({
      query: photoName,
      photos: [],
      page: 1,
      totalHits: 0,
      currentImage: null,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = image => {
    this.setState({ currentImage: image });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const { photos, loading, page, totalHits, currentImage } = this.state;
    return (
      <>
        <Searchbar onSubmitHandler={this.onSubmit} />
        {loading && <Loader />}
        {photos.length > 0 && (
          <ImageGallery
            photos={photos}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
        )}
        {photos.length > 0 && page * 12 < totalHits && (
          <Button text="Load more" onLoadMore={this.onLoadMore} />
        )}

        {currentImage && (
          <Modal currentImage={currentImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
