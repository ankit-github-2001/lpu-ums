

const employees = [
  {
    "id": 1,
    "email": "e@e.com",
    "password": "123",
    "firstname": "Ankit Kumar",
    "role": "Employee",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate third-party APIs for payment",
        "taskDate": "2024-10-10"
      },
      {
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review code for upcoming release",
        "taskDate": "2024-10-11"
      },
      {
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Unit Testing",
        "taskDescription": "Write unit tests for new features",
        "taskDate": "2024-10-09"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstname": "Priya",
    "role": "Employee",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database optimization",
        "taskDescription": "Optimize queries for better performance",
        "taskDate": "2024-10-11"
      },
      {
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design new feature",
        "taskDescription": "Create mockups for the new feature",
        "taskDate": "2024-10-09"
      },
      {
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Refactor code",
        "taskDescription": "Refactor legacy code for better performance",
        "taskDate": "2024-10-08"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstname": "Raj",
    "role": "Employee",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Fix bugs reported by QA",
        "taskDate": "2024-10-12"
      },
      {
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "System Maintenance",
        "taskDescription": "Perform routine system maintenance",
        "taskDate": "2024-10-11"
      },
      {
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Documentation Update",
        "taskDescription": "Update system documentation",
        "taskDate": "2024-10-13"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstname": "Sneha",
    "role": "Employee",
    "taskCounts": {
      "active": 0,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Research new market trends",
        "taskDate": "2024-10-09"
      },
      {
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Feature Development",
        "taskDescription": "Develop new feature for product",
        "taskDate": "2024-10-11"
      },
      {
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Performance Testing",
        "taskDescription": "Conduct performance tests",
        "taskDate": "2024-10-08"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstname": "Ankit",
    "role": "Employee",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Frontend Enhancement",
        "taskDescription": "Enhance frontend UI/UX",
        "taskDate": "2024-10-12"
      },
      {
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Routine Maintenance",
        "taskDescription": "Monthly maintenance task",
        "taskDate": "2024-10-09"
      },
      {
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "New Tech Research",
        "taskDescription": "Research new technology trends",
        "taskDate": "2024-10-10"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    "firstname": "Ankit Kumar",
    "role": "Admin",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "category": "Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Project overview",
        "taskDescription": "Review project status and milestones",
        "taskDate": "2024-10-11"
      },
      {
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Quarterly report",
        "taskDescription": "Prepare and submit the quarterly report",
        "taskDate": "2024-10-09"
      }
    ]
  }
];



export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
  
}
export const getLocalStorage = () => {
 const employees =  JSON.parse(localStorage.getItem('employees'))
 const admin =  JSON.parse(localStorage.getItem('admin'))

//  console.log(employee, admin)
return {employees, admin}

}




// const LocalStorage = () => {
//   return (
//     <div>LocalStorage</div>
//   )
// }

