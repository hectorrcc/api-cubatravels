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
    {name: "The North", description:"Project 1", },
    {name: "The Riverlands", description:"Project 2", },
    {name: "The Westerlands", description:"Project 3", },
    {name: "The Reach", description:"Project 4", },
    {name: "Dorne", description:"Project 5", },
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
