class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Setter for height
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.error('Height must be positive.');
        }
    }

    // Method to calculate area
    calculateArea() {
        return this._width * this._height;
    }
}

// Usage
let rect = new Rectangle(10, 20);
console.log(rect.height); // 20
rect.height = 25;
console.log(rect.calculateArea()); // 250
