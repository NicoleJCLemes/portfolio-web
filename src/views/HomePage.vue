<template>
  <main class="bg-blue-950 h-full">
    <div class="bg-white h-64 p-10 flex flex-col justify-between">
      <h1
        id="typewriter"
        class="text-blue-900 font-medium text-4xl sm:text-5xl lg:text-7xl"
      >
        {{ typedText }}
      </h1>
      <div>
        <h2 class="font-thin text-lg">Nome Sobrenome</h2>
        <p class="font-thin text-sm">emailteste@gmail.com</p>
        <p class="font-thin text-sm">(21)99999-9999</p>
      </div>
    </div>
    <section class="flex flex-wrap justify-center p-10 h-full">
      <article
        class="p-10 h-60 w-60 m-10 rounded-xl hover:scale-150 bg-brand-main"
      >
        <h1 class="text-gray-300">Título do projeto 1</h1>
      </article>
      <article
        class="p-10 h-60 w-60 m-10 rounded-xl hover:scale-150 bg-brand-main"
      >
        <h1 class="text-gray-300">Título do projeto 2</h1>
      </article>
      <article
        class="p-10 h-60 w-60 m-10 rounded-xl hover:scale-150 bg-brand-main"
      >
        <h1 class="text-gray-300">Título do projeto 3</h1>
      </article>
      <article
        class="p-10 h-60 w-60 m-10 rounded-xl hover:scale-150 bg-brand-main"
      >
        <h1 class="text-gray-300">Título do projeto 4</h1>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      words: ["DESIGNER", "DESENVOLVEDOR"],
      i: 0,
      j: 0,
      currentWord: "",
      isDeleting: false,
      typedText: "",
    };
  },
  methods: {
    type() {
      this.currentWord = this.words[this.i];
      if (this.isDeleting) {
        this.typedText = this.currentWord.substring(0, this.j - 1);
        this.j--;
        if (this.j === 0) {
          this.isDeleting = false;
          this.i++;
          if (this.i === this.words.length) {
            this.i = 0;
          }
        }
      } else {
        this.typedText = this.currentWord.substring(0, this.j + 1);
        this.j++;
        if (this.j === this.currentWord.length) {
          this.isDeleting = true;
        }
      }
      setTimeout(this.type, 150);
    },
  },
  mounted() {
    this.type();
  },
};
</script>

<style></style>
