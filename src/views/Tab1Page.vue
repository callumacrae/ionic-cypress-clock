<template>
  <ion-page v-bind="$attrs">
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button @click="isOpen = true">Open modal</ion-button>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>

  <ion-modal :is-open="isOpen">
    <ion-content>
      <h1>Select a date</h1>
      <v-date-picker v-model="date" />
      <p v-if="date" data-test="output">
        You selected {{ date.toISOString() }}.
      </p>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts" setup>
import { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal } from "@ionic/vue";
import { ref } from "vue";
import ExploreContainer from "@/components/ExploreContainer.vue";

const isOpen = ref(false);
const date = ref<Date>();
</script>
