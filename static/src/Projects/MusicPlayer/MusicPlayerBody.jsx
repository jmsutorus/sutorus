import React from "react";
import MusicPlayerTopNav from "./MusicPlayerTopNav";
import MusicPlayerSection from "./MusicPlayerSection";

var data = {
  sections: [
    {
      title: "Recently Played",
      cards: [
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b2737e0f9cd686104c9a8c25428a",
          title: "Schlagenheim",
          name: "Black Midi",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b2733a1377aafc2fdd5203ddb786",
          title: "Violence",
          name: "Yung Lean",
        },
        {
          src:
            "https://i.scdn.co/image/ab67706f00000002a2db307dce8dc0a5740a532e",
          title: "Post Punk 2K",
          name: "New no wave, post-punk, and anything else. Cover: Dehd",
        },
        {
          src:
            "https://i.scdn.co/image/2ffa47b9c56241d9b63c93a59da02888dfc59129",
          title: "Idles",
          name: "Artist",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b273841292c1316c4bf85447bcd9",
          title: "Fetch The Bolt Cutters",
          name: "Fiona Apple",
        },
      ],
    },
    {
      title: "Your Top Podcasts",
      cards: [
        {
          src: "https://daily-mix.scdn.co/covers/gift_sets/YDP/en.jpg",
          title: "Your Daily Podcasts",
          name: "Podcast episodes picked out just for you",
        },
        {
          src:
            "https://i.scdn.co/image/1f6776b3137a4e72f5eccd747b01382eb43807e6",
          title: "History of Rome",
          name: "Mike Duncan",
        },
        {
          src:
            "https://i.scdn.co/image/41529ae5d15d03e5b4550eaff53b0c70a0f27d67",
          title: "Chapo Trap House",
          name: "Chapo Track House",
        },
        {
          src:
            "https://i.scdn.co/image/1c6648648c175a4830a5ff9fed695713bbe06a30",
          title: "The Daily",
          name: "The New York Times",
        },
      ],
    },
    {
      title: "Your Heavy Rotation",
      cards: [
        {
          src:
            "https://i.scdn.co/image/41529ae5d15d03e5b4550eaff53b0c70a0f27d67",
          title: "Chapo Trap House",
          name: "Chapo Track House",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b273b47d309281c66820b7137f5d",
          title: "My Little Dark Age",
          name: "MGMT",
        },
        {
          src:
            "https://i.scdn.co/image/2ffa47b9c56241d9b63c93a59da02888dfc59129",
          title: "Idles",
          name: "Artist",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b273adb1732fa8d44b8eb2f6c0bf",
          title: "OK Computer",
          name: "Radiohead",
        },
        {
          src:
            "https://i.scdn.co/image/ab67706f00000002a2db307dce8dc0a5740a532e",
          title: "Post Punk 2K",
          name: "New no wave, post-punk, and anything else. Cover: Dehd",
        },
      ],
    },
    {
      title: "Jump Back In",
      cards: [
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b2735676fba9c44ba772deb81727",
          title: "Titanic Rising",
          name: "Weyes Blood",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b273f552daab2bc3dc64d2c4c649",
          title: "No Love Deep Web",
          name: "Death Grips",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b2731fab037626d29339dd28b74e",
          title: "Feet Of Clay",
          name: "Earl Sweatshirt",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b2732b688ab63b1a5f281cfdf451",
          title: "Some Rap Songs",
          name: "Earl Sweatshirts",
        },
        {
          src:
            "https://i.scdn.co/image/ab67616d0000b2733a0ea65328068dcef898688e",
          title: "You Won't Get What You Want",
          name: "Daughters",
        },
      ],
    },
  ],
};

function getSections() {
  var sectionsList = [];
  data.sections.forEach((section) => {
    sectionsList.push(
      <MusicPlayerSection title={section.title} cards={section.cards} />
    );
  });
  return sectionsList;
}

function MusicPlayerBody() {
  return (
    <div className="main-view">
      <div className="main-view-container">
        <div className="main-view-scroll">
          <MusicPlayerTopNav />
          <section className="body-section">
            <section className="section-inner">{getSections()}</section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerBody;
