import { productItems } from "../site-content";

const images = productItems.slice(0, 5);

export function OrderPhotoFlow() {
  return <div className="order-photo-flow order-photo-flow-page" aria-label="Luniva ürünlerinden seçkiler"><div className="order-photo-track order-photo-track-up">{[...images, ...images].map((item, index) => <img key={item.title + index} src={item.image} alt="" className="order-flow-image" />)}</div><div className="order-photo-track order-photo-track-down">{[...images.slice().reverse(), ...images.slice().reverse()].map((item, index) => <img key={item.title + index} src={item.image} alt="" className="order-flow-image" />)}</div></div>;
}
