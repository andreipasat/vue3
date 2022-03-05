<script lang="ts">
import { defineComponent } from 'vue';
import {updateObjectsInArray} from '../helpers/objects'
import Step from '../interfaces/Step'


export default defineComponent({
    name: 'Test',
    computed: {
        activeDescription() {
            return this.steps.find(e => e.active === true).description
        }
    },
    data() {
        return {
            steps: [
                {
                    title: 'Basics',
                    description: 'Basics description',
                    active: false,
                    passed: false
                },
                {
                    title: 'Components',
                    description: 'Components description',
                    active: true,
                    passed: false
                }
            ] as Step[]
        }
    },
    methods:{
        setStepActive(title:String) {
            this.deactivateAll()
            this.steps = updateObjectsInArray(this.steps, title, 'title', {active: true})
        },
        deactivateAll() {
            this.steps = this.steps.map(e => {
                return {...e, active: false}
            })
        }
    }
})
</script>

<template>
  
    <div class="container">
        <h2>Vue js steps</h2>
        <h4>{{ activeDescription }}</h4>
        <ul class="list-inline">
            <li v-for="(step, index) in steps" :key="step.title + index" @click="setStepActive(step.title)">{{step.title}}</li>
        </ul>
        <button class="btn">Next</button>&nbsp;
        <button class="btn">Prev</button>
    </div>
</template>
<style scoped>
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