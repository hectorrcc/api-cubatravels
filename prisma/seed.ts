import prismaClient from "./prismaClient";

async function main() {
 const users = await prismaClient.user.createMany({
    data: [
      {
        name: "John",
        surname: "Snow",
      },
      {
        name: "Deanerys",
        surname: "Targaryen",
      },
      {
        name: "Sansa",
        surname: "Stark",
      },
      {
        name: "Cersei",
        surname: "Lannister",
      },
      {
        name: "Tyrion",
        surname: "Lannister",
      },
   
    ],
  });
  const projects = await prismaClient.project.createMany({data:[
    {name: "Project 1", description:"Project 1", },
    {name: "Project 2", description:"Project 2", },
    {name: "Project 3", description:"Project 3", },
    {name: "Project 4", description:"Project 4", },
    {name: "Project 5", description:"Project 5", },
  ]})

  Promise.all([users, projects])
}
main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
