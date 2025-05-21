<script setup>
defineProps(['character']);
</script>
<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{ character.name }}</p>
        </header>
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="character.image" alt="Placeholder image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <table>
                    <tbody>
                        <tr>
                            <th>Status</th>
                            <td>{{ character.status }}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{{ character.gender }}</td>
                        </tr>
                        <tr>
                            <th>Species</th>
                            <td>{{ character.species }}</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>{{ character.location.name }}</td>
                        </tr>
                        <tr>
                            <th>Origin</th>
                            <td>{{ character.origin.name }}</td>
                        </tr>
                        <tr>
                            <th>Episodes</th>
                            <td>{{ character.episode.length }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    min-height: 100%;
}
</style>