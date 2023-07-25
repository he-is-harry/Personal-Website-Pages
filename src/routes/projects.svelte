<script lang="ts">
    import ProjectBlock from "$lib/components/ProjectBlock.svelte";
    import { TagType } from "$lib/types";

    /*
    Svelte,
    Typescript,
    CSS,
    Node,
    Python,
    Java,
    CPP,
    ML,
    ProceduralGeneration,
    Game,
    AI,
    Neuroevolution
    */
</script>

<section id="Projects">
    <h1>Projects</h1>
    <div class="break-line"></div>

    <ul class="grid-list">
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/Personal-Website" imgSrc="/projects/PersonalWebsite.png"
            title="Personal Website"
            description="The website that you are currently looking at right now!"
            tags={[TagType.Svelte, TagType.Typescript, TagType.CSS, TagType.Node]}/>
        </li>
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/Camp-Haliburton" imgSrc="/projects/CampHaliburton.png"
            title="Camp Haliburton"
            description="A RPG pixel art game based on Harry's experiences as a scout"
            tags={[TagType.Game, TagType.Java, TagType.PixelArt]}/>
        </li>
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/Neuroevolution-Flappy-Bird" imgSrc="/projects/NeuroevolutionFlappyBird.png"
            title="Neuroevolution Flappy Bird"
            description="Train neural networks to play a user or each other in Flappy Bird"
            tags={[TagType.ML, TagType.Neuroevolution, TagType.Java]}/>
        </li>
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/Doodle-Classifier" imgSrc="/projects/DoodleClassifier.png"
            title="Doodle Classifier"
            description="Draw doodles to test and train a neural network classifier"
            tags={[TagType.ML, TagType.Java, TagType.Backpropagation]}/>
        </li>
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/Template-Neural-Network" imgSrc="/projects/TemplateNeuralNetwork.png"
            title="Template Neural Network"
            description="A framework to start neural network projects"
            tags={[TagType.Java, TagType.Template]}/>
        </li>
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/Golf" imgSrc="/projects/GolfCartGolf.png"
            title="Golf Cart Golf"
            description="Golf played as a golf cart on a procedurally generated map"
            tags={[TagType.Game, TagType.ProceduralGeneration, TagType.Java]}/>
        </li>
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/ChessAI" imgSrc="/projects/ChessAI.png"
            title="Chess AI"
            description="Play chess against the computer algorithm or against another player"
            tags={[TagType.Game, TagType.AI, TagType.Java, TagType.Algorithms]}/>
        </li>
        <li class="grid-element">
            <ProjectBlock projectLink="https://github.com/he-is-harry/Wii" imgSrc="/projects/WiiTennis.png"
            title="Wii Tennis"
            description="A game emulating Wii Sports Tennis played against a CPU with varying difficulties"
            tags={[TagType.Python, TagType.Game]}/>
        </li>
    </ul>
</section>

<style>
    section {
        margin-inline: var(--size-6);
    }

    .break-line {
        background-image: linear-gradient(to right, var(--dark-1), var(--surface-2));
        border-radius: 9999px;
        width: var(--size-12);
        height: var(--size-1);
    }

    .grid-list {
        display: grid;
        list-style-type: none;
        grid-auto-columns: max-content;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: var(--size-5);
        justify-items: center;
    }

    .grid-element {
        padding: 0;
        /* Make the project block take up as much width as it can */
        width: 100%;
    }

    @media (min-width: 768px) {
        .grid-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media (min-width: 1024px) {
        .grid-list {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
    @media (min-width: 1440px) {
        .grid-list {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }
</style>
