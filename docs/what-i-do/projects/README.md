
# Projects

A collection of things I've built, problems I've
explored, and lessons I've learned along the way.

<script setup>
import ProjectCard from '../../.vuepress/components/ProjectCard.vue'
import { projects } from '@temp/projects.js'
</script>

<ProjectCard
  v-for="project in projects"
  :key="project.link"
  v-bind="project"
/>
