
export default {

    data() {
        return {
            api: null,
            loading: true,
        };
    },
    methods: {
        fetchData(url) {
            this.loading = true;
            this.api = null;
            fetch(`http://localhost:3000${url}`)
                .then((r) => r.json())
                .then((r) => {
                    this.api = r;
                    this.loading = false;
                });
        },
    }
}