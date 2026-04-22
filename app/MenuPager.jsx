"use client";

import { useState } from "react";

const menuPages = [
  {
    title: "Mains",
    note: [
      "Review-inspired plates for a filling meal.",
      "Built around rice, pasta, kottu, and seafood favorites.",
    ],
    items: [
      ["Chicken Fried Rice", "Rs 1,200"],
      ["Creamy Pasta", "Rs 1,350"],
      ["Cheese Kottu", "Rs 1,100"],
      ["Devilled Cuttlefish", "Rs 1,500"],
    ],
  },
  {
    title: "Sides",
    note: [
      "Shareable add-ons for the middle of the table.",
      "Good with hearty mains, quick dinners, and family orders.",
    ],
    items: [
      ["Hot Buttered Mushrooms", "Rs 950"],
      ["Devilled Cuttlefish Side", "Rs 1,250"],
      ["Fried Rice Portion", "Rs 850"],
      ["Open Kitchen Specials", "Rs 1,000"],
    ],
  },
  {
    title: "Snacks",
    note: [
      "Casual bites for quick visits and relaxed evenings.",
      "Comfort-style cafe snacks inspired by guest favorites.",
    ],
    items: [
      ["Cheese Kottu Cup", "Rs 800"],
      ["Mushroom Bites", "Rs 750"],
      ["Family Sharing Plate", "Rs 1,500"],
      ["Daily Cafe Snack", "Rs 650"],
    ],
  },
  {
    title: "Drinks",
    note: [
      "Refreshing drinks and sweet finishes for the meal.",
      "Includes review-mentioned pineapple juice and wattalappan.",
    ],
    items: [
      ["Fresh Pineapple Juice", "Rs 450"],
      ["Wattalappan", "Rs 500"],
      ["Soft Drinks", "Rs 300"],
      ["Cafe Refreshers", "Rs 550"],
    ],
  },
];

export default function MenuPager() {
  const [pageIndex, setPageIndex] = useState(0);
  const page = menuPages[pageIndex];

  function previousPage() {
    setPageIndex((current) =>
      current === 0 ? menuPages.length - 1 : current - 1,
    );
  }

  function nextPage() {
    setPageIndex((current) =>
      current === menuPages.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <div className="menuPager">
      <div className="menuCategory">
        <div>
          <p>{page.title}</p>
          <span>
            {page.note.map((line) => (
              <small key={line}>{line}</small>
            ))}
          </span>
        </div>
        <strong>
          {pageIndex + 1}/{menuPages.length}
        </strong>
      </div>

      <div className="menuList">
        {page.items.map(([item, detail]) => (
          <div className="menuRow" key={item}>
            <span>{item}</span>
            <strong>{detail}</strong>
          </div>
        ))}
      </div>

      <div className="menuControls" aria-label="Swap menu pages">
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
