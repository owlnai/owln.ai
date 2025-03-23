<template>
  <div>
    <UHeader>
      <h1>My Portfolio</h1>
    </UHeader>
    
    <main>
      <UCard>
        <h2>About Me</h2>
        <p>Brief introduction about yourself.</p>
      </UCard>

      <UCard>
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </UCard>

      <UCard>
        <h2>Contact</h2>
        <p>Email: example@example.com</p>
      </UCard>
    </main>
    
    <UFooter>
      <p>© 2025 Your Name</p>
    </UFooter>
  </div>
</template>

<script setup>
// No additional script setup needed for this basic example
</script>

<style scoped>
main {
  padding: 20px;
  display: grid;
  gap: 20px;
}
</style>
