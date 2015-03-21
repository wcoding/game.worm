function Food() {
    this.position = new Point();
    this.fruit = attrClassFoods[Math.floor(Math.random() * attrClassFoods.length)];


    this.destruct = function() {
        for(var point in this.position) {
            delete point.coordinate;
        }
        delete this.position;
        delete this.fruit;
    }
}