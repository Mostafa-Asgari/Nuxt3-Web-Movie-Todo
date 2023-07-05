<template>
  <div class="contact">
    <h1 class="title-in-page px-[5%] py-8 text-left text-2xl font-bold">contact us</h1>
    
    <div class="px-[5%] py-4 grid grid-cols-1 min-[576px]:grid-cols-2 md:grid-cols-3 gap-4 text-center">
      <ContactDetails i="phone" title1="number" title2="98-902-6308105+" title3="111-222-3333+" />
      <ContactDetails i="envelope" title1="email" title2="mostafamina25@gmail.com" title3="example@gmail.com" />
      <ContactDetails i="map-marker-alt" title1="address" title2="karaj - shahin villa - bonyad - no.13" class="box-auto" />
    </div>

    <div class="form px-[5%] mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <form @submit.prevent="" class="bg-gray-200 rounded-md p-4">
        <h1 class="font-bold text-xl mb-3">get in touch</h1>
        <input type="text" class="inp bg-[#fff] w-full rounded p-2 mb-2" placeholder="your name">
        <input type="number" class="inp bg-[#fff] w-full rounded p-2 mb-2" placeholder="your number">
        <textarea name="" class="inp bg-[#fff] w-full rounded p-2 mb-2" rows="8" placeholder="your message"></textarea>
        <input type="submit" class="btn" value="send message">
      </form>

      <div class="w-full h-full max-sm:h-[17rem] rounded-md overflow-hidden">
        <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1616.8896475531587!2d50.93823670287771!3d35.854415001511484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8db9633e237903%3A0x8b50e4dc6f8e31de!2z2LTZh9ix2qkg2LTZh9ix2K_Yp9ix24w!5e0!3m2!1sfa!2s!4v1686406361497!5m2!1sfa!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
@media (min-width: 576px) and (max-width: 768px){
  .contact .box-auto{transform: translateX(-50%);}
}
.contact .form form,
.contact .form form input,
.contact .form form textarea{
  direction: ltr;
  text-align: left;
  outline: 0;
}
.contact .form .inp:focus{
  box-shadow: 0 4px 4px 2px rgba(255, 72, 72, 0.3);
}

</style>