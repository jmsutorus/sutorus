import React from "react";
import MusicPlayerCard from "./MusicPlayerCard";

function getCards(cards) {
  var cardsList = [];
  cards.forEach((card) => {
    cardsList.push(
      <MusicPlayerCard src={card.src} title={card.title} name={card.name} />
    );
  });
  return cardsList;
}

function MusicPlayerSection({ title, cards }) {
  return (
    <div>
      <section className="recent-section">
        <div className="recent-grid">
          <div className="recent-title">
            <a className="recent-title-name" href="/">
              {title}
            </a>
          </div>
          {getCards(cards)}
        </div>
      </section>
    </div>
  );
}

export default MusicPlayerSection;
