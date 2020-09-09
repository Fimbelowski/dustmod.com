<template>
  <v-container
    id="about-section"
    class="py-8"
    tag="section"
  >
    <v-row
      justify="center"
    >
      <v-col
        cols="8"
      >
        <h2
          class="mb-8 text-center text-h2"
        >
          What is Dustmod?
        </h2>
        <v-card>
          <v-card-text>
            <blockquote
              class="body-1"
            >
              {{ aboutText }}
            </blockquote>
            <div
              class="text-body-1 text-right"
            >
              -msg555, Creator of Dustmod and
              <a
                href="http://dustkid.com/"
                rel="noopener"
                target="_blank"
              >
                dustkid.com
              </a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutSection',

  data() {
    return {
      aboutText: ' Dustmod is a hobby project that came as a natural extension to dustkid.com, a website that I operate that collects all sorts of Dustforce related statistics. While integrating dustkid.com curated leaderboards into Dustmod and extending the replay system to give richer metadata was an initial goal, the project has expanded to include quite a variety of extended functionality on top of the base game. It\'s my hope that Dustmod continues to be a way to launch deep into the nearly unlimited content that Dustforce and the surrounding community offers.',
    };
  },
};
</script>

<style lang="scss">
#about-section {

  blockquote {
    border-left: 10px solid #757575;
    padding: 0.5em 10px;

    &:before {
      color: #757575;
      content: open-quote;
      font-size: 4em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
  }
}
</style>
