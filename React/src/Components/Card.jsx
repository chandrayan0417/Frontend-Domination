import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1650647525982-458dc659917c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Microsoft",
      description:
        "Microsoft is a global leader in software, services, devices, and solutions. Known for Windows, Office, and Azure.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619948219791-009eba40ae45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Google",
      description:
        "Google is a technology giant renowned for its search engine, cloud computing, advertising services.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549813069-f95e44d7f498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D",
      name: "Facebook",
      description:
        "Facebook, now Meta, is a leading social media company known for connecting people across the globe.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1643208589889-faf52730d672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxhbWF6b258ZW58MHx8MHx8fDA%3D",
      name: "Amazon",
      description:
        "Amazon is a global e-commerce and cloud computing giant. It offers a wide range of products and services.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619948219791-009eba40ae45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
      name: "Apple",
      description:
        "Apple is known for its innovative technology products, including the iPhone, iPad, and Mac computers.",
    },
  ];
  
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center gap-10 justify-center">
      {data.map((item, index) => (
        <div key={index} className="w-52 bg-zinc-100  rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={item.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-xs mt-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
