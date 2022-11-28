<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
</script>


<div class="grid grid-cols-12 md:gap-x16 bg-whisper min-h-screen">
    
    <Navbar class=navbar></Navbar>
    <main class="col-span-12 md:col-span-8 md:pt-10">
        <slot></slot>
    </main>

</div>


