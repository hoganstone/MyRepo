const app = {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post(`https://vue3-course-api.hexschool.io/v2/admin/signin`, this.user)
        .then((reponse) => {
          const { token, expired } = reponse.data;
          document.cookie = `Token=${token}; expires=${new Date(
            expired
          )};  path=/`;
          window.location = "product.html";
          console.log(reponse);
        })
        .catch((error) => {
          alert(error.data.message);
        });
    },
  },
  mounted() {},
};
Vue.createApp(app).mount("#app");
