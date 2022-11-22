
export default {

    data() {
        return {
            api: null,
        };
    },
    methods: {
        fetchData(url) {
            fetch(`http://localhost:3000${url}`)
                .then((r) => r.json())
                .then((r) => (this.api = r));
        },
    }
}