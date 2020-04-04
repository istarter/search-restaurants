import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wnsv8rOKfD0W1ToSECO9cymlfX1Ao2YSKjEmjAm0xL-Fy_0u6rGgY5Dyh5pbso1ftkt1XaRl9wplO1P8IGGMFYGN-KBLKURp-6DhgOKCHfql9fR-r4HF8Qlx1dOEXnYx",
  },
});
