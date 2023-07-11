<script lang="ts">
    export let length: string;
</script>

<svg
    width={length}
    height={length}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g id="Parabolas">
        <!-- <rect width="128" height="128" fill="white" /> -->
        <path
            id="black"
            d="M75 4.00001C89.8075 138.021 105.17 59.8421 111 4.00001M75 124C89.8075 -10.0211 105.17 68.1579 111 124"
            stroke="black"
            stroke-width="14"
        />
        <path
            id="green"
            d="M18 124C32.8075 -10.0211 48.1698 68.1579 54 124M18 4C32.8075 138.021 48.1698 59.8421 54 4"
            stroke="url(#paint0_linear_0_1)"
            stroke-width="14"
        />
    </g>
    <defs>
        <linearGradient
            id="paint0_linear_0_1"
            x1="36"
            y1="14.5"
            x2="36"
            y2="113"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#0BD411" />
            <stop offset="0.486458" stop-color="#0C9D11" />
            <stop offset="0.996875" stop-color="#0BD411" />
        </linearGradient>
    </defs>
</svg>

<style>
    svg {
        cursor: pointer;
    }
    
    #black, #green {
        transition: all 450ms ease;
    }
    
    svg:hover #black {
        transform: translateX(-44%);
    }
    svg:hover #green {
        transform: translateX(44%);
    }
</style>
