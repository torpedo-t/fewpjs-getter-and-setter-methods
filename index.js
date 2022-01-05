// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        // return radius * 2
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    get circumference() {
        // return this.diameter() * pi
        return (this.radius * 2) * Math.PI;
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference / 2) / Math.PI;
    }

    get area() {
        // return pie * radius^2
        return this.radius ** 2 * Math.PI;
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea) / Math.PI;
    }
}

// class Square {
//     constructor(sideLength) {
//       this.sideLength = sideLength;
//     }
  
//     get area() {
//       return this.sideLength * this.sideLength;
//     }
  
//     set area(newArea) {
//       this.sideLength = Math.sqrt(newArea);
//     }
//   }