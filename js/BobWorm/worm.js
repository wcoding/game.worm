function Worm() {
    this.body = [new Point(1, 2), new Point(1, 1), new Point(1, 0)];
    this.head = this.body[0];
    this.course = 'right';


    this.destruct = function() {
        for(var point in this.body) {
            delete point.coordinate;
        }
        delete this.body;
        delete this.head;
        delete this.course;
    }
}