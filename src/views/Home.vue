<template>
  <div>
    <SiteHero />
    <AboutUs />
    <RecentWorks />
    <OurTeam />
    <GetInTouch />
    <Footer />
  </div>
</template>

<script>
  import SiteHero from '@/components/SiteHero.vue';
  import AboutUs from '@/components/AboutUs.vue';
  import RecentWorks from '@/components/RecentWorks.vue';
  import OurTeam from '@/components/OurTeam.vue';
  import GetInTouch from '@/components/GetInTouch.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'Home',
    components: {
      SiteHero,
      AboutUs,
      RecentWorks,
      OurTeam,
      GetInTouch,
      Footer
    }
}
</script>

