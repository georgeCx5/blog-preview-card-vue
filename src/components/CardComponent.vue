<script setup>
defineProps({
   imageCard: String,
   cardAlt: String,
   stateBar: Array,
   date: String,
   title: String,
   description: String,
   imageProfile: String,
   profileAlt: String,
   name: String,
})
</script>
<template>
   <div
      class=" flex flex-col gap-6 w-[327px] sDT:w-[384px] bg-neo-white p-6 text-neo-black font-medium rounded-[1.25rem] border border-black shadow-mbShadow sDT:shadow-sDtShadow">
      <img :src="imageCard" :alt="cardAlt" class=" h-[12.5rem] rounded-[.625rem]">
      <div class=" flex flex-col gap-3">
         <div class=" flex gap-3 text-xs sDT:text-sm font-black">
            <h5 v-for="state in stateBar" class=" bg-neo-yellow py-1 px-3 rounded select-none">{{ state }}</h5>
         </div>
         <h6 class=" text-xs sDT:text-sm">{{ date }}</h6>
         <h1 class=" text-xl sDT:text-2xl hover:text-neo-yellow font-black cursor-pointer select-none">
            {{ title }}</h1>
         <p class=" text-neo-grey text-sm sDT:text-base leading-[150%]">
            {{ description }}
         </p>
      </div>
      <div class=" flex items-center gap-3">
         <img :src="imageProfile" :alt="profileAlt" class=" h-8">
         <h4 class=" text-sm font-black">{{ name }}</h4>
      </div>
   </div>
</template>