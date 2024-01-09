const api = "https://api.exchangerate-api.com/v4/latest/USD";

const results = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => console.log(res?.rates))
    .catch((err) => console.log(err));
};

results();
