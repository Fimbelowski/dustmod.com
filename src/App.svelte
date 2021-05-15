<main>
  <header>
    <div
      class="header__inner-container page-width"
    >
      <h1
        class="header__text"
      >
        DUSTMOD
      </h1>
    </div>
  </header>
</main>

<style>
  @font-face {
    font-family: 'Caracteres';
    src: url('/assets/fonts/Caracteres L1.ttf');
  }

  header {
    background-image: url('/assets/images/headerTiles.png');
    background-position: center;
    box-shadow: 5px -4px 5px 10px rgba(0, 0, 0, .6);
    box-sizing: border-box;
    height: 96px;
  }

  .header__inner-container {
    align-items: center;
    display: flex;
    height: 100%;
  }

  .header__text {
    color: white;
    font-family: Caracteres, sans-serif;
    font-size: 3rem;
    margin: 0;
  }

  main {
    background: url('/assets/images/backgroundTiles.png');
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .page-width {
    margin: auto;
    max-width: 1000px;
  }
</style>