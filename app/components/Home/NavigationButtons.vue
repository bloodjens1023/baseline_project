<template>
  <div>
    <!-- Navigation Tabs -->
    <div class="w-full flex flex-row justify-start items-center gap-[2px] sticky top-0 z-50 py-2">
      <div class="w-[70%] flex flex-row items-center h-[44px] home-tabs box-content z-40 pb-[6px] pt-[5px]">
        <div class="h-full flex w-full flex-row items-center home-tabs-scroll overflow-y-hidden gap-[8px] px-2">
          <!-- Loop through tabs -->
          <div 
            v-for="(tab, index) in tabs" 
            :key="index" 
            class="h-full home-tabs-scroll-list"
          >
            <div 
              :class="[
                'h-full tabs-item text-[13px] capitalize flex justify-center items-center gap-2 px-6 rounded-lg overflow-hidden cursor-pointer transition-all duration-200',
                tab.active 
                  ? 'font-bold bg-gradient-to-b from-[#bfea36] to-[#48bc49] text-black border-2 border-emerald-400/50' 
                  : 'font-semibold bg-gradient-to-br from-[#1e2558] to-[#141935] text-gray-300 border border-blue-900/40 hover:from-[#252d6b] hover:to-[#1a2148] hover:text-white hover:border-blue-700/60'
              ]"
              @click="scrollToSection(index)"
            >
              <!-- SVG Icon -->
              <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" v-html="tab.icon"></svg>
              <span>{{ tab.name }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Search Button -->
      <div class="search-game pl-3 w-[30%] z-[10]">
        <div class="h-full flex items-center">
          <button 
            class="w-full h-full tabs-item text-[13px] font-semibold capitalize flex justify-center items-center gap-2 px-6 py-2 rounded-lg overflow-hidden cursor-pointer bg-gradient-to-br from-[#1e2558] to-[#141935] text-gray-300 border border-blue-900/40 hover:from-[#252d6b] hover:to-[#1a2148] hover:text-white hover:border-blue-700/60 transition-all duration-200"
            @click="openSearch"
          >
            <!-- Search SVG Icon -->
            <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <span>Buscar</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Sections Content -->
    <div class="sections-container">
      <div 
        v-for="(tab, index) in tabs" 
        :key="`section-${index}`"
        :ref="el => sectionRefs[index] = el"
        :id="`section-${tab.name.toLowerCase()}`"
        class="section py-8"
      >
        <div class="text-center">
          <!-- Section Icon -->
          <svg class="w-[60px] h-[60px] mx-auto mb-4 text-[#7dd93e]" viewBox="0 0 24 24" fill="currentColor" v-html="tab.icon"></svg>
          
          <!-- Section Title -->
          <h2 class="text-3xl font-bold text-white mb-2">{{ tab.name }}</h2>
          
          <!-- Section Description -->
          <p class="text-base text-gray-400">
            Catégorie {{ tab.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Tabs data
const tabs = ref([
  {
    name: 'Popular',
    active: true,
    icon: '<path d="M12.5,2C17,2 17.11,5.57 14.75,6.75C13.5,7.33 13.5,7.83 13.5,9.5C13.5,11.17 13.5,11.67 14.75,12.25C17.11,13.43 17,17 12.5,17C8,17 7.89,13.43 10.25,12.25C11.5,11.67 11.5,11.17 11.5,9.5C11.5,7.83 11.5,7.33 10.25,6.75C7.89,5.57 8,2 12.5,2M12.5,5.5A1,1 0 0,0 11.5,6.5A1,1 0 0,0 12.5,7.5A1,1 0 0,0 13.5,6.5A1,1 0 0,0 12.5,5.5M12.5,11.5A1,1 0 0,0 11.5,12.5A1,1 0 0,0 12.5,13.5A1,1 0 0,0 13.5,12.5A1,1 0 0,0 12.5,11.5Z"/>'
  },
  {
    name: 'PG',
    active: false,
    icon: '<path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"/>'
  },
  {
    name: 'TADA',
    active: false,
    icon: '<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,6V14H13V6H11M11,16V18H13V16H11Z"/>'
  },
  {
    name: 'PP',
    active: false,
    icon: '<path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,6A3,3 0 0,1 15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6M18,18H6V16.5C6,14.83 9.33,14 12,14C14.67,14 18,14.83 18,16.5V18Z"/>'
  },
  {
    name: 'FC',
    active: false,
    icon: '<path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,5A2,2 0 0,0 5,7V17A2,2 0 0,0 7,19H17A2,2 0 0,0 19,17V7A2,2 0 0,0 17,5H7M12,8L14.5,13.5L19,12L17,17H7L5,12L9.5,13.5L12,8Z"/>'
  },
  {
    name: 'JDB',
    active: false,
    icon: '<path d="M12,2L2,7V17H22V7L12,2M12,4.18L19,7.81V15H5V7.81L12,4.18M10,9V11H14V9H10M10,13V15H14V13H10Z"/>'
  },
  {
    name: 'JILI',
    active: false,
    icon: '<path d="M7.5,4A5.5,5.5 0 0,0 2,9.5C2,10 2.09,10.5 2.22,11H6.3L7.57,7.63C7.87,6.83 9.05,6.75 9.43,7.63L11.5,13L12.09,11.58C12.22,11.25 12.57,11 13,11H21.78C21.91,10.5 22,10 22,9.5A5.5,5.5 0 0,0 16.5,4C14.64,4 13,4.93 12,6.34C11,4.93 9.36,4 7.5,4V4M3,12.5A1,1 0 0,0 2,13.5A1,1 0 0,0 3,14.5H5.44L11,20C12,20.9 12,20.9 13,20L18.56,14.5H21A1,1 0 0,0 22,13.5A1,1 0 0,0 21,12.5H13.4L12.47,14.8C12.07,15.81 10.92,15.67 10.55,14.83L8.5,9.5L7.54,11.83C7.39,12.21 7.05,12.5 6.6,12.5H3Z"/>'
  },
  {
    name: 'CQ9',
    active: false,
    icon: '<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>'
  },
  {
    name: 'WG',
    active: false,
    icon: '<path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>'
  }
])

// Section refs
const sectionRefs = ref([])

// Scroll to section function
const scrollToSection = (index) => {
  // Update active tab
  tabs.value.forEach((tab, i) => {
    tab.active = i === index
  })
  
  // Smooth scroll to section
  const section = sectionRefs.value[index]
  if (section) {
    const navHeight = 80
    const targetPosition = section.offsetTop - navHeight
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

// Open search function
const openSearch = () => {
  console.log('Search opened')
}

// Observer pour détecter quelle section est visible
let observer = null

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sectionRefs.value.findIndex(ref => ref === entry.target)
        if (index !== -1) {
          tabs.value.forEach((tab, i) => {
            tab.active = i === index
          })
        }
      }
    })
  }, options)

  sectionRefs.value.forEach((section) => {
    if (section) {
      observer.observe(section)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.home-tabs-scroll::-webkit-scrollbar {
  display: none;
}

.home-tabs-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>