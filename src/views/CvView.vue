<script setup lang="ts">
import AtSymbolIcon from '../components/Icons/AtSymbolIcon.vue'
import GitHubIcon from '../components/Icons/GitHubIcon.vue'
import GlobeAltIcon from '../components/Icons/GlobeAltIcon.vue'
import MapPinIcon from '../components/Icons/MapPinIcon.vue'
import PhoneIcon from '../components/Icons/PhoneIcon.vue'
import CalendarIcon from '../components/Icons/CalendarIcon.vue'
</script>

<template>
  <div class="min-h-dvh bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">
    <div class="pUnderstanding OOP, Design Patterns y-6 mx-auto max-w-6xl px-4 sm:py-12 sm:px-6 print:py-0">
      <div class="mb-8 flex items-start sm:gap-4">
        <div class="relative min-w-24">
          <img src="/nvminh162.jpg" alt="Nguyen Van Minh" class="size-20 rounded-full sm:size-24" />
          <span class="absolute end-4 bottom-0 size-4 rounded-full bg-green-500 ring-3 ring-white print:hidden">
          </span>
        </div>
        <div>
          <div class="text-lg">Fresher Java Web Fullstack</div>
          <h1 class="mb-2 text-3xl font-bold">Nguyen Van Minh</h1>
          <p>
            I am Java Backend Developer with a solid foundation in Java and backend technologies. Familiar with Spring
            Boot, Hibernate, and RESTful APIs. Eager to learn and contribute to building efficient and reliable
            applications.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 print:gap-0">
        <div class="col-span-1">
          <div class="mb-6 rounded bg-gray-100 p-3 dark:bg-white/5 print:p-0">
            <ul class="space-y-2">
              <li>
                <div class="inline-flex items-center gap-2">
                  <CalendarIcon class="size-6" />
                  Feb 16, 2004 ({{ new Date().getFullYear() - 2004 }} years old)
                </div>
              </li>
              <li>
                <a href="mailto:nvminh162@gmail.com"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
                  <AtSymbolIcon class="size-6" />
                  nvminh162@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0353999798"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
                  <PhoneIcon class="size-6" />
                  0353.999.798
                </a>
              </li>
              <li>
                <a href="#" class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
                  <GlobeAltIcon class="size-6" />
                  nvminh162.dev
                </a>
              </li>
              <li>
                <a href="https://github.com/nvminh162" target="_blank"
                  class="inline-flex items-center gap-2 underline-offset-2 transition-all hover:underline">
                  <GitHubIcon class="size-6" />
                  nvminh162
                </a>
              </li>
              <li>
                <div class="inline-flex items-center gap-2">
                  <MapPinIcon class="size-6" />
                  Trang Bom District, Dong Nai Province
                </div>
              </li>
              <li>
                <div class="inline-flex items-center gap-2">
                  <MapPinIcon class="size-6" />
                  Go Vap District, Ho Chi Minh City
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-3 text-xl font-semibold uppercase">Skills</h2>
            <ul class="list-inside list-disc space-y-1.5">
              <li>English reading comprehension</li>
              <li>
                Working knowledge of
                <span class="font-medium">OOP & Design Patterns</span>
              </li>
              <li>
                Updating...
              </li>
              <li>
                Updating...
              </li>
              <li>
                Updating...
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-col col-span-1 grid gap-8">
          <div>
            <h2 class="mb-3 text-xl font-semibold uppercase">Experience</h2>
            <div class="grid-col grid gap-4">
              <div>
                <div class="flex items-center gap-1">
                  <h3 class="mb-0.5 text-lg font-semibold">Archi Elite</h3>
                  <time class="text-sm text-gray-700 before:me-1 before:content-['-'] dark:text-gray-300">
                    2024 Oct - Now
                  </time>
                </div>
                <h4 class="mb-2 font-medium">Software Developer</h4>
                <ul class="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    Updating...
                  </li>
                  <li>
                    Updating...
                  </li>
                  <li>
                    Updating...
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 class="mb-3 text-xl font-semibold uppercase">
              Projects & Activities
            </h2>
            <p class="mb-2">
              I focused on learning the technologies I used and contributing to
              open-source projects on
              <a href="https://github.com/nvminh162?tab=repositories" target="_blank"
                class="underline underline-offset-2 transition-all hover:text-gray-950 dark:hover:text-gray-50">
                GitHub</a>.
            </p>
            <ul class="list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                Updating...
              </li>
              <li>
                Updating...
              </li>
              <li>
                Updating...
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-4 text-xl font-semibold uppercase">Education</h2>
            <div class="grid-col grid gap-4">
              <div>
                <div class="flex items-center gap-1">
                  <h3 class="mb-0.5 text-lg font-semibold">Industrial University of Ho Chi Minh City: IUH</h3>
                </div>
                <time class="text-sm text-gray-700 dark:text-gray-300">
                  2022 Sep - 2027 Apr
                </time>
                <div class="mb-2"></div>
                <h4 class="font-medium">Achievements</h4>
                <div class="text-gray-700 dark:text-gray-300">
                  Graduated with honors, excelling in courses related to the
                  current field.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
