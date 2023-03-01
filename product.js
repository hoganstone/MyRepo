const app = {
  data() {
    return {
      apiPath: "hoganstone",
      productDetail: {},
      // 產品資料格式
      products: [],
    };
  },
  methods: {
    checkAdmin() {
      axios
        .post(`https://vue3-course-api.hexschool.io/v2/api/user/check`)
        .then((response) => {
          this.getData();
        })
        .catch((err) => {
          
          window.location = "index.html";
        });
    },
    getData() {
      axios
        .get(
          `https://vue3-course-api.hexschool.io/v2/api/${this.apiPath}/admin/products`
        )
        .then((response) => {
          this.products = response.data.products;
        })
        .catch((error) => {
         
        });
    },
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;
    // 每次都會帶入
    this.checkAdmin();
  },
};
Vue.createApp(app).mount("#app");