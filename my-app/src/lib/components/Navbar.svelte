<script lang="ts">
    import {page} from "$app/stores"
	import Close from "$lib/components/Icon/Close.svelte";
	import Hamburger from "$lib/components/Icon/Hamburger.svelte";

    let isNavShowing = false;
</script>
<svelte:head>
    {#if isNavShowing}
        <style lang="postcss">
        body {
            @apply overflow-hidden md:overflow-auto
        }
        </style>
    {/if}
</svelte:head>
<!-- mobile nav  -->

<button class="z-navBarToggle fixed right-6 top-6 md:hidden" on:click={() => {isNavShowing = !isNavShowing}}
    class:text-goldenFizz = {isNavShowing}>
    {#if isNavShowing}
        <Close width={32} height={32}></Close>
    {:else}
        <Hamburger width={32} height={32}></Hamburger>
    {/if}
</button>


<header class="z-navBar transition-transform absolute md:relative -translate-x-full md:translate-x-0 w-full h-screen md:col-span-3 bg-daisyBush text-center"
class:translate-x-0={isNavShowing}
>

    <div class="mt-10 mb-10 md:mb-24">
        <a href="/invoices"><img src="/images/logo.svg" alt="The Dollar Holler" class="mx-auto"></a>
    </div>

    <nav>
        <ul class="list-none text-2xl font-mono font-bold">
            <li><a class:active={$page.url.pathname === "/invoices" } href="/invoices">Invoices</a></li>
            <li><a class:active={$page.url.pathname === "/clients" } href="/clients">Clients</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>

        </ul>
    </nav>

</header>

<style lang="postcss">
    nav ul li {
        @apply mb-6;
    }

    nav ul li a {
        @apply font-bold text-white hover:text-goldenFizz;
    }

    nav ul li a.active{
        @apply text-robinEggBlue px-6 transition-[padding];
        background: url("/images/active-nav--left.svg") left top no-repeat,
        url("images/active-nav--right.svg") right top no-repeat;
    }

    nav ul li a.active:hover{
        @apply px-9;
    }
</style>