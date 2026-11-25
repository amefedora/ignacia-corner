
<template>
  <article class="project-card">

    <span class="project-category">
      {{ category }}
    </span>

    <h2 class="project-title">
      {{ title }}
    </h2>

    <p class="project-description">
      {{ description }}
    </p>

    <span class="project-status">
      {{ status }}
    </span>

    <RouterLink :to="link" class="project-link">
      Read project →
    </RouterLink>

  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  description: String,
  category: String,
  status: String,
  link: String
})


</script>


<style scoped>
.project-card {
  background-color: var(--journal-card-work);
  color: var(--journal-card-text);
  border: 1px solid var(--journal-card-border);
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  transition: transform 0.2s ease,
              box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 4px 4px 0 var(--journal-card-border);
}

.project-category {
  font-size: 0.85rem;
  font-weight: 600;
}

.project-card .project-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  line-height: 1.3;
  margin: 0.75rem 0;
  padding: 0;
  border: none;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.7;
}

.project-status {
  display: block;
  font-size: 0.85rem;
  margin: 1rem 0;
}

.project-link {
  display: inline-block;
  color: var(--journal-card-text);
  font-weight: 700;
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }

  .project-card:hover {
    transform: none;
  }
}
</style>

