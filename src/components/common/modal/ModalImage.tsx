import "./ModalImage.scss";

interface ImageProps {
  image: string;
  alt: string;
  showModal: boolean;
  closeModal: () => void;
}

const ModalImage = (props: ImageProps) => {
  if (props.showModal === false) {
    return <></>;
  }

  return (
    <>
      <div id="myModal" className="modal main left-0 ">
        <span id="close" onClick={props.closeModal}>
          &times;
        </span>
        <img
          className="modal-content"
          src={props.image}
          alt={props.alt}
          title={props.alt}
        />
      </div>
    </>
  );
};

export default ModalImage;
