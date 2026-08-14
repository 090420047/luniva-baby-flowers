"use client";

import { useEffect, useState } from "react";
import { productItems } from "../site-content";

const babyFlowItems = productItems.filter(
  (item) =>
    item.categories.includes("hos-geldin-bebek-hediyeleri") &&
    !item.tags.includes("Hediyelik")
);

function shuffle<T>(items: T[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

export function OrderPhotoFlow() {
  const [firstTrack, setFirstTrack] = useState(babyFlowItems);
  const [secondTrack, setSecondTrack] = useState([...babyFlowItems].reverse());

  useEffect(() => {
    setFirstTrack(shuffle(babyFlowItems));
    setSecondTrack(shuffle(babyFlowItems));
  }, []);

  return <div className="order-photo-flow order-photo-flow-page" aria-label="Luniva ürünlerinden seçkiler"><div className="order-photo-track order-photo-track-up">{[...firstTrack, ...firstTrack].map((item, index) => <img key={`${item.title}-${index}`} src={item.image} alt="" className="order-flow-image" />)}</div><div className="order-photo-track order-photo-track-down">{[...secondTrack, ...secondTrack].map((item, index) => <img key={`${item.title}-${index}`} src={item.image} alt="" className="order-flow-image" />)}</div></div>;
}
