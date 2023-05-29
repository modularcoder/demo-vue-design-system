<template>
  <nav aria-label="Progress">
    <ol role="list" class="twc-overflow-hidden">
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[
          stepIdx !== steps.length - 1 ? 'twc-pb-10' : '',
          'twc-relative',
        ]"
      >
        <template v-if="step.isVisible">
          <template v-if="step.isCompleted">
            <div
              v-if="
                stepIdx !== steps.length - 1 && steps[stepIdx + 1].isVisible
              "
              class="twc-absolute twc-top-4 twc-left-4 twc-mt-0.5 twc--ml-px twc-w-0.5 twc-h-full"
              :class="[
                step.isDisabled
                  ? 'twc-bg-gray-400'
                  : stepIdx + 1 < steps.length &&
                    (steps[stepIdx + 1].isActive ||
                      steps[stepIdx + 1].isCompleted)
                  ? 'twc-bg-primary-600'
                  : 'twc-bg-gray-200',
              ]"
              aria-hidden="true"
            />
            <a
              :class="step.isDisabled && 'twc-pointer-events-none'"
              class="twc-group twc-flex twc-relative twc-cursor-pointer"
              @click="step.onClick"
            >
              <span class="twc-flex twc-items-center twc-h-9">
                <span
                  class="twc-flex twc-relative twc-justify-center twc-items-center twc-w-8 twc-h-8 twc-rounded-full"
                  :class="
                    step.isDisabled
                      ? 'twc-bg-gray-400'
                      : 'twc-bg-primary-600 group-hover:twc-bg-primary-800'
                  "
                >
                  <CheckIcon
                    class="twc-w-5 twc-h-5 twc-text-white"
                    aria-hidden="true"
                  >
                  </CheckIcon>
                </span>
              </span>
              <span
                class="twc-flex twc-flex-col twc-justify-center twc-ml-4 twc-min-w-0"
                :class="[step.isDisabled && 'twc-opacity-50']"
              >
                <span
                  class="twc-text-xs twc-font-semibold twc-tracking-wide twc-uppercase"
                  :class="[
                    step.isActive
                      ? 'twc-text-primary-600'
                      : 'twc-text-gray-900',
                  ]"
                >
                  {{ step.name }}
                </span>
                <span
                  v-if="step.description"
                  class="twc-text-sm twc-text-gray-500"
                >
                  {{ step.description }}
                </span>
              </span>
            </a>
          </template>
          <template v-else-if="step.isActive">
            <div
              v-if="
                stepIdx !== steps.length - 1 && steps[stepIdx + 1].isVisible
              "
              class="twc-absolute twc-top-4 twc-left-4 twc-mt-0.5 twc--ml-px twc-w-0.5 twc-h-full"
              aria-hidden="true"
              :class="[
                stepIdx + 1 < steps.length && steps[stepIdx + 1].isCompleted
                  ? 'twc-bg-primary-600'
                  : 'twc-bg-gray-200',
              ]"
            />
            <a
              class="twc-group twc-flex twc-relative twc-cursor-pointer"
              :class="step.isDisabled && 'twc-pointer-events-none'"
              aria-current="step"
              @click="step.onClick"
            >
              <span
                class="twc-flex twc-items-center twc-h-9"
                aria-hidden="true"
              >
                <span
                  class="twc-flex twc-relative twc-justify-center twc-items-center twc-w-8 twc-h-8 twc-bg-white twc-rounded-full twc-border-2 twc-border-primary-600"
                >
                  <span
                    class="twc-w-2.5 twc-h-2.5 twc-bg-primary-600 twc-rounded-full"
                  />
                </span>
              </span>
              <span
                class="twc-flex twc-flex-col twc-justify-center twc-ml-4 twc-min-w-0"
              >
                <span
                  class="twc-text-xs twc-font-semibold twc-tracking-wide twc-text-primary-600 twc-uppercase"
                  >{{ step.name }}</span
                >
                <span
                  v-if="step.description"
                  class="twc-text-sm twc-text-gray-500"
                  >{{ step.description }}</span
                >
              </span>
            </a>
          </template>
          <template v-else>
            <div
              v-if="
                stepIdx !== steps.length - 1 && steps[stepIdx + 1].isVisible
              "
              class="twc-absolute twc-top-4 twc-left-4 twc-mt-0.5 twc--ml-px twc-w-0.5 twc-h-full twc-bg-gray-300"
              aria-hidden="true"
            />
            <a
              class="twc-group twc-flex twc-relative twc-cursor-pointer"
              :class="step.isDisabled && 'twc-pointer-events-none'"
              @click="step.onClick"
            >
              <span
                class="twc-flex twc-items-center twc-h-9"
                aria-hidden="true"
              >
                <span
                  class="twc-flex twc-relative twc-justify-center twc-items-center twc-w-8 twc-h-8 twc-bg-white twc-rounded-full twc-border-2 twc-border-gray-300 group-hover:twc-border-gray-400"
                >
                  <span
                    class="twc-w-2.5 twc-h-2.5 twc-bg-transparent group-hover:twc-bg-gray-300 twc-rounded-full"
                  />
                </span>
              </span>
              <span
                class="twc-flex twc-flex-col twc-justify-center twc-ml-4 twc-min-w-0"
                :class="[step.isDisabled && 'twc-opacity-50 ']"
              >
                <span
                  class="twc-text-xs twc-font-semibold twc-tracking-wide twc-text-gray-500 twc-uppercase"
                  >{{ step.name }}</span
                >
                <span
                  v-if="step.description"
                  class="twc-text-sm twc-text-gray-500"
                  >{{ step.description }}</span
                >
              </span>
            </a>
          </template>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { CheckIcon } from '@heroicons/vue/solid'
  import { NavigationStep } from './BaseNavigationStepsTypes'

  defineProps({
    steps: { type: Array as PropType<NavigationStep[]>, required: true },
  })
</script>
