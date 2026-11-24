
<template>
  <section class="journal-hero">
    <div class="hero-decorations" aria-hidden="true">
    <span class="doodle doodle-star">✧</span>
    <span class="doodle doodle-sun">✳</span>
    <span class="doodle doodle-heart">♡</span>
    <span class="doodle doodle-sparkle">✦</span>
    </div>


    <p class="hero-greeting">
      oh, hello there!
    </p>

    <h1 class="hero-title">
  Ignacia's
  <span class="hero-highlight">
    Corner.
    <svg
      class="hero-underline"
      viewBox="0 0 300 25"
      aria-hidden="true"
    >
      <path
        d="M5 10 Q140 28 295 5"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>
  </span>
</h1>

    <p class="hero-description">
      A little corner of the internet for
      everything I build, learn, and love.
    </p>

    <p class="hero-note">
      a work in progress, just like me.
    </p>

  </section>
</template>


<style scoped>
.journal-hero {
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    padding: 3rem 1rem 1rem;
    text-align: center;
    color: var(--vp-c-text);
}

.hero-greeting {
  font-family: var(--font-handwritten);
  font-size: 2rem;
  margin: 0 0 1rem;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 1.05;
  margin: 0;
  padding: 0;
  border: none;
}

.hero-title span {
  display: block;
}

.hero-description {
  max-width: 450px;
  margin: 2rem auto 1rem;
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.7;
}

.hero-note {
  font-family: var(--font-handwritten);
  font-size: 1.4rem;
  margin: 1rem 0 0;
}

.hero-title .hero-highlight {
  display: block;
  position: relative;
  width: fit-content;
  margin: 0 auto;
}

.hero-underline {
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  height: 25px;
  color: var(--journal-pink);
  pointer-events: none;
}
.hero-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.doodle {
  position: absolute;
  font-size: 2rem;
  line-height: 1;
}

.doodle-star {
  top: 25%;
  left: 10%;
  color: var(--journal-card-text);
  transform: rotate(-15deg);
}

.doodle-sun {
  top: 12%;
  right: 12%;
  font-size: 3rem;
  color: var(--journal-card-tape);
  animation: float 4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .doodle-sun {
    animation: none;
  }
}

.doodle-heart {
  top: 65%;
  right: 8%;
  color: var(--journal-pink);
  transform: rotate(15deg);
}

.doodle-sparkle {
  top: 75%;
  left: 15%;
  color: var(--journal-lavender);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

@media (max-width: 600px) {
  .journal-hero {
    padding: 2rem 1rem 1rem;
  }

  .doodle {
    font-size: 1.3rem;
  }

  .doodle-sun {
    font-size: 1.8rem;
    right: 2%;
  }

  .doodle-star {
    left: 2%;
  }

  .doodle-heart,
  .doodle-sparkle {
    display: none;
  }

  .hero-description {
    font-size: 1rem;
  }
}
</style>
