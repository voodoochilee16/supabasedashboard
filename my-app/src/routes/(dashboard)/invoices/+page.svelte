<script>
	import Search from "$lib/components/Search.svelte";

</script>

<svelte:head>
    <title>Invoices</title>
</svelte:head>

<div class="flex justify-between items-center mb-16">
    <!-- Search Field -->

    <Search></Search>

    <!-- new invoice button -->

    <div>
        <button class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-mono text-xl font-black text-white shadow-colored hover:shadow-coloredHover traslate-y-0 hover:translate-y-2 transition-all">Invoice</button>
    </div>

</div>

<!-- list of invoices -->

<div>
    <!-- header -->
    <div>
        <h3>Status</h3>
        <h3>Due Date</h3>
        <h3>ID</h3>
        <h3>Client</h3>
        <h3>Amount</h3>
        <div></div>
        <div></div>

    </div>

    <!-- invoices -->

    <div> 
        <!-- dummy date -->
        <div>Tag</div>
        <div>01/08/2022</div>
        <div>12345</div>
        <div>compressed.fm</div>
        <div>$504</div>
        <div>View</div>
        <div>More</div>


    </div>

</div>

<div>
    Total: $1337
</div>

