<template>
  <div class="footer">

    <footer class="bg-stone-200 px-[5%] py-2">

        <div class="box-main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-stone-600 mb-4 py-8 px-2">
            <BoxFooter class="max-md:mb-4" title1="explore" title2="home -" title3="about -" title4="course-1 -" title5="course-2 -" title6="course-3 -" title7="teachers -" title8="blog -" title9="contact -" />
            <BoxFooter class="max-md:mb-4" title1="categorie" title2="web design -" title3="graphic design -" title4="UI / UX design -" title5="SEO marketing -" title6="digital marketing -" title7="email marketing -" title8="all courses -" />
            <BoxFooter class="max-md:mb-4" title1="quick links" title2="my account -" title3="feedback -" title4="help -" title5="certificates -" title6="newsletter -" />
            <BoxFooter class="max-md:mb-4" title1="explore" title2="facebook -" title3="twitter -" title4="linkedin -" title5="instagram -" title6="github -" />
        </div>

        <div class="credit text-center mb-3 text-stone-800 text-xs">created by <span class="text-red-600">mostafa asgari </span> | all rights reserved.</div>
    
      </footer>

  </div>
</template>

<script setup>

</script>

<style scoped>
  .box-main{
    direction: ltr;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); */
  }
</style>