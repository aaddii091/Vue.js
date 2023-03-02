const app = Vue.createApp({
  data() {
    return {
      url: "https://www.youtube.com/",
      time: "good",
      age: 13,
      line: "She Sells Sea Shells by the Sea Shore",
      visibility: true,
      books: [
        { bookN: "ABC", title: "thisisABC", isFav: true },
        { bookN: "ABC1", title: "thisisABC1", isFav: true },
        { bookN: "ABC2", title: "thisisABC2", isFav: false },
      ],
    };
  },
  methods: {
    decrement() {
      if (this.age <= 0) {
        alert("It");
        return;
      }

      this.age -= 1;
    },
    changeTitle() {
      this.line = "title is changed";
      return;
    },
    togglebook() {
      this.visibility = !this.visibility;
    },
    change(book) {
      console.log("clikd");
      book.isFav = !book.isFav;
    },
  },
  computed: {},
  watch: {},
});
app.mount("#app");
