<script lang="ts">
import { log } from "console";
import { defineComponent } from "vue";
import { updateObjectsInArray } from "../helpers/objects";
import type Step from "../interfaces/Step";

export default defineComponent({
  name: "Test",
  computed: {
    activeDescription() {
      return this.steps.find((e) => e.active === true).description;
    },
    nextTitle() {
      let activeIndex = this.steps.findIndex((e) => e.active === true);
      return this.steps[activeIndex + 1]?.title;
    },
    prevTitle() {
      let activeIndex = this.steps.findIndex((e) => e.active === true);
      return this.steps[activeIndex - 1]?.title;
    },
  },
  data() {
    return {
      steps: [
        {
          title: "Basics",
          description: "Basics description",
          active: false,
          passed: false,
        },
        {
          title: "Components",
          description: "Components description",
          active: false,
          passed: false,
        },
        {
          title: "Router",
          description: "Router description",
          active: false,
          passed: false,
        },
        {
          title: "Vuex",
          description: "Vuex description",
          active: false,
          passed: false,
        },
        {
          title: "Composition",
          description: "Composition description",
          active: false,
          passed: false,
        },
      ] as Step[],
    };
  },
  created() {
    let checkActive = this.steps.findIndex((e) => e.active === true);
    if (checkActive === -1) {
      this.steps[0].active = true;
      this.steps[0].passed = true;
    }
  },
  methods: {
    setStepActive(title: String) {
      this.deactivateAll();
      this.steps = updateObjectsInArray(this.steps, title, "title", {
        active: true,
        passed: true,
      });
      this.setPassedToActive();
    },
    deactivateAll() {
      this.steps = this.steps.map((e) => {
        return { ...e, active: false, passed: false };
      });
    },
    setPassedToActive() {
      let index = this.steps.findIndex((e) => e.active === true);

      this.steps = this.steps.map((e, idx) => {
        if (idx < index) {
          return { ...e, passed: true };
        }
        return e;
      });
    },
  },
});
</script>

<template>
  <div class="container">
    <h2>Vue js steps</h2>
    <h4>{{ activeDescription }}</h4>
    <ul class="list-inline">
      <li
        v-for="(step, index) in steps"
        :key="step.title + index"
        @click="setStepActive(step.title)"
        :class="{ active: step.active, passed: step.passed }"
      >
        {{ step.title }}
      </li>
    </ul>
    <button :disabled="!prevTitle" class="btn" @click="setStepActive(prevTitle)">
      Prev</button
    >&nbsp;
    <button :disabled="!nextTitle" class="btn" @click="setStepActive(nextTitle)">
      Next
    </button>
  </div>
</template>
<style scoped>
.active {
  text-decoration: underline;
}
.passed {
  font-style: italic;
}
.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
  cursor: pointer;
}
</style>
