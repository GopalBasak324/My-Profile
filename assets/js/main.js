/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav__link, .nav__contact");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.querySelector(".home__text");

if (homeText) {
  const characters = homeText.textContent.split("");
  const angle = 360 / characters.length;

  homeText.textContent = "";

  characters.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.transform = `rotate(${index * angle}deg)`;
    homeText.appendChild(span);
  });
}

/*=============== HOME TYPED JS ===============*/
const education = document.querySelector(".home__education");

if (education && typeof Typed !== "undefined") {
  new Typed(".home__education", {
    strings: ["Web Developer", "Freelancer"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1800,
    loop: true,
  });
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== WORK HIGHLIGHTS + CLOSER LOOK ===============*/
const WORK_AUTOPLAY_MS = 5500;
const WORK_PROJECTS = [
  {
    title: "Restaurant Website",
    details: [
      {
        label: "Concept",
        heading: "Hospitality, first impression.",
        body: "A dining brand needed a site that feels like walking in — warm lighting, considered type, and a booking path that never gets in the way.",
        image: "assets/img/work-img-1.png",
        alt: "Restaurant website concept workspace",
        stats: [
          { value: "UX", label: "Flow" },
          { value: "Brand", label: "Voice" },
        ],
      },
      {
        label: "Visual design",
        heading: "Editorial plates, quiet luxury.",
        body: "Photography-led layouts, a menu-like type system, and dark surfaces that let dishes and atmosphere carry the story.",
        image: "assets/img/work-img-3.png",
        alt: "Restaurant visual design on laptop",
        stats: [
          { value: "Figma", label: "System" },
          { value: "Type", label: "Hierarchy" },
        ],
      },
      {
        label: "Development",
        heading: "Motion with restraint.",
        body: "HTML, CSS, and JavaScript with GSAP page motion. Responsive layouts stay fast, and reservation data stays in sync with a lightweight database.",
        image: "assets/img/work-img-5.png",
        alt: "Restaurant website in development",
        stats: [
          { value: "GSAP", label: "Motion" },
          { value: "SQL", label: "Data" },
        ],
      },
      {
        label: "Features",
        heading: "From menu to reserved table.",
        body: "Online booking, a menu explorer, chef stories, and hours that stay accurate — built for guests who decide on a phone.",
        image: "assets/img/work-img-1.png",
        alt: "Restaurant website features",
        stats: [
          { value: "Book", label: "Reservations" },
          { value: "Menu", label: "Explorer" },
        ],
      },
      {
        label: "Outcome",
        heading: "A presence that converts.",
        body: "The launch gave the restaurant a premium digital table — clearer offers, faster bookings, and a brand that matches the room.",
        image: "assets/img/work-img-2.png",
        alt: "Restaurant website outcome",
        stats: [
          { value: "Live", label: "Launch" },
          { value: "SEO", label: "Discoverable" },
        ],
      },
    ],
  },
  {
    title: "Design For Agriculture",
    details: [
      {
        label: "Concept",
        heading: "Built for the field.",
        body: "An agriculture brand needed design that reads in daylight, on dusty screens, and still feels modern in a boardroom.",
        image: "assets/img/work-img-2.png",
        alt: "Agriculture design concept",
        stats: [
          { value: "Field", label: "Context" },
          { value: "Clear", label: "Voice" },
        ],
      },
      {
        label: "Visual design",
        heading: "Earth tones, sharp tools.",
        body: "A Figma system with durable colour, strong iconography, and layouts that keep crop data and services easy to scan.",
        image: "assets/img/work-img-4.png",
        alt: "Agriculture visual design system",
        stats: [
          { value: "Figma", label: "Library" },
          { value: "Icons", label: "Set" },
        ],
      },
      {
        label: "Development",
        heading: "From file to farm site.",
        body: "The design system became a responsive site with GSAP reveals, structured content, and components that stay consistent across pages.",
        image: "assets/img/work-img-3.png",
        alt: "Agriculture website development",
        stats: [
          { value: "HTML", label: "Structure" },
          { value: "GSAP", label: "Reveal" },
        ],
      },
      {
        label: "Features",
        heading: "Services that scale with season.",
        body: "Crop programmes, equipment stories, and a contact path that routes growers to the right specialist without extra steps.",
        image: "assets/img/work-img-2.png",
        alt: "Agriculture website features",
        stats: [
          { value: "CMS", label: "Ready" },
          { value: "Forms", label: "Routed" },
        ],
      },
      {
        label: "Outcome",
        heading: "A brand operations can trust.",
        body: "The company shipped a sharper identity and a site that sales teams actually send — clear, fast, and built for the work.",
        image: "assets/img/work-img-5.png",
        alt: "Agriculture design outcome",
        stats: [
          { value: "Brand", label: "System" },
          { value: "Web", label: "Live" },
        ],
      },
    ],
  },
  {
    title: "Chicken Shop Website",
    details: [
      {
        label: "Concept",
        heading: "Local flavour, digital speed.",
        body: "A neighbourhood shop needed a storefront that feels busy in the best way — offers first, orders easy, personality intact.",
        image: "assets/img/work-img-3.png",
        alt: "Chicken shop website concept",
        stats: [
          { value: "Local", label: "Brand" },
          { value: "Fast", label: "Intent" },
        ],
      },
      {
        label: "Visual design",
        heading: "Heat, contrast, appetite.",
        body: "Bold type, high-contrast plates, and a mobile layout that puts the menu and today’s deals in thumb reach.",
        image: "assets/img/work-img-1.png",
        alt: "Chicken shop visual design",
        stats: [
          { value: "Menu", label: "First" },
          { value: "Mobile", label: "Native" },
        ],
      },
      {
        label: "Development",
        heading: "Checkout without the queue.",
        body: "JavaScript-driven offers, responsive cards, and a lightweight order flow sitting on a simple database for daily specials.",
        image: "assets/img/work-img-5.png",
        alt: "Chicken shop website development",
        stats: [
          { value: "JS", label: "Offers" },
          { value: "DB", label: "Specials" },
        ],
      },
      {
        label: "Features",
        heading: "Order, locate, come back.",
        body: "Featured combos, location hours, and a contact path that turns a lunch decision into a pickup in a few taps.",
        image: "assets/img/work-img-3.png",
        alt: "Chicken shop website features",
        stats: [
          { value: "Combos", label: "Featured" },
          { value: "Hours", label: "Live" },
        ],
      },
      {
        label: "Outcome",
        heading: "A shop that shows up online.",
        body: "The site gave the counter a second front door — easier discovery, clearer offers, and a look that matches the food.",
        image: "assets/img/work-img-2.png",
        alt: "Chicken shop website outcome",
        stats: [
          { value: "Pickup", label: "Ready" },
          { value: "SEO", label: "Local" },
        ],
      },
    ],
  },
  {
    title: "Complete Systems For Mining",
    details: [
      {
        label: "Concept",
        heading: "Operations, made visible.",
        body: "A mining company needed software that turns scattered records into a single, reliable picture of the site.",
        image: "assets/img/work-img-4.png",
        alt: "Mining systems concept",
        stats: [
          { value: "Ops", label: "View" },
          { value: "Data", label: "Single" },
        ],
      },
      {
        label: "Visual design",
        heading: "Dense data, calm interface.",
        body: "Dashboards designed for long shifts — high contrast, disciplined tables, and status colour that reads at a glance.",
        image: "assets/img/work-img-1.png",
        alt: "Mining systems visual design",
        stats: [
          { value: "UI", label: "Dense" },
          { value: "Status", label: "Colour" },
        ],
      },
      {
        label: "Development",
        heading: "A system, not a brochure.",
        body: "Full-stack flows with a structured database, authenticated views, and performance work so large tables stay usable.",
        image: "assets/img/work-img-3.png",
        alt: "Mining systems development",
        stats: [
          { value: "Stack", label: "Full" },
          { value: "Auth", label: "Roles" },
        ],
      },
      {
        label: "Features",
        heading: "Track, report, decide.",
        body: "Asset logs, shift reports, and exportable records — the tools supervisors already needed, now in one place.",
        image: "assets/img/work-img-4.png",
        alt: "Mining systems features",
        stats: [
          { value: "Logs", label: "Assets" },
          { value: "CSV", label: "Export" },
        ],
      },
      {
        label: "Outcome",
        heading: "Fewer spreadsheets, clearer days.",
        body: "Teams moved off scattered files into a system they could trust — faster reporting and fewer missed updates.",
        image: "assets/img/work-img-5.png",
        alt: "Mining systems outcome",
        stats: [
          { value: "Live", label: "System" },
          { value: "Time", label: "Saved" },
        ],
      },
    ],
  },
  {
    title: "SEO Medicine Website",
    details: [
      {
        label: "Concept",
        heading: "Care that can be found.",
        body: "A medical practice needed pages that rank for the right searches and still feel calm, private, and human.",
        image: "assets/img/work-img-5.png",
        alt: "SEO medicine website concept",
        stats: [
          { value: "Search", label: "Intent" },
          { value: "Trust", label: "Tone" },
        ],
      },
      {
        label: "Visual design",
        heading: "Clinical quiet, not cold.",
        body: "Generous spacing, readable type, and photography that signals care without looking like a stock brochure.",
        image: "assets/img/work-img-3.png",
        alt: "SEO medicine visual design",
        stats: [
          { value: "Type", label: "Read" },
          { value: "Space", label: "Calm" },
        ],
      },
      {
        label: "Development",
        heading: "Structure search engines reward.",
        body: "Semantic HTML, fast CSS, and content templates for treatments, doctors, and FAQs — built to expand without losing SEO shape.",
        image: "assets/img/work-img-1.png",
        alt: "SEO medicine website development",
        stats: [
          { value: "HTML", label: "Semantic" },
          { value: "CWV", label: "Fast" },
        ],
      },
      {
        label: "Features",
        heading: "Answers, then appointments.",
        body: "Condition pages, practitioner profiles, and a contact path that captures the right details before the call.",
        image: "assets/img/work-img-4.png",
        alt: "SEO medicine website features",
        stats: [
          { value: "FAQ", label: "Schema" },
          { value: "Book", label: "Path" },
        ],
      },
      {
        label: "Outcome",
        heading: "Found for the right reasons.",
        body: "The practice now owns clearer search real estate and a site that converts research into booked visits.",
        image: "assets/img/work-img-2.png",
        alt: "SEO medicine website outcome",
        stats: [
          { value: "SEO", label: "Lift" },
          { value: "Calls", label: "Up" },
        ],
      },
    ],
  },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const workCarousel = document.querySelector(".work__carousel");
const workPagination = document.getElementById("work-pagination");
const workReplay = document.getElementById("work-replay");
const workLookTrigger = document.getElementById("work-look-trigger");
const lookOverlay = document.getElementById("work-look");
const lookTitle = document.getElementById("look-title");
const lookList = document.getElementById("look-list");
const lookImg = document.getElementById("look-img");
const lookStats = document.getElementById("look-stats");
const lookClose = document.getElementById("look-close");
const lookPrev = document.getElementById("look-prev");
const lookNext = document.getElementById("look-next");

let workSwiper = null;
let workLookIndex = 0;
let workDetailIndex = 0;
let lookLastFocus = null;
let workPointerDragging = false;

const replayWorkMedia = () => {
  const activeCard = document.querySelector(".work__card.is-active");
  if (!activeCard) return;

  activeCard.classList.add("is-replaying");
  void activeCard.offsetWidth;
  activeCard.classList.remove("is-replaying");
};

const setWorkActiveCard = (index) => {
  document.querySelectorAll(".work__card").forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === index);
  });
};

const renderWorkPagination = (total, activeIndex) => {
  if (!workPagination) return;

  workPagination.style.setProperty("--work-autoplay", `${WORK_AUTOPLAY_MS}ms`);
  workPagination.innerHTML = Array.from({ length: total }, (_, index) => {
    const isActive = index === activeIndex ? " is-active" : "";
    return `<button class="work__bullet${isActive}" type="button" aria-label="Go to project ${index + 1}"><span></span></button>`;
  }).join("");

  workPagination.querySelectorAll(".work__bullet").forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      workSwiper?.slideTo(index);
    });
  });
};

const restartWorkProgress = () => {
  const activeBullet = workPagination?.querySelector(".work__bullet.is-active span");
  if (!activeBullet) return;

  activeBullet.style.animation = "none";
  void activeBullet.offsetWidth;
  activeBullet.style.animation = "";
};

if (typeof Swiper !== "undefined" && document.querySelector(".work__swiper")) {
  workSwiper = new Swiper(".work__swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 16,
    grabCursor: true,
    rewind: true,
    speed: 700,
    breakpoints: {
      768: {
        spaceBetween: 22,
      },
      1150: {
        spaceBetween: 28,
      },
    },
    autoplay: prefersReducedMotion
      ? false
      : {
          delay: WORK_AUTOPLAY_MS,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
    on: {
      init(swiper) {
        setWorkActiveCard(swiper.realIndex);
        renderWorkPagination(swiper.slides.length, swiper.realIndex);
      },
      slideChange(swiper) {
        setWorkActiveCard(swiper.realIndex);
        renderWorkPagination(swiper.slides.length, swiper.realIndex);
      },
      sliderMove() {
        workPointerDragging = true;
      },
      touchEnd() {
        window.setTimeout(() => {
          workPointerDragging = false;
        }, 50);
      },
    },
  });

  workSwiper.el?.addEventListener("click", (event) => {
    if (workPointerDragging) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
}

if (workCarousel && workSwiper && !prefersReducedMotion) {
  workCarousel.addEventListener("mouseenter", () => {
    workPagination?.querySelector(".work__bullet.is-active")?.classList.add("is-paused");
  });
  workCarousel.addEventListener("mouseleave", () => {
    workPagination?.querySelector(".work__bullet.is-active")?.classList.remove("is-paused");
  });
}

workReplay?.addEventListener("click", () => {
  replayWorkMedia();
  restartWorkProgress();
  workSwiper?.autoplay?.start?.();
});

const updateLookArrows = () => {
  const total = WORK_PROJECTS[workLookIndex]?.details.length || 0;
  lookPrev.disabled = workDetailIndex === 0;
  lookNext.disabled = workDetailIndex === total - 1;
};

const renderLookStats = (stats = []) => {
  if (!lookStats) return;

  if (!stats.length) {
    lookStats.hidden = true;
    lookStats.innerHTML = "";
    return;
  }

  lookStats.hidden = false;
  lookStats.innerHTML = stats
    .map(
      (stat) =>
        `<div class="look__stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`
    )
    .join("");
};

const setLookDetail = (detailIndex, { animate = true } = {}) => {
  const project = WORK_PROJECTS[workLookIndex];
  const detail = project?.details[detailIndex];
  if (!project || !detail) return;

  workDetailIndex = detailIndex;

  lookList?.querySelectorAll(".look__item").forEach((item, index) => {
    const isActive = index === detailIndex;
    item.classList.toggle("is-active", isActive);
    item.querySelector(".look__btn")?.setAttribute("aria-expanded", String(isActive));
  });

  if (lookImg) {
    const applyImage = () => {
      lookImg.src = detail.image;
      lookImg.alt = detail.alt;
      lookImg.classList.remove("is-switching");
    };

    if (animate && !prefersReducedMotion) {
      lookImg.classList.add("is-switching");
      window.setTimeout(applyImage, 220);
    } else {
      applyImage();
    }
  }

  renderLookStats(detail.stats);
  updateLookArrows();
};

const renderLookList = (project) => {
  if (!lookList) return;

  lookList.innerHTML = project.details
    .map(
      (detail, index) => `
        <div class="look__item${index === 0 ? " is-active" : ""}">
          <button class="look__btn" type="button" aria-expanded="${index === 0}">
            <span class="look__icon"><i class="ri-add-line"></i></span>
            <span>${detail.label}</span>
          </button>
          <div class="look__info">
            <div class="look__info-inner">
              <h4>${detail.heading}</h4>
              <p>${detail.body}</p>
            </div>
          </div>
        </div>`
    )
    .join("");

  lookList.querySelectorAll(".look__btn").forEach((button, index) => {
    button.addEventListener("click", () => setLookDetail(index));
  });
};

const openWorkLook = (projectIndex) => {
  const project = WORK_PROJECTS[projectIndex];
  if (!project || !lookOverlay) return;

  workLookIndex = projectIndex;
  workDetailIndex = 0;
  lookLastFocus = document.activeElement;
  lookTitle.textContent = project.title;
  renderLookList(project);
  setLookDetail(0, { animate: false });

  lookOverlay.classList.add("is-open");
  lookOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("look-open");
  workSwiper?.autoplay?.stop?.();
  workPagination?.querySelector(".work__bullet.is-active")?.classList.add("is-paused");
  lookClose?.focus();
};

const closeWorkLook = () => {
  if (!lookOverlay) return;

  lookOverlay.classList.remove("is-open");
  lookOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("look-open");
  workSwiper?.autoplay?.start?.();
  workPagination?.querySelector(".work__bullet.is-active")?.classList.remove("is-paused");
  restartWorkProgress();
  lookLastFocus?.focus?.();
};

document.querySelectorAll(".work__card").forEach((card) => {
  const openFromCard = () => {
    if (workPointerDragging) return;
    const index = Number(card.dataset.workIndex);
    workSwiper?.slideTo(index);
    openWorkLook(index);
  };

  card.addEventListener("click", openFromCard);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFromCard();
    }
  });
});

workLookTrigger?.addEventListener("click", () => {
  openWorkLook(workSwiper?.realIndex ?? 0);
});

lookClose?.addEventListener("click", closeWorkLook);
lookPrev?.addEventListener("click", () => setLookDetail(workDetailIndex - 1));
lookNext?.addEventListener("click", () => setLookDetail(workDetailIndex + 1));

lookOverlay?.addEventListener("click", (event) => {
  if (event.target === lookOverlay) closeWorkLook();
});

document.addEventListener("keydown", (event) => {
  if (!lookOverlay?.classList.contains("is-open")) return;

  if (event.key === "Escape") closeWorkLook();
  if (event.key === "ArrowUp") {
    event.preventDefault();
    setLookDetail(Math.max(0, workDetailIndex - 1));
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    const lastIndex = (WORK_PROJECTS[workLookIndex]?.details.length || 1) - 1;
    setLookDetail(Math.min(lastIndex, workDetailIndex + 1));
  }
});

/*=============== SERVICES ACCORDION ===============*/
const servicesCards = document.querySelectorAll(".services__card");

servicesCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isOpen = card.classList.contains("services-open");

    servicesCards.forEach((item) => item.classList.remove("services-open"));

    if (!isOpen) {
      card.classList.add("services-open");
    }
  });
});

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
const testimonialSliders = document.querySelectorAll(".testimonials__slider");

testimonialSliders.forEach((slider) => {
  const cards = [...slider.children];
  cards.forEach((card) => {
    slider.appendChild(card.cloneNode(true));
  });
});

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const sendEmail = (event) => {
  event.preventDefault();

  const isConfigured =
    SERVICE_ID !== "YOUR_SERVICE_ID" &&
    TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
    PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

  if (!isConfigured) {
    contactMessage.textContent = "Message sent successfully ✅";
    contactForm.reset();
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 5000);
    return;
  }

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", PUBLIC_KEY).then(
    () => {
      contactMessage.textContent = "Message sent successfully ✅";
      contactForm.reset();
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    },
    () => {
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
};

if (contactForm) {
  contactForm.addEventListener("submit", sendEmail);
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUpButton.classList.add("show-scroll")
    : scrollUpButton.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(
      `.nav__menu a[href="#${sectionId}"]`
    );

    if (!sectionLink) return;

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link");
    } else {
      sectionLink.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.getElementById("cursor");
let mouseX = 0;
let mouseY = 0;

const animateCursor = () => {
  if (cursor) {
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  }
  requestAnimationFrame(animateCursor);
};

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  cursor?.classList.add("is-visible");
});

document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => cursor?.classList.add("is-hidden"));
  element.addEventListener("mouseleave", () => cursor?.classList.remove("is-hidden"));
});

animateCursor();

/*=============== SCROLLREVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 300,
  });

  sr.reveal(".home__data, .footer__title");
  sr.reveal(".home__perfil", { delay: 600 });
  sr.reveal(".about__title, .about__data", { origin: "left" });
  sr.reveal(".section__title, .skills__description, .work__top");
  sr.reveal(".work__carousel", { delay: 400 });
  sr.reveal(".services__card, .skills__content, .testimonials__card, .contact__form, .contact__card", {
    interval: 100,
  });
}
