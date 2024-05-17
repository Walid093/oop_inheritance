import inquirer from 'inquirer';

class Person {
  personality: string;

  constructor() {
    this.personality = "Mystery";
  }

  static getPersonality(person: Person, choice: number): void {
    if (choice === 1) {
      person.personality = "Introvert";
    } else if (choice === 2) {
      person.personality = "Extrovert";
    } else {
      person.personality = "You are Still a Mystery";
    }
  }
}

class Program {
  student: Student;

  constructor(student: Student) {
    this.student = student;
  }

  async run(): Promise<void> {
    const { choice } = await inquirer.prompt([
      {
        type: 'number',
        name: 'choice',
        message: 'Enter number 1 if you keep to yourself and 2 if you like to go out:',
      }
    ]);

    Person.getPersonality(this.student, choice);

    console.log(`You are a ${this.student.personality} person.`);
  }
}

class Student extends Person {
  name: string;

  constructor() {
    super();
    this.name = "";
  }

  async gatherInfoAndDisplay(): Promise<void> {
    const { studentName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'studentName',
        message: 'Enter your name:'
      }
    ]);

    this.name = studentName;



    console.log(`Your name is ${this.name} and Your personality is ${this.personality}`);
  }
}

async function main() {

    const student = new Student();
  const program = new Program(student);
  await program.run();
  
  await student.gatherInfoAndDisplay();
}

main();
