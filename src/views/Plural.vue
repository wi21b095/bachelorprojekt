<template>
    <div class="container">
        <div class="content">
            <div class="input-container">
                <input v-model="number" type="number" />
            </div>
            <div class="images">
                <img src="/img/Brot.jpg" @click="displayText('bread')" alt="Brot" class="image" />
                <img src="/img/Käse.jpg" @click="displayText('cheese')" alt="Käse" class="image" />
                <img src="/img/Orange.jpg" @click="displayText('oranges')" alt="Orangen" class="image" />
                <img src="/img/Wurst.jpg" @click="displayText('sausages')" alt="Würstchen" class="image" />
                <img src="/img/car.jpg" @click="displayText('car')" alt="Auto" class="image" />
                <img src="/img/tree.jpg" @click="displayText('tree')" alt="Baum" class="image" />
            </div>
            <div class="display">{{ display }}</div>
            <div class="history">
                <p v-for="(item, index) in reversedHistory" :key="index"> {{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Plural",
    data() {
        return {
            number: null,
            display: "",
            history: [],
        };
    },
    computed: {
        reversedHistory() {
            return this.history.slice().reverse();
        },
    },
    methods: {
        displayText(word) {
            if (isNaN(this.number)) return;
            const translation = this.$tc(`plural.${word}`, this.number);
            this.display = `${this.number} ${translation}`;
            this.history.push(`${this.number} + ${translation} = ${this.display}`);
            this.history = this.history.slice(-10).reverse();
        }
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    text-align: center;
}

.images {
    margin-bottom: 20px;
}

.input-container {
    margin-bottom: 20px;
}

.image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    cursor: pointer;
}

.display {
    margin-bottom: 10px;
}

.history {
    margin-top: 10px;
    text-align: left;
}
</style>
