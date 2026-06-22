const studentData = [
  {
    userId:1,
    name:'fenil',
    email:'fenil@gmail.com',
    password:'fenil123'
  },
   {
    userId:2,
    name:'divy',
    email:'divy@gmail.com',
    password:'divy123'
  },
   {
    userId:3,
    name:'harsh',
    email:'harsh@gmail.com',
    password:'harsh123'
  }
]

// display student

export const home = (req , res) => {
  return res.render('index' , {students:studentData})
}

// add student 

export const addPage = () => {

}

// insert student

export const insertData = () => {

}

// delete student

export const deleteData = () => {

}

// edit student

export const editData = () => {

}

// update student

export const updateData = () => {

}