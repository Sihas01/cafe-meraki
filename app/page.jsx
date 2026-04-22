import MenuPager from "./MenuPager";

const dishes = [
  {
    name: "Chicken Fried Rice",
    detail: "Mentioned in multiple Google reviews; guests call the portions large and filling.",
    price: "Popular",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Devilled Cuttlefish",
    detail: "Ordered by families alongside rice, pasta, mushrooms, and drinks.",
    price: "Dinner",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hot Buttered Mushrooms",
    detail: "A highlighted vegetarian bite from a five-star family dinner review.",
    price: "Snack",
    image:
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cheese Kottu",
    detail: "Called heavenly in a recent customer review of this hidden gem.",
    price: "Loved",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  },
];

const stories = [
  {
    title: "Family Restaurant",
    copy: "The Google listing categorizes Cafe Meraki by Ovinmee as a family restaurant in Moratuwa.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dine In, Takeaway, Delivery",
    copy: "Guests can dine in, order takeaway, or choose delivery according to the Google listing.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reasonably Priced",
    copy: "The listing shows Rs 1,000-1,500 per person, reported by 14 people.",
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Went for dinner with friends and had a great time. The food was so tasty and reasonably priced. The service was great.",
    name: "Customer Update",
  },
  {
    quote:
      "The food was delicious and amazing portion sizes. We ordered chicken fried rice, devilled cuttlefish, hot buttered mushrooms and a creamy pasta.",
    name: "Varunie Mendis",
  },
  {
    quote:
      "A decent place. Not expensive, good food, friendly service. They have a separate air conditioned area as well.",
    name: "Chanaka Edirisinghe",
  },
  {
    quote:
      "I had a fresh pineapple juice, chicken fried rice and wattalappan. Taste is good and the portions were large.",
    name: "Chanaka Edirisinghe",
  },
  {
    quote:
      "Honestly this place is so underrated. Everyone needs to try this place. Truly a hidden gem.",
    name: "Manji Kulathunge",
  },
  {
    quote:
      "Cheese kottu is heavenly.",
    name: "Manji Kulathunge",
  },
  {
    quote:
      "The staff mentioned they had recently taken over and rebranded and were really friendly and efficient.",
    name: "Customer Update",
  },
];

const socialStats = [
  ["Rating", "4.6 / 5"],
  ["Reviews", "35"],
  ["Price", "Rs 1,000-1,500"],
  ["Phone", "077 785 0750"],
];

const links = {
  facebook:
    "https://www.facebook.com/people/Cafe-Meraki-Sri-Lanka/61561861116745/",
  instagram: "https://www.instagram.com/cafemeraki.srilanka/",
  maps: "https://maps.app.goo.gl/EifmYpYkfhYRm8cr7?g_st=iw",
  linktree: "https://linktr.ee/_cafemeraki_",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/cafe-meraki";
const logoSrc = `${basePath}/meraki-logo-transparent.png`;

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="Cafe Meraki hero">
        <div className="heroShade" />
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Cafe Meraki home">
            <img src={logoSrc} alt="Cafe Meraki" />
          </a>
          <div className="navlinks">
            <a href="#menu">Menu</a>
            <a href="#chef">Chef</a>
            <a href="#guests">Guests</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Cafe Meraki Sri Lanka</p>
          <h1>
            CAFE MERAKI
            <span>BY OVINMEE</span>
          </h1>
          <p className="heroDescription">
            <span>4.6-rated family restaurant in Moratuwa with 35 Google reviews.</span>
            <span>Dine-in, takeaway, and delivery available from 7 Gemunu Mawatha.</span>
          </p>
          <div className="heroActions" aria-label="Hero actions">
            <a className="heroButton primary" href={links.maps}>
              Find us
            </a>
            <a className="heroButton secondary" href="#menu">
              Explore menu
            </a>
          </div>
        </div>
      </section>

      <section className="definition sectionPad" id="menu">
        <div className="sectionHeading narrow">
          <p className="eyebrow">Featured items</p>
          <h2>Featured Items</h2>
        </div>

        <div className="dishRail" aria-label="Featured seasonal dishes">
          {dishes.map((dish) => (
            <article className="dishCard" key={dish.name}>
              <img src={dish.image} alt="" />
              <div>
                <div className="dishTitleRow">
                  <h3>{dish.name}</h3>
                  <span>{dish.price}</span>
                </div>
                <p>{dish.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="chefGrid sectionPad" id="chef">
        <div className="chefIntro">
          <p className="eyebrow">Google listing details</p>
          <h2>A family restaurant rated 4.6 in Moratuwa.</h2>
          <p>
            Cafe Meraki by Ovinmee is listed as a family restaurant at 7 Gemunu
            Mawatha, Moratuwa. The Google profile shows dine-in, takeaway, and
            delivery, a Rs 1,000-1,500 per-person range, and opening at 11 AM.
          </p>
          <a href={links.maps} className="textButton">
            Get directions
          </a>
          <img
            src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80"
            alt=""
          />
        </div>

        <aside className="menuPanel" aria-label="Signature menu">
          <div className="menuPanelHead">
            <h2>Menu</h2>
            <span>4 pages</span>
          </div>
          <MenuPager />
          <a href="tel:+94777850750" className="panelButton">
            Call 077 785 0750
          </a>
        </aside>
      </section>

      <section className="story sectionPad">
        <div className="sectionHeading centered">
          <p className="eyebrow">About the place</p>
          <h2>Real highlights from the Google profile.</h2>
        </div>

        <div className="storyCards">
          {stories.map((story) => (
            <article className="storyCard" key={story.title}>
              <img src={story.image} alt="" />
              <h3>{story.title}</h3>
              <p>{story.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="chefNote">
        <div className="chefNoteCopy">
          <p>
            Cafe Meraki by Ovinmee has a 4.6 Google rating from 35 reviews.
            Reviewers highlight chicken fried rice, devilled cuttlefish, hot
            buttered mushrooms, creamy pasta, fresh pineapple juice,
            wattalappan, and cheese kottu.
          </p>
          <span>Google listing and customer review highlights</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80"
          alt=""
        />
      </section>

      <section className="guestSection sectionPad" id="guests">
        <div className="sectionHeading narrow">
          <p className="eyebrow">What our guests say</p>
          <h2>Real review highlights.</h2>
        </div>
        <a className="bookingPill light" href={links.maps}>
          Directions
        </a>

        <div className="testimonialGrid">
          {testimonials.map((testimonial) => (
            <figure className="testimonial" key={testimonial.quote}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer" id="visit">
        <div className="footerImage">
          <img
            className="footerPhoto"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt=""
          />
        </div>

        <div className="footerContent">
          <div className="footerIntro">
            <a className="footerBrand" href="#top" aria-label="Cafe Meraki home">
              <img src={logoSrc} alt="Cafe Meraki" />
            </a>
            <div>
              <p className="eyebrow">Cafe Meraki by Ovinmee</p>
              <h2>Family dining, comfort plates, and friendly service in Moratuwa.</h2>
            </div>
            <div className="footerActions" aria-label="Footer actions">
              <a className="footerButton primary" href="tel:+94777850750">
                Call now
              </a>
              <a className="footerButton" href={links.maps}>
                Get directions
              </a>
            </div>
          </div>

          <div className="footerGrid">
            <section>
            <p className="eyebrow">Visit</p>
            <p>Cafe Meraki by Ovinmee</p>
            <p>7 Gemunu Mawatha, Moratuwa</p>
            <p>Plus code: RV8V+28 Moratuwa</p>
            </section>
            <section>
            <p className="eyebrow">Service</p>
            <p>Dine-in / Takeaway / Delivery</p>
            <p>Opens 11 AM</p>
            </section>
            <section>
            <p className="eyebrow">Reach</p>
            {socialStats.map(([label, value]) => (
              <p key={label}>
                {label}: {value}
              </p>
            ))}
            </section>
            <section>
              <p className="eyebrow">Follow</p>
              <a href={links.instagram}>Instagram</a>
              <a href={links.facebook}>Facebook</a>
              <a href={links.linktree}>Linktree</a>
            </section>
          </div>

          <div className="footerBottom">
            <p>4.6 rating from 35 Google reviews</p>
            <div>
              {socialStats.slice(0, 3).map(([label, value]) => (
                <span key={label}>
                  {label}: {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
