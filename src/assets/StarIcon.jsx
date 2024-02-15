import * as React from "react";
import "../components/Search.css";

const StarIcon = ({ onClick, isFavorite }) => {
  return (
    <svg
      onClick={() => onClick()}
      className="favorite-icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={30}
      height={30}
      stroke="#000"
      viewBox="-4.79 -4.79 57.52 57.52"
    >
      <path
        stroke={"var(--black)"}
        strokeLinecap="round"
        strokeLinejoin="round"
        //strokeWidth={4.794}
        strokeWidth={3}
        d="m26.285 2.486 5.407 10.956a2.58 2.58 0 0 0 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 0 0 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z"
        style={{
          fill: isFavorite ? "var(--yellow)" : "none",
        }}
      />
      <path
        d="m26.285 2.486 5.407 10.956a2.58 2.58 0 0 0 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 0 0 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z"
        style={{
          fill: isFavorite ? "var(--yellow)" : "none",
        }}
      />
    </svg>
  );
};

export default StarIcon;
