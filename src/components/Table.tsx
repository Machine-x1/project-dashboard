const OwnTable = () => {
  const columns = [
    {
      Header: "Name" as any,
      accessor: "name" as any,
    },
    {
      Header: "Age" as any,
      accessor: "age" as any,
    },
    {
      Header: "Email" as any,
      accessor: "email" as any,
    },
    {
      Header: "City" as any,
      accessor: "city" as any,
    },
  ];

  const data = [
    {
      name: "Ayaan",
      age: 26,
      email: "ayaan@gmail.com",
      city: "Colombo",
    },
    {
      name: "Ahana",
      age: 22,
      email: "ahana@gmail.com",
      city: "Kandy",
    },
    {
      name: "Peter",
      age: 40,
      email: "peter@gmail.com",
      city: "California",
    },
    {
      name: "Virat",
      age: 30,
      email: "virat@gmail.com",
      city: "Chennai",
    },
    {
      name: "Rohit",
      age: 32,
      email: "rohit@gmail.com",
      city: "New Delhi",
    },
    {
      name: "Dhoni",
      age: 37,
      email: "dhoni@gmail.com",
      city: "Hydrabad",
    },
  ];

  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 "></div>
    </div>
  );
};

export default OwnTable;
