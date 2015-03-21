function DoctorWeb() {
    this.body = [new Point(20, 21)];
    this.course = 'left';


    this.destruct = function() {
        for(var point in this.body) {
            delete point.coordinate;
        }
        delete this.body;
        delete this.course;
    }
}