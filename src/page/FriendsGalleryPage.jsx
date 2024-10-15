import React from "react";

const FriendsGalleryPage = () => {
  const friends = [
    { name: "Mr. Haseeb Khan", img: "/Haseeb Khan.jpeg" },
    { name: "Mr. Abdul Rahman", img: "/Abdullah Rahman.jpg" },
    { name: "Mr. Zia-ul- Haq", img: "/Zia-ul- Haq.jpg" },
    { name: "Qari Usama", img: "/Qari Usama.jpeg" },
    { name: "Hussain Taj", img: "/Hussain Taj.jpeg" },
    { name: "Salman Khan", img: "/Sulman Khan.jpeg" },
    { name: "Umar Farooq", img: "/Umar Farooq.jpeg" },
    { name: "Zubair Khan", img: "/Zubair Khan.jpeg" },
    { name: "Ali Raza", img: "/Ali Raza.jpeg" },
    { name: "Asad Khan", img: "/Asad Khan.jpeg" },
    { name: "Fahad Khan", img: "/Fahad Khan 2.jpeg" },
    { name: "Hasnain Khan", img: "/Hasnain.jpeg" },
    { name: "Adocate Ibrar Khan", img: "/Ibrar Khan.jpeg" },
    { name: "Idress Khan", img: "/Idress Khan.jpeg" },
    { name: "Imran Khan", img: "/Imran.jpeg" },
    { name: "Irshad Khan", img: "/Irshad Khan.jpeg" },
    { name: "Junaid Ali Shah", img: "/Junaid Ali Shah.jpg" },
    { name: "Dr. Mohsain Khan", img: "/Mohsain Khan.jpeg" },
    { name: "Dr. Uzair Khan", img: "/Dr. Uzair Khan.jpeg" },
    { name: "Murtaza Khan", img: "/Murtaza.jpeg" },
    { name: "Usman Khan", img: "/Usman Khan.jpeg" },
    { name: "kamran Gulab", img: "/kamran.jpeg" },
    { name: "shahzab", img: "/shahzab.jpeg" },
    { name: "Zakir Khan", img: "/Zakir Khan.jpeg" },

    // Add more friends and their images here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Friends Gallery
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={friend.img}
              alt={friend.name}
              className="w-full h-auto max-h-64 object-cover transition duration-500 rounded-lg"
            />
            <div className="p-2 text-center">
              <h3 className="text-lg font-semibold">{friend.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsGalleryPage;
