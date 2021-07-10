<template>
  <div class="home">
    <ProfileSearch />
    <ProfileList />
  </div>
</template>

<script>
import ProfileSearch from '../components/profile-search/profile-search.vue'
import ProfileList from '../components/profile-list/profile-list.vue'

export default {
  name: 'Home',
  components: {
    ProfileSearch,
    ProfileList
  }
}
</script>
