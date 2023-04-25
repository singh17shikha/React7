import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

const App = () => {
  const users = [
    {
      name: 'Raju Shrivastava',
      designation: 'Software Engineer',
      jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in ullamcorper nulla. Sed eget sapien nec quam laoreet finibus non eget nunc. Morbi non dolor vel nisi ultrices tempus sed vel tellus.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Lisa Smith',
      designation: 'Product Manager',
      jobDescription: 'Pellentesque vitae arcu non erat malesuada hendrerit in sit amet sapien. Suspendisse potenti. Curabitur lacinia consectetur sapien, a lacinia tortor malesuada id. Nulla facilisi. Nullam fringilla felis augue, vitae sagittis nibh malesuada quis.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'John Doe',
      designation: 'Sales Representative',
      jobDescription: 'Integer in arcu scelerisque, faucibus turpis ac, ultricies nibh. Sed efficitur, elit in suscipit laoreet, ante enim venenatis lectus, sit amet consectetur ex lectus vel dolor. Sed id tincidunt lorem. Nunc varius sapien id tristique pharetra.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];

  const handleSeeMore = (name) => {
    alert(name);
  };

  return (
    <div className="App">
      {users.map((user) => (
        <ProfileCard key={user.name} user={user} onSeeMore={handleSeeMore} />
      ))}
    </div>
  );
};

export default App;
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Secu