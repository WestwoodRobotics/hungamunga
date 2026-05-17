<script lang="ts">
    import { onMount } from "svelte";
    let pageState = $state("intro");

    function screenShake(){
        let intro = document.getElementById("intro");
        if (intro) intro.classList.add("screen-shake");
    }

    onMount(() => {
        setTimeout(screenShake, 1000);
        setTimeout(() => {
            pageState = "content";
        }, 3500);
        let logo = document.getElementById("logo");
        if (logo) logo.style.rotate = "135deg";
    })

</script>
<style>
    #intro {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    #logo{
        transition: all 1.5s cubic-bezier(.53,-0.72,0,1.6);
        margin: auto;
    }

    @keyframes screenShake {
        0%, 100% { transform: translate(0, 0); }
        10% { transform: translate(-8px, -8px); }
        20% { transform: translate(10px, 6px); }
        30% { transform: translate(-12px, 10px); }
        40% { transform: translate(12px, -8px); }
        50% { transform: translate(-6px, 12px); }
        60% { transform: translate(12px, 4px); }
        70% { transform: translate(-10px, -10px); }
        80% { transform: translate(8px, 12px); }
        90% { transform: translate(-10px, -6px); }
    }

    :global(.screen-shake) {
        animation: screenShake 0.3s ease-in-out infinite;
    }
</style>

{#if pageState == "intro"}
    <div id="intro">
        <img src="/favicon.png" alt="hungamunga logo" id="logo">
    </div>
{:else}
    <div id="content">
        
    </div>
{/if}