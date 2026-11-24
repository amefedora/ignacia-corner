
<template>
  <section class="journal-section">

    <p class="journal-note">
      two little worlds, one corner ♡
    </p>

    <h2>Explore my corner.</h2>

    <div class="journal-grid">

      <RouterLink to="/what-i-do/" class="journal-card work-card">
        <span class="card-symbol">✦</span>
        <h3>What I Do</h3>
        <p>
          Studies, career, and projects I've completed
          along the way.
        </p>
        <span class="explore-link">Explore →</span>
      </RouterLink>

      <RouterLink to="/what-i-love/" class="journal-card love-card">
        <span class="card-symbol">♡</span>
        <h3>What I Love</h3>
        <p>
          Random writings, music, books, and
          everything in between.
        </p>
        <span class="explore-link">Explore →</span>
      </RouterLink>

    </div>

  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>


<style scoped>
.journal-section {
  max-width: 700px;
  margin: 3rem auto;
  padding: 1rem;
}

.journal-note {
  font-family: var(--font-handwritten);
  font-size: 1.5rem;
  text-align: center;
}

.journal-section h2 {
  text-align: center;
  border: none;
  margin-bottom: 2.5rem;
}

.journal-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.journal-card {
  position: relative;
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--journal-ink);
  border-radius: 16px;
  color: var(--journal-ink);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.work-card {
  background-color: var(--journal-lavender);
}

.love-card {
  background-color: var(--journal-pink);
}

.card-symbol {
  font-size: 2rem;
}

.journal-card h3 {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  margin: 0.5rem 0;
  padding: 0;
  line-height: 1.3
}

.journal-card p {
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0.5rem 0;
}

.explore-link {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 700;
}

.journal-card:hover {
  transform: translateY(-5px);
  box-shadow: 4px 6px 0 var(--journal-ink);
  text-decoration: none;
}

.journal-card::before {
  content: '';
  position: absolute;
  top: -14px;
  left: 50%;
  width: 120px;
  height: 28px;
  background-color: var(--journal-yellow);
  opacity: 0.85;
  transform: translateX(-50%) rotate(-4deg);
}

.love-card::before {
  transform: translateX(-50%) rotate(4deg);
}

.journal-section a.journal-card,
.journal-section a.journal-card:hover {
    text-decoration: none;
}

.journal-card h3,
.journal-card p,
.journal-card span {
  text-decoration: none;
}

@media (max-width: 600px) {
  .journal-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .journal-card {
    padding: 1.25rem;
  }

  .journal-section {
    margin: 2rem auto;
  }
}

</style>

