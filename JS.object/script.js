// Tasklar.A
// 1.Choxlu company-leri(obyect)  saxliyan bir array yaradirsiz,icerisinde bir nece muxtelif companyler olsun, 
// 2.bu obyektlerin name,yaradilma tarixi,ve.s kimi propertyler elave edin ;

// let company={
//     name: "Besiktas",
//     createYear= "1903"
// }

// let team={
//     name: "Galatasaray",
//     createYear: 1905
// }

// let eat={
//     name: "Pringles",
//     createYear:1998
// }

// let arr=[company,team,Eat] ;
// let checkAll=arr.forEach(x=> x.name=="Pringles");
// console.log(check);

// Task.B
// 3.sonra array uzerinde iterationlari tetbiq edin mes:adina gore ,yaranma tarxinine ve.s 
class Group{
    constructor(id,name,students=[]){
    this.id=id;
    this.name=name;
    this.students=students;
    const studentCount=5;
  }
    
    addStudent(addStudentToAdd){
        if (this.students.length==thisstudentCount) {
            console.log(`${studentToAdd.name} The number of peoplein the ${this.name} group is maximum`);
        }
        else if(this.students.some(s=>studentToAdd.id==s.id)){
            console.log(`${studentToAdd.name} has already been to the group`);
        }
        else{
            this.students.push(studentToAdd);
            console.log(`Add${studentToAdd.name}to the group ${this.name}`);
       }
       return this.students;
    }
}

class Student {
    constructor(id,name,students=[]){
    this.id=id;
    this.name=name;
    this.lastname=this.lastname;
    this.age=age;
  }
}

const p125=new Group(1,"P125");
const newStu1=new Student(1,"Murad","Umudov",18);
const newStu2=new Student(2,"Elshad","Sadigov",18);
const newStu3=new Student(3,"Baxtiyar","Abbasov",19);
const newStu4=new Student(4,"Ferid","Eliyev",19);
const newStu5=new Student(5,"Adil","Hemzeyev",18);


p125.addStudent(newStu1);
p125.addStudent(newStu2);
p125.addStudent(newStu3);
p125.addStudent(newStu4);
p125.addStudent(newStu5);

