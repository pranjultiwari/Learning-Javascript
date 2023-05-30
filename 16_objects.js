var user = {
    firstName: "Pranjul",
    lastName: "Tiwari",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);

    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses which are: ${this.courseList}`;
    },

};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS");
console.log(user.getCourseCount());
user.buyCourse(" Angular");
console.log(user.getCourseCount());
console.log(user.courseList);
